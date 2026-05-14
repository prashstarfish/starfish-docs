---
outline: deep
---

# Projects

A project is the primary unit of grouping in your workspace. It owns a set of chats, optional folders, custom instructions, a knowledge document, and any uploaded knowledge files. Think of it as one client, one initiative, or one long-running effort.

## Creating a project

From the workspace overview, click **+ New Project**. Give it a name and an optional description. The project is created immediately and you're taken to its page.

You can also create projects on the fly from the chat input's **Workspace picker** chip — it has a "create new project" affordance.

## The project page

The project page is a two-column layout. The left column is *navigation* (folders + chats + media). The right column is *knowledge* (custom instructions, project knowledge, knowledge files).

### Header

- **Project name** with its colour swatch.
- **+ New chat in project** — starts a fresh chat already attached to this project at root level.
- **Delete project** (trash icon) — removes the project and its folders. Chats keep existing but lose their workspace link. Knowledge files attached to the project (bytes on disk) are cleaned up.

### Left column — folders and chats

- **Folders (N)** — list of folders inside the project, with a **+ New folder** button. Hover over a folder to reveal *new-chat-in-folder* and *delete* shortcuts.
- **Chats in project (N)** — chats that live directly under the project (no folder).
- **Image generations / Video generations** — gen sessions you assigned to this project (via *Move to…* on a sidebar row).

### Right column — knowledge

- **Custom instructions** — free-form text the AI sees on every chat in this project. Edit and save. Empty by default.
- **Knowledge files** — uploaded documents and images. See [Knowledge files](/workspace/knowledge-files).
- **Project knowledge** — a markdown document the AI maintains automatically as conversations happen. See [Project & folder memory](/workspace/memory). You can edit it directly.

## Starting a chat in a project

Three ways:

1. **From the project page** — click **+ New chat in project** in the header. The chat opens with the project pre-selected as its scope. The system prompt picks up the project's instructions, knowledge, and file manifest before the first token streams.
2. **From the chat input** — type as normal, then click the **Workspace picker** chip beside the agent selector and choose a project. The next message you send creates a chat bound to that project.
3. **From a folder page** — click **+ New chat** to make the chat folder-scoped (more focused than project-scoped).

The picker is **sticky** — once you pick a project, follow-up new-chats default to the same project until you change it. It clears when you click the X next to the chip.

## Moving an existing chat into a project

In the left sidebar, hover any chat row and click the three-dot menu. **Move to… → \<Project Name\>** assigns the chat to the project at root level. **Move to… → \<Project\> → \<Folder\>** assigns it to a specific folder. **Move to… → No project** removes the assignment.

The chat keeps all its history; only its workspace membership changes. The next turn in that chat will pick up the project's instructions and knowledge.

## Deleting a project

Click the trash icon in the header and confirm. Three things happen:

- The project row is removed.
- All its folders cascade-delete.
- Knowledge file bytes for the project are cleaned up from disk.
- Chats attached to the project (or its folders) survive, unlinked. They remain in your flat chat list under "Recent."

This is a destructive action. There is no undo.

## What the AI sees

When you send a message in a project-scoped chat, the system prompt includes a **WORKSPACE CONTEXT** block before the first token:

```
WORKSPACE CONTEXT
This conversation belongs to the project "Acme Inc".
Project description: …
Project instructions (always follow these): …
Project knowledge — facts, decisions, and history accumulated…
AVAILABLE WORKSPACE FILES — use the readWorkspaceFile tool…
```

A short *"Pulling Acme Inc knowledge…"* indicator appears in the chat header until the first token arrives, so you know context is being applied.

## Tips

- **One project per client / topic.** Resist the urge to make everything generic. Memory works best when each project has a clear scope.
- **Use the description field.** A two-sentence description ("client name, what we're doing, who's involved") gives the AI orientation cheaply.
- **Edit instructions over time.** Add rules as you encounter them — *"never use Lorem Ipsum,"* *"prefer Notion over Google Docs."* The AI reads them every turn.
