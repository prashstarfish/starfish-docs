---
outline: deep
---

# Knowledge Packs

Knowledge Packs are ZIP files containing pre-configured agents with custom instructions, tool sets, and metadata. They let you share agent configurations across your team or import curated agent bundles.

## What's Inside a Knowledge Pack

A Knowledge Pack is a `.zip` file containing one or more Markdown files. Each file defines a single agent using YAML frontmatter.

## How to Import

There are two ways to import a Knowledge Pack:

### During Setup

The setup wizard includes a **Vault** step (step 4) where you can upload a Knowledge Pack `.zip` file. All agents in the pack are created automatically.

### From the Agent Panel

Click the **upload icon** in the Agent Panel header to import a pack at any time. Only `.zip` files are accepted.


After import, a notification confirms how many agents were added. All imported agents are immediately available in the Agent Panel.

## Where to Get Knowledge Packs

- **Your team** -- shared packs with agents tailored to your workflows.
- **Create your own** -- build custom packs for your use cases (see below).

## Creating Your Own

### 1. Create Markdown files

Each `.md` file defines one agent. Use YAML frontmatter for metadata and the body for system instructions.

```markdown
---
name: Marketing Strategist
description: Creates campaign strategies and analyzes market data
icon: target
color: "#f97316"
tools:
  - google-analytics
  - facebook-ads
---

You are a senior marketing strategist. When the user asks for campaign
help, always start by understanding their target audience, budget, and
timeline. Use data from Google Analytics to inform recommendations.

Focus on actionable, measurable strategies. Include KPIs for every
recommendation.
```

### Frontmatter Fields

| Field | Required | Description |
|-------|----------|-------------|
| `name` | Yes | Display name in the Agent Panel |
| `description` | Yes | Short summary shown on the agent card |
| `icon` | No | Icon identifier (Lucide icon name) |
| `color` | No | Hex color for the agent card accent |
| `tools` | No | List of MCP tool names the agent can use |

### 2. Zip the files

Put all `.md` files in a folder and compress it to a `.zip`:

```bash
zip -r my-agents.zip agents/
```

### 3. Import

Upload the `.zip` through the setup wizard or the Agent Panel upload button.
