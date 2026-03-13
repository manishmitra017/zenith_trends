#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebsiteStack } from '../lib/website-stack';
import { CertificateStack } from '../lib/certificate-stack';

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT || '174405733301';
const domainName = 'zenithtrends.com.au';

// Certificate ARN - deploy CertificateStack first, then paste the ARN here
const certificateArn = app.node.tryGetContext('certificateArn') || '';

// Main website stack in ap-southeast-2
new WebsiteStack(app, 'ZenithTrendsWebsiteStack', {
  env: {
    account: account,
    region: 'ap-southeast-2',
  },
  crossRegionReferences: true,
  certificateArn: certificateArn || undefined,
  description: 'Zenith Trends - S3 + CloudFront Static Website with Custom Domain',
  tags: {
    Project: 'ZenithTrends',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

// Certificate stack in us-east-1 (required for CloudFront)
// Deploy this first: npx cdk deploy ZenithTrendsCertificateStack
// Then grab the certificate ARN and pass it via context or hardcode above
new CertificateStack(app, 'ZenithTrendsCertificateStack', {
  env: {
    account: account,
    region: 'us-east-1',
  },
  domainName: domainName,
  description: 'Zenith Trends - ACM Certificate in us-east-1 for CloudFront',
  tags: {
    Project: 'ZenithTrends',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

app.synth();
