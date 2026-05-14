---
outline: deep
---

# Workspace

Workspaces give you a place to group related chats, attach instructions and uploaded files, and keep persistent knowledge that follows the AI from one conversation to the next.

The hierarchy is four levels deep:

```
Workspace
└── Project           e.g. "Acme Inc"
    ├── Folder        e.g. "Brand"   (optional)
    │   └── Chats, image generations, video generations
    └── Chats, image generations, video generations
        (project-level — no folder)
```

Folders are optional. A chat can live directly under a project, or inside a folder for tighter scoping. The same applies to image-gen and video-gen sessions.

## Why use a workspace?

Three concrete wins:

- **Persistent project knowledge.** Every conversation in a project (or folder) feeds a structured knowledge document the AI consults on its next turn. Decisions, facts, preferences, links, and people accumulate over time without you re-stating them.
- **Custom instructions.** Tell the AI once how to behave for this client / topic ("formal tone, never propose discounts under 15%, always cite the brand guidelines PDF"). Project instructions apply to every chat in the project; folder instructions take precedence inside their folder.
- **Knowledge files.** Upload PDFs, Word docs, spreadsheets, images, and code samples. The AI auto-summarises them on upload and can read their full content on demand via the `readWorkspaceFile` tool.

## Opening the workspace

The bottom of the left sidebar has an **Open Workspace** link. It takes you to a grid of all your projects.

From there you can:

- Click any project to enter its overview page (folders, chats, instructions, knowledge).
- Create a new project with the **+ New Project** button.
- Delete a project — chats are *unlinked* from the project, not deleted; they remain in your flat chat list.

## What's persisted

Everything in the workspace lives in your local Starfish database — same place your chats already live (`~/Library/Application Support/Starfish/starfish.db` on macOS). Knowledge files are stored as actual bytes on disk under `workspace-files/<projectId>/`. Nothing leaves your machine except for the AI calls you would make anyway.

When you delete a project, its folders cascade out and the on-disk file bytes are cleaned up. Chats survive — they just lose their workspace assignment.

## What's next

- [Projects](/workspace/projects) — creating, editing, and using a project as a chat scope.
- [Folders](/workspace/folders) — sub-grouping inside a project.
- [Knowledge files](/workspace/knowledge-files) — uploading documents the AI can read.
- [Project & folder memory](/workspace/memory) — how the AI accumulates knowledge from your chats.
