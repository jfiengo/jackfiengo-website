# Terraform AWS Infrastructure for jackfiengo.com

This Terraform configuration deploys a production-ready React website hosted on AWS using S3, CloudFront, and Route53.

## Architecture

- **S3 Bucket**: Stores the static website files (React build output)
- **CloudFront**: CDN for global content delivery with HTTPS
- **Route53**: DNS management for jackfiengo.com
- **ACM Certificate**: SSL/TLS certificate for HTTPS (auto-validated via DNS)
- **Remote State**: Terraform state stored in S3 with DynamoDB locking

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **AWS CLI** configured with credentials (`aws configure`)
3. **Terraform** installed (v1.0+)
4. **Route53 Hosted Zone** - Your existing hosted zone for jackfiengo.com (already configured)

## Remote State Configuration

This project uses remote state storage for better reliability and collaboration:

- **S3 Bucket**: `jackfiengo-terraform-state` (stores state files)
- **DynamoDB Table**: `terraform-state-lock` (prevents concurrent modifications)
- **Encryption**: State files are encrypted at rest
- **Versioning**: S3 versioning enabled for state history

### Benefits
- ✅ State backed up in S3 (disaster recovery)
- ✅ State locking prevents concurrent modifications
- ✅ Work from multiple devices seamlessly
- ✅ State history and rollback capability

## Initial Setup

### 1. Initialize Terraform

```bash
cd terraform
terraform init
```

If you're migrating from local state, Terraform will prompt you to copy your existing state to S3.

### 2. Review the Configuration

Check the variables in `variables.tf`. You can override defaults by creating a `terraform.tfvars` file:

```hcl
# terraform.tfvars (optional)
domain_name = "jackfiengo.com"
aws_region  = "us-east-1"
environment = "production"
```

### 3. Plan the Infrastructure

```bash
terraform plan
```

Review the resources that will be created (S3 bucket, CloudFront distribution, ACM certificate, Route53 DNS records, etc.).

### 4. Apply the Configuration

```bash
terraform apply
```

Type `yes` when prompted. This will:
- Create the S3 bucket
- Use your existing Route53 hosted zone
- Request an ACM certificate
- Create DNS validation records (certificate will auto-validate)
- Create the CloudFront distribution
- Set up DNS records pointing to CloudFront

**Note**: The initial apply may take 15-30 minutes due to:
- ACM certificate validation (5-10 minutes)
- CloudFront distribution deployment (10-20 minutes)

**Important**: Since you're using an existing Route53 hosted zone, no nameserver changes are needed at your domain registrar.

## Deploying Your Website

### Automated Deployment (Recommended)

Use the deployment script in the project root:

```bash
cd ..  # Return to project root
./deploy.sh
```

The `deploy.sh` script automatically:
1. Builds your React app (`npm run build`)
2. Gets the S3 bucket name from Terraform outputs
3. Syncs files to S3 (`aws s3 sync`)
4. Gets the CloudFront distribution ID
5. Invalidates the CloudFront cache

### Manual Deployment

If you prefer manual deployment:

#### Build the React App

From the project root:

```bash
npm run build
```

This creates optimized production files in the `dist/` directory.

#### Upload to S3

Using AWS CLI:

```bash
# Get the bucket name
BUCKET_NAME=$(cd terraform && terraform output -raw s3_bucket_name)

# Sync the build to S3
aws s3 sync dist/ s3://$BUCKET_NAME/ --delete

# Get CloudFront distribution ID
DISTRIBUTION_ID=$(cd terraform && terraform output -raw cloudfront_distribution_id)

# Invalidate CloudFront cache to see changes immediately
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"
```

## Useful Commands

### View Outputs

```bash
cd terraform
terraform output
```

### View State

```bash
terraform show
```

### View Remote State Info

```bash
terraform state list
```

### Pull Remote State Locally (for inspection)

```bash
terraform state pull > state.json
```

### Destroy Infrastructure

**WARNING**: This will delete all resources including the S3 bucket and its contents.

```bash
terraform destroy
```

**Note**: This does NOT delete the remote state bucket (`jackfiengo-terraform-state`) or DynamoDB table.

## Remote State Management

### Working from Multiple Machines

Simply run `terraform init` on any machine with AWS credentials configured. Terraform will automatically download the latest state from S3.

### State Locking

DynamoDB automatically locks the state during operations. If you see a lock error:

```bash
# Force unlock (use with caution, only if you're sure no other operation is running)
terraform force-unlock LOCK_ID
```

### State History

S3 versioning is enabled on the state bucket. To view or restore previous versions:

```bash
# List state file versions
aws s3api list-object-versions \
  --bucket jackfiengo-terraform-state \
  --prefix website/terraform.tfstate

# Download a specific version
aws s3api get-object \
  --bucket jackfiengo-terraform-state \
  --key website/terraform.tfstate \
  --version-id VERSION_ID \
  state-backup.tfstate
```

## Important Notes

### Route53 Hosted Zone

This configuration uses a **data source** to reference your existing Route53 hosted zone for jackfiengo.com. Terraform will automatically find and use your existing hosted zone without creating a new one or modifying it.

### Cost Optimization

Current configuration uses:
- **PriceClass_100**: CloudFront edge locations in North America and Europe only (cheapest)
- Change `cloudfront_price_class` to `PriceClass_200` or `PriceClass_All` for global coverage

### Security Features

- S3 bucket is private (no public access)
- CloudFront uses Origin Access Control (OAC) for S3 access
- HTTPS enforced (HTTP redirects to HTTPS)
- TLS 1.2+ only
- S3 versioning enabled for rollback capability
- Server-side encryption enabled
- Terraform state encrypted in S3

### SPA Routing

The CloudFront configuration includes custom error responses that route 404/403 errors to `index.html`. This enables client-side routing to work properly with React Router.

## Troubleshooting

### Certificate Not Validating

- Check that nameservers are correctly set at your registrar
- DNS propagation can take up to 48 hours
- Verify validation records exist: `dig _acm-validation.jackfiengo.com`

### CloudFront Not Showing Latest Changes

- CloudFront caches content (default 1 hour)
- Use the deployment script which automatically invalidates the cache
- Manual invalidation: `aws cloudfront create-invalidation --distribution-id DIST_ID --paths "/*"`
- Note: First 1000 invalidations per month are free

### Website Shows 403 Error

- Ensure `index.html` exists in the S3 bucket root
- Check S3 bucket policy allows CloudFront OAC access
- Verify CloudFront distribution is deployed (Status: Enabled)

### State Lock Errors

- Another operation may be in progress
- Check DynamoDB table for lock entries
- Only force-unlock if you're certain no other operation is running

### Cannot Initialize Terraform

- Verify AWS credentials are configured: `aws sts get-caller-identity`
- Check S3 bucket exists: `aws s3 ls s3://jackfiengo-terraform-state`
- Check DynamoDB table exists: `aws dynamodb describe-table --table-name terraform-state-lock`

## Additional Resources

- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [AWS Route53 Documentation](https://docs.aws.amazon.com/route53/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Terraform S3 Backend](https://www.terraform.io/docs/language/settings/backends/s3.html)
