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

Type your message in the composer and press **Enter** to send. You can also use **Cmd + Enter**. Responses stream in real-time -- you see tokens appear word-by-word as the model generates them.

While the AI is responding, you can click **Stop** in the header to cancel the current generation. The stop button kills the server-side agent and marks any in-flight tool calls as interrupted.

## Message Queue

You don't need to wait for a response to finish before typing again. Type additional messages while the AI is working -- they queue up and fire sequentially after the current response completes.

Queued messages appear in a collapsible panel above the composer. Each queued message has three actions:

- **Edit** -- pulls the message back into the composer for changes.
- **Send Now** -- fires the message immediately as a mid-turn steer (see below) without waiting for the current response to finish.
- **Delete** -- removes the queued message.

The first queued message is synced to the server, so it fires even if you navigate away from the session.

## Steer (Mid-Turn Course Correction)

While the AI is responding, you can send a **steer** message to redirect it without stopping the current response. This is useful when you see the AI heading in the wrong direction and want to course-correct immediately.

Steer is also what happens when you click "Send Now" on a queued message. The message is injected into the running stream as a tool denial, causing the AI to adjust its approach without losing context.

## Auto-Continue

If the AI appears to have stopped mid-task (e.g., it says "let me do that now" but doesn't follow through), Starfish automatically sends a continuation prompt. This happens up to 3 times per turn, and all accumulated text and tool results are merged into a single response to keep the conversation clean.

## Sessions

Each conversation is a **session**. Sessions are listed in the sidebar and persist across app restarts.

### Creating a new session

Click the **New Chat** button at the top of the sidebar, or press **Cmd + N**. The sidebar also has dedicated links for:

- **Image Gen** -- image generation sessions
- **Video Gen** -- video generation sessions

### Pinning sessions

Right-click a session in the sidebar (or click the three-dot menu) and select **Pin**. Pinned sessions stay at the top of the list in a separate "Pinned" section.

### Renaming sessions

Right-click a session and select **Rename**. An inline text field appears -- type the new name and press Enter.

### Deleting sessions

Right-click a session and select **Delete**. The session is removed immediately.

### Background sessions

If you navigate away from a session that is still running, it continues on the server. The sidebar shows a spinning indicator next to any session that is still active. Navigate back to reconnect and see the results.

Sessions with pending permission prompts show an amber left border and "Needs input" label in the sidebar.

### Attaching a chat to a project or folder

The chat input has a **Workspace picker** chip beside the agent selector. Click it to choose a project (and optionally a folder) for the next chat you start. The picker is sticky — once you pick a target, follow-up new-chats default to it until you clear the chip.

For an existing chat, hover its row in the sidebar, click the three-dot menu, and choose **Move to… → \<Project\>** or **\<Project\> → \<Folder\>**.

When a chat is attached to a project, the system prompt picks up the project's instructions, knowledge document, and uploaded knowledge files. See [Workspace](/workspace/overview) for the full feature.

## Prompt History

Press **Arrow Up** in the composer to scroll through your previous messages in the current session. Press **Arrow Down** to go forward. The history stores up to 50 messages per session.

## Voice Input

Click the **microphone button** in the composer toolbar to start recording. The button pulses red while recording. Click again to stop -- your audio is transcribed and the text is appended to the composer.

Voice input uses your system microphone. On first use, macOS may prompt you to grant microphone access.

## Attachments

Attach files to your message using the toolbar buttons or by dragging files onto the composer:

- **Images** -- browse, paste from clipboard, or drag and drop. Supported formats include PNG, JPEG, GIF, and WebP.
- **Text files** -- click the attachment button to browse. Supports 40+ file extensions (.ts, .py, .json, .md, etc.).
- **PDFs** -- uploaded and processed for the AI to read. A cloud badge indicates the PDF has been uploaded for persistence.

Attachments appear as inline previews below the composer with a remove button on each.

## @Mentions

Type **@** in the composer to open the mention picker. It lists:

- **Active MCP tools** -- reference specific integrations to direct the AI to use them. Selecting a tool activates it if it isn't already active.
- **Uploaded files** -- reference previously uploaded files in your message.

Select an item to insert it as a mention at the cursor position.

## Quick Action Pills

Below the composer, quick action pills provide one-click access to common workflows:

- **Plan New Idea** -- enters [Plan Mode](/chat/plan-mode) for structured planning before execution.
- **Prompt Builder** -- opens the inline [Prompt Builder](/chat/prompt-builder) panel above the composer.
- **Open Editor Window** -- toggles the right-side panel (browser, terminal, artifacts, plan).

## Toolbar Dropdowns

The composer toolbar has three dropdowns that control what the agent can do this turn:

- **Agents** — pick one or more sub-agents to delegate to via the Task tool. See [Agents](/agents/overview).
- **Apps** — pick which connected integrations (Google Workspace, ClickUp, etc.) the agent can use.
- **Media** — toggle in-chat **Image generation** and **Video generation**. Off by default — generation has a real per-image/per-clip cost so we don't enable it without your say-so. See [Image Generation](/media/image-generation) and [Video Generation](/media/video-generation) for the chat-tool flow.

## Message Rendering

### AI Responses

AI responses render full markdown with syntax-highlighted code blocks, tables, lists, and inline formatting. Every link in a response is clickable -- a dialog lets you choose to open it in your default browser or in the built-in browser panel.

### Thinking Blocks

When a reasoning model is active (Claude Opus, GPT-5.4 Pro, etc.), thinking blocks appear as expandable sections. They show the model's step-by-step reasoning process. Click to expand or collapse.

### Tool Call Cards

When the AI invokes a tool, a collapsible card shows:

- Tool name and plain-English description
- Input summary
- Result (once complete)
- Spinner while pending, green check when done, red indicator on error
- **Undo** button for file-write tools -- prefills the chat input with an undo instruction

### System Messages

Status messages appear as small pills in the conversation:

- **Error** -- something went wrong during the response
- **Interrupted** -- the response was stopped by the user
- **Context Compacted** -- older messages were summarized to save token space (amber banner)
