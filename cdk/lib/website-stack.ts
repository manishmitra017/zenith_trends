import * as path from 'path';
import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins';
import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as acm from 'aws-cdk-lib/aws-certificatemanager';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as ses from 'aws-cdk-lib/aws-ses';
import { Construct } from 'constructs';

export interface WebsiteStackProps extends cdk.StackProps {
  certificateArn?: string;
}

export class WebsiteStack extends cdk.Stack {
  public readonly hostedZone: route53.IHostedZone;

  constructor(scope: Construct, id: string, props?: WebsiteStackProps) {
    super(scope, id, props);

    const domainName = 'zenithtrends.com.au';
    const wwwDomainName = `www.${domainName}`;

    // ── Route53 Hosted Zone ──────────────────────────────────────
    this.hostedZone = new route53.PublicHostedZone(this, 'HostedZone', {
      zoneName: domainName,
      comment: 'Hosted zone for Zenith Trends website',
    });

    // ── SES Domain Identity (auto DKIM/MX via Route53) ──────────
    new ses.EmailIdentity(this, 'SesEmailIdentity', {
      identity: ses.Identity.publicHostedZone(this.hostedZone),
      mailFromDomain: `mail.${domainName}`,
    });

    // ── Lambda: Quote email handler ──────────────────────────────
    const quoteFunction = new lambda.Function(this, 'QuoteFunction', {
      functionName: 'zenith-trends-quote',
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, '../../lambda/quote')),
      timeout: cdk.Duration.seconds(30),
      memorySize: 256,
      description: 'Receives quote form submissions and sends email via SES',
      environment: {
        TO_EMAIL: 'info@zenithtrends.com.au',
        CC_EMAIL: 'manish.bvc@gmail.com',
        FROM_EMAIL: `quotes@${domainName}`,
      },
    });

    quoteFunction.addToRolePolicy(
      new iam.PolicyStatement({
        effect: iam.Effect.ALLOW,
        actions: ['ses:SendEmail', 'ses:SendRawEmail'],
        resources: ['*'],
      })
    );

    // ── API Gateway HTTP API with CORS ───────────────────────────
    const api = new apigatewayv2.HttpApi(this, 'QuoteApi', {
      apiName: 'zenith-trends-quote-api',
      description: 'Zenith Trends quote submission API',
      corsPreflight: {
        allowOrigins: [
          `https://${domainName}`,
          `https://${wwwDomainName}`,
          'http://localhost:3000',
        ],
        allowMethods: [
          apigatewayv2.CorsHttpMethod.POST,
          apigatewayv2.CorsHttpMethod.OPTIONS,
        ],
        allowHeaders: ['Content-Type'],
        maxAge: cdk.Duration.hours(24),
      },
    });

    api.addRoutes({
      path: '/quote',
      methods: [apigatewayv2.HttpMethod.POST],
      integration: new integrations.HttpLambdaIntegration(
        'QuoteIntegration',
        quoteFunction
      ),
    });

    // ── ACM Certificate (us-east-1, for CloudFront) ──────────────
    const certificate = props?.certificateArn
      ? acm.Certificate.fromCertificateArn(this, 'ImportedCertificate', props.certificateArn)
      : undefined;

    // ── S3 Bucket ────────────────────────────────────────────────
    const websiteBucket = new s3.Bucket(this, 'WebsiteBucket', {
      bucketName: `zenith-trends-static-${this.account}`,
      publicReadAccess: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
      versioned: false,
    });

    // ── CloudFront URL rewrite function ──────────────────────────
    const urlRewriteFunction = new cloudfront.Function(this, 'UrlRewriteFunction', {
      code: cloudfront.FunctionCode.fromInline(`
function handler(event) {
  var request = event.request;
  var uri = request.uri;
  if (uri.endsWith('/')) {
    request.uri += 'index.html';
  } else if (!uri.includes('.')) {
    request.uri += '/index.html';
  }
  return request;
}
      `),
      functionName: 'ZenithTrendsUrlRewrite',
      comment: 'Rewrites URLs to append index.html for Next.js static export',
    });

    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: origins.S3BucketOrigin.withOriginAccessControl(websiteBucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
        cachedMethods: cloudfront.CachedMethods.CACHE_GET_HEAD_OPTIONS,
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED,
        compress: true,
        functionAssociations: [{
          function: urlRewriteFunction,
          eventType: cloudfront.FunctionEventType.VIEWER_REQUEST,
        }],
      },
      domainNames: certificate ? [domainName, wwwDomainName] : undefined,
      certificate: certificate,
      defaultRootObject: 'index.html',
      errorResponses: [
        { httpStatus: 404, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: cdk.Duration.minutes(5) },
        { httpStatus: 403, responseHttpStatus: 404, responsePagePath: '/404.html', ttl: cdk.Duration.minutes(5) },
      ],
      priceClass: cloudfront.PriceClass.PRICE_CLASS_100,
      minimumProtocolVersion: cloudfront.SecurityPolicyProtocol.TLS_V1_2_2021,
    });

    // ── Route53 A records ────────────────────────────────────────
    if (certificate) {
      new route53.ARecord(this, 'AliasRecord', {
        zone: this.hostedZone,
        recordName: domainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });
      new route53.ARecord(this, 'WwwAliasRecord', {
        zone: this.hostedZone,
        recordName: wwwDomainName,
        target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
      });
    }

    // ── CloudFormation Outputs ───────────────────────────────────
    new cdk.CfnOutput(this, 'BucketName', {
      value: websiteBucket.bucketName,
      description: 'S3 Bucket Name',
      exportName: 'ZenithTrendsBucketName',
    });
    new cdk.CfnOutput(this, 'DistributionId', {
      value: distribution.distributionId,
      description: 'CloudFront Distribution ID',
      exportName: 'ZenithTrendsDistributionId',
    });
    new cdk.CfnOutput(this, 'DistributionDomainName', {
      value: distribution.distributionDomainName,
      description: 'CloudFront Distribution Domain Name',
    });
    new cdk.CfnOutput(this, 'WebsiteURL', {
      value: certificate ? `https://${domainName}` : `https://${distribution.distributionDomainName}`,
      description: 'Website URL',
    });
    new cdk.CfnOutput(this, 'HostedZoneId', {
      value: this.hostedZone.hostedZoneId,
      description: 'Route53 Hosted Zone ID',
    });
    new cdk.CfnOutput(this, 'NameServers', {
      value: cdk.Fn.join(', ', this.hostedZone.hostedZoneNameServers || []),
      description: 'Route53 Name Servers — update at your domain registrar',
    });
    // Paste this into frontend/.env.local as NEXT_PUBLIC_QUOTE_API_URL
    new cdk.CfnOutput(this, 'QuoteApiUrl', {
      value: `${api.apiEndpoint}/quote`,
      description: 'Quote API endpoint — set as NEXT_PUBLIC_QUOTE_API_URL in frontend/.env.local',
      exportName: 'ZenithTrendsQuoteApiUrl',
    });
  }
}
