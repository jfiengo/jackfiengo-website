bucket         = "jackfiengo-terraform-state"
key            = "website/terraform.tfstate"
region         = "us-east-1"
encrypt        = true
dynamodb_table = "terraform-state-lock"