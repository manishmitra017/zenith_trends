#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { WebsiteStack } from '../lib/website-stack';
import { CertificateStack } from '../lib/certificate-stack';

const app = new cdk.App();

const account = process.env.CDK_DEFAULT_ACCOUNT || process.env.AWS_ACCOUNT_ID || '';
if (!account) {
  throw new Error('AWS account ID required. Set CDK_DEFAULT_ACCOUNT or AWS_ACCOUNT_ID environment variable.');
}
const domainName = 'zenithtrends.com.au';

// Certificate in us-east-1 (required for CloudFront)
const certStack = new CertificateStack(app, 'ZenithTrendsCertificateStack', {
  env: { account, region: 'us-east-1' },
  domainName,
  crossRegionReferences: true,
  description: 'Zenith Trends - ACM Certificate in us-east-1 for CloudFront',
  tags: {
    Project: 'ZenithTrends',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

// Main website stack in ap-southeast-2
// Certificate ARN is automatically passed via cross-region reference
const websiteStack = new WebsiteStack(app, 'ZenithTrendsWebsiteStack', {
  env: { account, region: 'ap-southeast-2' },
  crossRegionReferences: true,
  certificateArn: certStack.certificate.certificateArn,
  description: 'Zenith Trends - S3 + CloudFront Static Website with Custom Domain',
  tags: {
    Project: 'ZenithTrends',
    Owner: 'Manish Mitra',
    Environment: 'Production',
  },
});

websiteStack.addDependency(certStack);

app.synth();
