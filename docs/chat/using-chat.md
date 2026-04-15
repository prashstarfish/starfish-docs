---
outline: deep
---

# Using Chat

Starfish's chat interface is where you interact with AI models, run tools, and get work done. This page covers the core mechanics.

## Interface Layout

The chat screen has three areas:

- **Sidebar** (left) -- your session list, navigation, and settings link.
- **Message area** (center) -- conversation history, streaming responses, and tool call results.
- **Composer** (bottom) -- where you type messages and control model settings.

![Chat interface layout](/images/chat-interface.png)

## Sending Messages

Type your message in the composer and press **Enter** to send. Responses stream in real-time -- you see tokens appear as the model generates them.

While the AI is responding, you can click **Stop** to cancel the current generation.

## Message Queue

You don't need to wait for a response to finish before typing again. Type additional messages while the AI is working -- they queue up and fire sequentially after the current response completes. The queue persists even if you navigate away from the chat.

Queued messages appear above the composer. You can edit or delete them before they send.

## Sessions

Each conversation is a **session**. Sessions are listed in the sidebar and persist across app restarts.

### Creating a new session

Click the **+** button in the sidebar. Choose from:

- **Chat** -- standard AI conversation
- **Image Gen** -- image generation
- **Video Gen** -- video generation

### Pinning sessions

Hover over a session in the sidebar and click the **pin icon** to keep it at the top of your list.

### Renaming sessions

Hover over a session and click the **pencil icon** to rename it.

## @Mentions

Type **@** in the composer to open the mention picker. It has two tabs:

- **Files** -- reference uploaded files in your message. You can also upload new files directly from the picker.
- **Tools** -- reference specific integrations or MCP tools to direct the AI to use them.

Select an item to insert it as a mention in your message.
