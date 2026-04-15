---
outline: deep
---

# Agents Overview

Agents are pre-configured AI assistants with specific instructions, model preferences, and tool sets. Instead of explaining your context every time you chat, create an agent that already knows your workflow.

## Why Use Agents

Without agents, every conversation starts from zero. You re-explain your role, your tools, and your preferences. Agents eliminate that overhead.

Each agent carries:

- **System instructions** -- persistent context the AI follows in every message
- **Default model** -- the preferred model for this agent's tasks
- **Enabled tools** -- which integrations the agent can access

## Example Agents

| Agent | Tools | Purpose |
|-------|-------|---------|
| Code Review Agent | GitHub | Reviews PRs, checks code quality |
| Marketing Agent | Facebook Ads, Google Analytics | Creates campaigns, analyzes performance |
| Project Manager | ClickUp | Manages tasks, tracks progress |
| Content Writer | Google Docs, Drive | Drafts documents, organizes files |

## Agent Components

Every agent is defined by:

- **Name** -- display name shown in the UI
- **Icon** -- visual identifier
- **Color** -- accent color for the agent card
- **System instructions** -- the prompt that shapes the agent's behavior
- **Default model** -- which AI model this agent prefers
- **Enabled tools** -- which MCP tools and integrations this agent can use

![Agent panel showing available agents](/images/agent-panel.png)

## How Agents Work

1. Open the Agent Panel.
2. Select an agent by tapping its card.
3. Start chatting -- the agent's instructions and tool set are automatically applied.

The selected agent is shown in the composer so you always know which context is active. You can switch agents mid-conversation or deactivate them to return to default behavior.
