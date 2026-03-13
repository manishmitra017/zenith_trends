# Zenith Trends

B2B promotional products catalog website for [Zenith Trends](https://zenithtrends.com.au) — an Australian supplier of branded corporate merchandise.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS 4
- **Animations**: Framer Motion
- **Infrastructure**: AWS CDK (S3 + CloudFront + Route53 + ACM)
- **CI/CD**: GitHub Actions

## Project Structure

```
zenith_trends/
├── frontend/          # Next.js application
│   ├── src/
│   │   ├── app/       # App Router pages
│   │   ├── components/# Reusable components
│   │   └── data/      # Product catalog & site content
│   └── public/        # Static assets (images, logo)
├── cdk/               # AWS CDK infrastructure
│   ├── bin/app.ts     # CDK entry point
│   └── lib/           # Stack definitions
├── .github/workflows/ # CI/CD pipeline
└── run_all.sh         # Local dev runner
```

## Local Development

```bash
# Run the dev server (installs deps if needed, clears port 3000)
./run_all.sh

# Or manually
cd frontend
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

### Prerequisites

1. AWS account with CDK bootstrapped in `ap-southeast-2` and `us-east-1`
2. Domain `zenithtrends.com.au` registered

### GitHub Secrets Required

Add these to your repo's Settings > Secrets and variables > Actions:

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | IAM user access key with CDK deploy permissions |
| `AWS_SECRET_ACCESS_KEY` | IAM user secret key |

### First-Time Setup

1. **Bootstrap CDK** (both regions):
   ```bash
   cd cdk && npm install
   npx cdk bootstrap aws://ACCOUNT_ID/ap-southeast-2
   npx cdk bootstrap aws://ACCOUNT_ID/us-east-1
   ```

2. **Deploy certificate** (us-east-1):
   ```bash
   npx cdk deploy ZenithTrendsCertificateStack
   ```
   Complete DNS validation at your registrar, then copy the certificate ARN.

3. **Update certificate ARN** in `cdk/bin/app.ts`:
   ```ts
   const certificateArn = 'arn:aws:acm:us-east-1:ACCOUNT:certificate/CERT-ID';
   ```

4. **Deploy website stack**:
   ```bash
   npx cdk deploy ZenithTrendsWebsiteStack
   ```

5. **Update nameservers** at your domain registrar with the Route53 nameservers from the stack output.

### Ongoing Deploys

Push to `main` triggers GitHub Actions which builds the site and syncs to S3 + invalidates CloudFront.

## Architecture

```
Route53 (zenithtrends.com.au)
  └── CloudFront (HTTPS, caching, compression)
        └── S3 (private bucket, OAC access)
              └── Next.js static export (out/)
```

- S3 bucket is fully private (`BLOCK_ALL`) — only accessible via CloudFront OAC
- CloudFront handles HTTPS redirect, caching, and URL rewrites for Next.js routes
- ACM certificate in `us-east-1` for CloudFront custom domain
- GitHub Actions deploys via `aws s3 sync` + CloudFront invalidation (no CDK custom resources)
