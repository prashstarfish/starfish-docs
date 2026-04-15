---
outline: deep
---

# Setup Wizard

The setup wizard runs the first time you launch Starfish. It walks you through six steps: account creation, plan selection, API key entry, knowledge pack import, integration setup, and launch.

You can navigate back to any previous step using the progress bar at the top.

## Step 1 — Account

Create your Starfish account or sign in to an existing one.

**Email sign-up:** Enter your email and a password. If you're creating a new account, check your inbox for a confirmation email before signing in.

**Google sign-in:** Click the Google button. A browser popup opens for OAuth authentication. After you authorize, the wizard advances automatically.

If you already have an active session, this step is skipped.

![Setup wizard account step](/images/setup-wizard-auth.png)

## Step 2 — Plan Selection

Choose the plan that fits your usage.

| | Starter | Pro | Team |
| --- | --- | --- | --- |
| Sessions | 50 / month | Unlimited | Unlimited |
| Tokens | 100K / month | Unlimited | Unlimited |
| Image generations | 10 / month | Unlimited | Unlimited |
| Integrations | 3 | Unlimited | Unlimited |
| Agents | 1 | Unlimited | Unlimited |
| Priority support | — | Yes | Yes |
| Team sharing | — | — | Yes |
| Admin dashboard | — | — | Yes |
| SSO | — | — | Yes |

You can also select **Test mode** to explore the app without committing to a plan. Your plan is saved to your account and can be changed later.

![Setup wizard plan selection](/images/setup-wizard-tier.png)

::: tip Note
The plans shown above are placeholders. Final pricing and tier details will be announced when the app launches.
:::

## Step 3 — API Key

Starfish connects to language models (Claude, GPT-4, Gemini, and others) through [Vercel AI Gateway](https://vercel.com/docs/ai-gateway). The gateway provides unified routing across all supported models — you only need one API key.

**To get your key:**

1. Create an account at [vercel.com](https://vercel.com/).
2. Navigate to your project's AI Gateway settings.
3. Generate an API key.
4. Copy the key and paste it into the input field.

The key is stored locally on your machine and is never sent to Starfish servers.

![Setup wizard API key step](/images/setup-wizard-api-key.png)

## Step 4 — Knowledge Pack

A Knowledge Pack is a `.zip` file containing pre-configured agents, system prompts, and contextual documents. Teams can distribute these to ensure every member starts with the same setup.

**To import:**

1. Click the upload area or drag your `.zip` file onto it.
2. The wizard processes the archive and displays progress in a live terminal output.
3. Wait for the process to complete before continuing.

This step is optional. If you don't have a Knowledge Pack, click **Skip** to continue. You can import one later from **Settings**.

![Setup wizard knowledge pack step](/images/setup-wizard-vault.png)

## Step 5 — Integrations

Connect the external services your assistant will use. Each integration uses the MCP (Model Context Protocol) to communicate with its respective API.

Available integrations include:

- **Google Workspace** — Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks
- **Google Marketing Suite** — GA4, Search Console, Tag Manager
- **ClickUp** — Tasks, projects, docs, team workflows
- **GitHub** — Repositories, pull requests, issues, code reviews
- **Figma** — Design inspection, component reading, code generation
- **Vercel** — Deployments, builds, runtime logs
- **Canva** — Designs, presentations, marketing materials
- **Zapier** — Workflow automation across thousands of apps
- **Apify** — Web scraping and data extraction
- **GoHighLevel** — CRM, pipelines, campaigns
- **Facebook Ads** — Campaigns, audiences, performance analytics

You don't need to connect everything now. Integrations can be added or removed at any time from **Settings > Integrations**.

![Setup wizard integrations step](/images/setup-wizard-integrations.png)

## Step 6 — Ready

Setup is complete. Click **Launch** to enter the main workspace.

**What to do next:**

- Start a conversation — try asking about your calendar or unread emails.
- Explore the [Quick Start](/getting-started/quick-start) guide for example prompts.
- Open **Settings** to fine-tune your integrations and agent configuration.

