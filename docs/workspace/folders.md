---
outline: deep
---

# Folders

Folders are an optional sub-grouping inside a project. Use them to scope chats to a specific topic, asset type, or workstream — *"Brand"*, *"Social media"*, *"Client guidelines"*, *"Q3 launch"*.

A folder belongs to exactly one project. A chat (or image/video generation) belongs to at most one folder. Folders own their own custom instructions, knowledge document, and knowledge files — separate from the parent project's.

## When to use a folder

You don't need folders for small projects. Default to chats at project level. Add a folder when:

- The project has clearly distinct topics (Brand vs. Performance vs. PR).
- Your chats start picking up the wrong context — folder memory is more focused than project memory.
- You want to upload guidelines that only apply to one slice of the work.

If a project has folders but a chat doesn't fit any of them, leave the chat at project root.

## Creating a folder

From a project page, click **+ New folder**. Type a name and press Enter. The folder appears in the project's left column.

You can also create folders directly inside the chat input's **Workspace picker** by selecting a project and then choosing the new-folder option.

## The folder page

Same shape as the project page — header at the top, two-column body below.

### Header

- **Back to project** breadcrumb at the top-left.
- **Folder name**.
- **+ New chat** — starts a chat scoped to this folder.
- **Delete folder** (trash icon).

### Left column — chats and media

- **Chats (N)** — chats inside this folder.
- **Image / video generations** — gen sessions you assigned to this folder.

### Right column — knowledge

- **Folder instructions** — text the AI sees on every chat in this folder. **Take precedence over project instructions** when both are set.
- **Knowledge files** — files uploaded specifically to this folder. Project-level files are still visible to chats in this folder; folder-level files are not visible from outside.
- **Folder knowledge** — markdown document the AI maintains for this folder, separate from project knowledge.

## How folder vs project context combines

When you chat inside a folder:

- The system prompt includes **both** the project context **and** the folder context.
- Folder instructions override project instructions on conflict.
- The AI sees both the project's knowledge document and the folder's knowledge document — folder is treated as the "more specific" layer.
- The available file manifest combines project-level files + this folder's files. Files in *other* folders are not visible.

When you chat at project root (no folder), only the project context applies.

## Moving a chat into a folder

Hover any chat row in the sidebar, click the three-dot menu, then **Move to… → Project → Folder**.

You can also move chats *between* folders by re-running this action with a different folder. Or move them out of a folder back to project root by selecting the bare project name.

## Deleting a folder

Click the trash icon in the folder header. Chats inside the folder are not deleted — they "fall up" to project root (their `folder_id` is cleared, but they keep their `project_id`). Knowledge files attached to the folder lose their folder link the same way.

If you want to delete the chats too, do so from the sidebar before deleting the folder.

## Tips

- **Keep folder names short and durable.** *"Brand"* is better than *"Brand Guidelines Final v3 (April 2026)"*.
- **Use folders for workstreams, not file types.** *"Strategy"* / *"Execution"* works; *"Images"* / *"PDFs"* doesn't — files are filtered automatically.
- **Don't over-folder.** Folder memory is per-folder, so chats in unrelated folders won't share context. That's the point — but it also means too many folders fragment knowledge.
