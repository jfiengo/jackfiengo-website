# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal website built with React 19 and Vite 7, deployed to AWS using Terraform. The repository is organized with the React application in the `website/` directory and infrastructure code in the `terraform/` directory.

## Development Commands

From the `website/` directory:
- `npm run dev` - Start Vite development server with HMR
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint on the codebase

## Project Structure

Repository structure:
- `website/` - React application
  - `index.html` - Entry HTML file (Vite serves this directly)
  - `src/main.jsx` - React application entry point, renders App component into `#root` div
  - `src/App.jsx` - Main application component
  - `src/index.css` - Global styles
  - `src/App.css` - Component-specific styles
  - `public/` - Static assets served at root
  - `vite.config.js` - Vite configuration with React plugin
- `terraform/` - AWS infrastructure as code (S3, CloudFront, Route53, ACM)
- `scripts/` - Deployment and utility scripts
- `.github/workflows/` - CI/CD pipelines

## Tech Stack

- **React 19.1.1** - UI framework (using function components and hooks)
- **Vite 7.1.7** - Build tool and dev server
- **@vitejs/plugin-react** - Uses Babel for Fast Refresh (not SWC)
- **ESLint** - Linting with react-hooks and react-refresh plugins

## Important Notes

- React Compiler is NOT enabled (for performance reasons during dev/build)
- Project uses ES modules (`"type": "module"` in package.json)
- Entry point is `website/src/main.jsx` which mounts the app using React 19's `createRoot`

## Deployment

- **Local deployment**: Run `./scripts/deploy.sh` from the repository root
- **CI/CD**: GitHub Actions workflows automatically deploy changes to main branch
  - `terraform/` changes trigger Terraform plan and apply
  - `website/` changes trigger React build and S3 deployment
