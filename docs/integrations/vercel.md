---
outline: deep
---

# Vercel

Vercel connects your deployment platform to Starfish. Deploy projects, monitor builds, check runtime logs, and manage domains -- all from your AI workspace.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **Vercel** and click **Connect**.
3. A browser window will open to Vercel's authorization page.
4. Sign in to your Vercel account and approve the connection.
5. You'll be redirected back to Starfish. The integration status will show **Connected**.

## What You Can Do

- **Deployments** -- Trigger new deployments, list recent deploys, and check deployment status
- **Build Logs** -- Read build output and diagnose build failures
- **Domains** -- List, add, and configure custom domains
- **Projects** -- Browse and manage your Vercel projects
- **Environment Variables** -- View and manage env vars across environments
- **Runtime Logs** -- Check serverless function logs and errors

## Example Prompts

- "Deploy the main branch of the marketing-site project"
- "Show me the build logs for the latest failed deployment"
- "What domains are configured for the dashboard project?"
- "List all deployments from the last 7 days"
- "Check the runtime logs for any 500 errors in production"

## Notes

- Vercel uses OAuth PKCE for authentication. The connection is handled through a secure browser popup.
- Deployments triggered from Starfish use the same build pipeline as your normal Vercel workflow.
- The AI has access to all projects and teams your Vercel account belongs to.
