# jackfiengo.com

Personal website built with React 19 and Vite 7, deployed to AWS using Terraform.

## Project Structure

```
├── website/              # React application
│   ├── src/             # Source code
│   ├── public/          # Static assets
│   └── dist/            # Build output (generated)
├── terraform/           # Infrastructure as Code
│   ├── backend/         # Terraform backend configuration
│   └── environment/     # Environment-specific variables
├── scripts/             # Deployment scripts
└── .github/workflows/   # CI/CD pipelines
```

## Local Development

### Website

```bash
cd website
npm install
npm run dev
```

The development server will start at `http://localhost:5173`

### Build

```bash
cd website
npm run build
```

### Deploy

From the repository root:

```bash
./scripts/deploy.sh
```

This will:
1. Build the React app
2. Sync files to S3
3. Invalidate CloudFront cache

## Infrastructure

The website is hosted on AWS with the following resources:
- **S3**: Static file hosting
- **CloudFront**: CDN and HTTPS
- **Route53**: DNS management
- **ACM**: SSL/TLS certificates

### Terraform

```bash
cd terraform
terraform init -backend-config=backend/backend.tfvars
terraform plan -var-file=environment/terraform.tfvars
terraform apply -var-file=environment/terraform.tfvars
```

## CI/CD

GitHub Actions workflows automatically deploy changes to the main branch:

- **Terraform workflow** (`.github/workflows/terraform.yml`): Triggered when files in `terraform/` change
  - Runs `terraform plan` on all branches
  - Runs `terraform apply` on main branch after successful plan

- **Website deployment workflow** (`.github/workflows/deploy-website.yml`): Triggered when files in `website/` change
  - Builds the React app
  - Syncs files to S3
  - Invalidates CloudFront cache

### Required GitHub Secrets

Configure these in your repository settings:
- `AWS_ACCESS_KEY_ID`: AWS access key for deployment
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for deployment

## Tech Stack

- **React 19.1.1**: UI framework (function components and hooks)
- **Vite 7.1.7**: Build tool and dev server
- **React Router 7.9.4**: Client-side routing
- **Terraform**: Infrastructure as Code
- **AWS**: Cloud hosting (S3, CloudFront, Route53, ACM)
