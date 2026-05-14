---
outline: deep
---

# Project & Folder Memory

Each project and each folder owns a **knowledge document** — a structured markdown file that the AI maintains automatically as conversations happen. It's the part that makes a workspace feel persistent: facts, decisions, and preferences accumulate across chats without you having to restate them.

## Two layers of context

When you chat in a project- or folder-scoped session, the AI receives:

- **Custom instructions** — fixed rules you wrote yourself. *"Formal tone, never recommend competitor X, always cite the brand guide."*
- **The knowledge document** — auto-generated and continuously updated from prior conversations.

Folder layer takes precedence over project layer when both are set. A chat outside any folder gets only the project layer.

## What's in the knowledge document

A markdown document with up to seven sections (only the ones with content appear):

```
## Overview
## Decisions
## Facts
## Preferences
## Assets & Links
## People
## Open Questions
```

The rebuilder is told to capture:

- **Concrete facts** — names, dates, version numbers, URLs, exact wording.
- **Decisions** — what was chosen and what was ruled out.
- **Preferences** — tone, audience, what to avoid.
- **Assets and people** — file references, stakeholder roles.
- **Open questions** — flagged but unresolved items.

It's told NOT to capture casual chit-chat, model meta-commentary, or tool noise.

## How the rebuild works

After every successful chat turn, Starfish schedules a rebuild **30 seconds after the chat goes idle** — so quick follow-up messages don't trigger redundant rebuilds.

When the rebuild fires:

1. Starfish loads the existing knowledge document.
2. Sends the document AND the latest chat transcript to Claude Haiku 4.5.
3. The model is instructed to **merge** new information into the document — *never overwrite, never lose prior facts*.
4. The result is saved back to the project (and folder, if applicable).

If the rebuilder fails (network issue, model timeout), the document stays unchanged and the next turn re-triggers it. You never lose data on a failed rebuild — worst case the document is one chat behind.

## Length and capping

The document grows over time, with two soft caps:

| Doc length | What the rebuilder does |
|------------|-------------------------|
| < 20,000 chars | Favours completeness — adds new facts freely. |
| 20,000 – 30,000 chars | Favours brevity — merges related entries instead of adding sections. |
| > 30,000 chars | Compresses aggressively while keeping every distinct fact. |

The rebuilder is *told* to compress, not forced — it's instructed to keep all distinct facts. So the document stabilises around the soft cap rather than growing unbounded.

For active projects: typical knowledge document size is **5,000 – 15,000 characters** (~1,500 – 4,000 tokens). Cheap to inject every turn.

## Token cost

A chat in a folder receives:

- Custom instructions: ~100 – 500 tokens
- Project knowledge: ~1,500 – 4,000 tokens
- Folder knowledge: ~500 – 2,000 tokens
- Knowledge file manifest: ~100 – 500 tokens

Total: **~2,500 – 7,000 tokens per turn**, regardless of model. Negligible at modern model context windows.

## Editing the document

The knowledge document is just markdown. Click **Edit** on the *Project knowledge* (or *Folder knowledge*) section, change anything, and click **Save**.

Your edits are **respected** by the next rebuild — the rebuilder is told to merge new info into whatever document it's given, so anything you write becomes the new baseline. This is the safety net for cases where the AI got something wrong.

Common reasons to hand-edit:

- **Add a fact the AI missed** — *"Decided 2026-04-26 to skip Q4 performance campaigns."*
- **Fix a hallucination** — replace a wrong colour code, name, or date.
- **Remove obsolete content** — the AI tries to preserve facts; sometimes you want them gone.
- **Restructure** — move things between sections, rewrite for your team's preferences.

## Loading indicator

When a chat starts and a knowledge block is being injected into its system prompt, a small **"Pulling Acme Inc knowledge…"** indicator appears in the chat header before the first token. It clears as soon as the AI starts responding. This makes context-loading visible — you know *why* there's a brief pause on turn 1.

## What the AI sees verbatim

For a chat in a folder named "Brand" inside the project "Acme Inc":

```
WORKSPACE CONTEXT
This conversation belongs to the project "Acme Inc", inside the "Brand" folder.

Project description: <description>
Project instructions (always follow these): <project custom_instructions>
Folder instructions (these take precedence over project instructions): <folder custom_instructions>

Project knowledge — facts, decisions, and history accumulated from prior conversations in this project:
<project memory_doc>

Folder knowledge — focused knowledge for the "Brand" folder. More specific than the project knowledge above:
<folder memory_doc>

AVAILABLE WORKSPACE FILES — these are uploaded knowledge files. When the user asks
about something covered by one of these files, use the readWorkspaceFile tool with
the file's id to get its content.

- [wf_AbCdEf123456] brand-guidelines.pdf (5.0 MB, project) — Acme Inc brand guidelines: logo usage…
- [wf_GhIjKl789012] q3-launch-brief.pdf (3.0 MB, folder) — Q3 2026 product launch brief — timeline, channels, success metrics.
…

When answering, use this workspace context naturally. Don't restate or summarise it
back to the user — just use what you know.
```

The block is built fresh every turn, so the moment the rebuilder updates the document, the next chat sees the new version.

## Why this is rich (not lossy)

The rebuilder is explicitly told **never to drop a fact**. When new conversation contradicts a prior entry, the rebuilder updates that entry and adds an `(updated YYYY-MM-DD)` annotation rather than deleting.

For verbatim fidelity beyond the gist, the AI also has the `readWorkspaceFile` tool — knowledge files preserve every word of the original document. The knowledge document holds the synthesis; the files hold the source of truth.

## Tips

- **Don't waste a chat repeating context.** Ask whatever you need, the AI already knows the project's history.
- **Start a new chat for a new sub-topic.** Memory still applies, but the new chat doesn't drag in the previous chat's trailing turns.
- **Edit the doc when the AI misses something important.** Two minutes of editing now saves dozens of restated facts later.
- **Use folder memory for tight scopes.** A "Brand" folder's memory will be focused on brand decisions; "Performance Marketing" will be focused on its own. Don't mush them together.
