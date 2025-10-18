#!/bin/bash
set -e

echo "🏗️  Building React app..."
npm run build

echo "📦 Getting S3 bucket name..."
BUCKET_NAME=$(cd terraform && terraform output -raw s3_bucket_name)

echo "☁️  Uploading to S3 bucket: $BUCKET_NAME..."
aws s3 sync dist/ s3://$BUCKET_NAME/ --delete --cache-control "public, max-age=31536000, immutable" --exclude "index.html"
aws s3 cp dist/index.html s3://$BUCKET_NAME/index.html --cache-control "public, max-age=0, must-revalidate"

echo "🌐 Getting CloudFront distribution ID..."
DISTRIBUTION_ID=$(cd terraform && terraform output -raw cloudfront_distribution_id)

echo "🔄 Invalidating CloudFront cache..."
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --query 'Invalidation.Id' --output text)

echo "✅ Deployment complete!"
echo "📊 Invalidation ID: $INVALIDATION_ID"
echo "🌍 Website URL: https://jackfiengo.com"
echo ""
echo "Note: CloudFront invalidation may take a few minutes to complete."
