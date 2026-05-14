---
outline: deep
---

# General Settings

Configure Starfish to match your workflow. Access settings from the sidebar or the application menu.


## Default Model

Set the LLM used for new chat sessions. This applies to all new conversations -- existing sessions keep the model they were created with.

You can also override the model per-session from the chat interface.

## Plan Tier

View your current subscription tier and what it includes:

| Tier | Description |
|------|-------------|
| **Free** | Basic access with usage limits |
| **Pro** | Higher limits, priority processing, additional models |
| **Enterprise** | Custom limits, team management, dedicated support |

Your current tier and usage are displayed in the settings panel.

## API Key

Starfish routes LLM requests through Vercel AI Gateway. To update your API key:

1. Go to **Settings**
2. Enter your new API key
3. Save

The key is stored securely on your local machine and is never sent to Starfish servers.

## Integrations

Connect and manage external services. From settings, you can:

- Connect new services (Google Workspace, Facebook, etc.)
- Disconnect or re-authenticate existing connections
- View integration status

See [Integrations](/integrations/overview) for detailed setup guides.

## Knowledge Packs

Manage the AI agents and knowledge packs available in your workspace:

- **Import** new knowledge packs to extend agent capabilities
- **View** installed packs and their included agents
- **Remove** packs you no longer need

Knowledge packs define specialized agents with domain-specific instructions and tools.

## Workspace

Settings that affect [Projects, Folders, and Knowledge Files](/workspace/overview).

### Auto-rename uploaded files

**Default: on.**

When you upload a file to a project's or folder's knowledge files, Starfish runs Claude Haiku 4.5 in the background to produce a description and — when the original filename is meaningless — a better one.

| Toggle | Behaviour |
|--------|-----------|
| **On** (default) | Files with garbage names (digits, UUIDs, `IMG_*`, `Screenshot *`, `WhatsApp Image *`, etc.) are renamed automatically. The original filename is preserved internally; hover the row to see it. |
| **Off** | The analyzer still proposes a rename, but you have to click **Accept** on the suggested-rename banner before it applies. |

Files with sensible names (`logo1.png`, `brand-guide.pdf`) are never auto-renamed regardless of the setting.

See [Knowledge Files](/workspace/knowledge-files) for the full description of how analysis and renaming work.

## Designs

### Auto-open preview

Automatically open the design panel when a new file is generated. When disabled, you can still open the panel manually.
