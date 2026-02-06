---
name: vercel-expert
description: Advanced Vercel deployment assistant. Automatically handles project linking (vercel link), production deployment (vercel --prod), and git synchronization. Use for standalone, automated deployment workflows in any project.
---

# Vercel Expert Skill

A standalone tool for fully automated Vercel deployments.

## Capabilities

- **Auto-Initialization**: Detects if the project is linked to Vercel and runs `vercel link` if needed.
- **Production Deployment**: Executes a full production build and deploy using `npx vercel --prod`.
- **Git Integration**: Automatically adds, commits, and pushes changes if a Git repository is detected.

## Usage

Simply ask the agent to "deploy to vercel" or "use vercel-expert to publish".

### Commands Used
The skill utilizes a bundled script to handle the logic deterministically:
```bash
node scripts/deploy.cjs
```

## Prerequisites
- Vercel CLI installed or available via `npx`.
- Logged in to Vercel (`npx vercel login`).