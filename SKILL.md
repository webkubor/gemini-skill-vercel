---
name: vercel-expert
description: Advanced Vercel deployment assistant. Automatically handles project linking (vercel link), production deployment (vercel --prod), and git synchronization. Perfect for automating release workflows.
---

# 🚀 Vercel Expert

Your specialized agent for hands-free deployments.

## 🛠 Capabilities

- **Intelligent Linking**: Detects existing Vercel project associations or creates them via `vercel link`.
- **Production-Ready**: Always aims for the `--prod` deployment unless specified otherwise.
- **Git Bridge**: Seamlessly handles `git push` after successful deployment to keep your remotes in sync.

## 📖 Operational Guide

When triggered, the agent will:
1. Verify the project environment.
2. Execute the deployment script: `node scripts/deploy.cjs`.
3. Provide the resulting Vercel Deployment URL.

## ⚠️ Prerequisites

- Vercel CLI (accessible via `npx vercel`).
- Active Vercel session (`npx vercel login`).