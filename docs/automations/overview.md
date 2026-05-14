---
outline: deep
---

# Automations

Automations run a saved agent prompt on a schedule. Same chat agent you'd talk to interactively, except it fires at a time you pick — daily standup digest, hourly campaign check, weekly content sweep — and writes its output into a chat session you can review later.

Open the Automations page from the **Automations** link in the left sidebar bottom nav.

## What an automation is

An automation is a saved configuration with:

- **Name and description** — for you to remember what it does.
- **Schedule** — cron, interval (e.g. "every 30 minutes"), or one-shot at a specific date/time.
- **Prompt** — the instruction text the agent runs every fire.
- **Model** — pick a specific model or leave on Auto.
- **Agents** — sub-agents the automation can delegate to via the Task tool.
- **Tools (integrations)** — which apps the automation can use (Google Workspace, ClickUp, etc.).
- **Media tools** — optional toggle for `generate_image` and `generate_video` chat tools.
- **Workspace scope** — optionally attach the run to a project (and folder) so it inherits project instructions and knowledge.
- **Permission mode** — fixed to **Full Access** for unattended runs (no human to approve each tool call).
- **Catch-up on launch** — when on, missed runs (Mac was asleep, app was closed) fire once on launch.

Each fire creates a real chat session you can open and inspect. Sessions are labeled with the automation's name in the sidebar so they're easy to tell apart from regular chats.

## When to use one

- **Daily summaries** — "List my overdue ClickUp tasks, group by space, send a markdown summary to my email at 8 AM."
- **Campaign monitoring** — "Pull yesterday's Facebook Ads spend and ROAS by campaign, alert if any dropped > 30%."
- **Content pipelines** — "Every Monday, draft a LinkedIn post about last week's product update."
- **Workspace memory rebuild** — kick a folder's knowledge document into a refresh on a schedule.

Anything you'd type into chat and want to fire on a clock.

## Creating an automation

1. Click **New automation** on the Automations page.
2. Fill in name + description.
3. Write the prompt — same prose you'd type in a chat.
4. Pick a schedule:
   - **Simple** — "every 1 hour", "daily at 09:00", "weekly on Monday at 09:00", "once at \[datetime\]".
   - **Advanced cron** — a raw 5-field cron expression. Croner syntax.
5. Pick a model (or leave on Auto).
6. *(Optional)* Pick agents to delegate to.
7. *(Optional)* Pick integrations. Use the minimum needed — every extra tool burns tokens.
8. *(Optional)* Enable Image and/or Video generation under "Media tools".
9. *(Optional)* Attach to a project (and folder) so the run inherits workspace context.
10. Confirm the Full Access permission warning.
11. Save.

The automation starts firing on its schedule. The Automations page lists every saved automation with its next-fire time.

## Run history

Each fire is logged in the `automation_runs` table with status (`running`, `completed`, `failed`, `cancelled`, `missed`), cost, token count, and a link to the underlying chat session. The Automations page shows the last status pill on each automation row.

## Concurrency

Default policy is **skip** — if a run is still in flight when the next fire is scheduled, the new fire is marked `missed` and the in-flight run continues. Prevents runaway cost on long-running automations.

## Catch-up on launch

When your Mac was asleep, or Starfish wasn't running, scheduled fires get skipped. With **Catch-up on launch** enabled, the first launch after a gap runs the automation once if any fires were missed. The catch-up run is marked separately from a normal scheduled run in the log.

## Workspace context

Attaching an automation to a project (and optionally a folder) means each run picks up:

- The project's [custom instructions](/workspace/projects)
- The project's [memory document](/workspace/memory)
- Any [knowledge files](/workspace/knowledge-files) attached to the project / folder

Folder context overrides project context inside its folder, same as interactive chats.

## Notifications

You can configure per-event notifications (success, failure, cost cap hit, catch-up missed) from **Settings → Automation notifications**. Quiet hours queue notifications until the window ends.

## Limits

- Hard cap of **15 automations** per workspace. Delete one before creating a 16th.
- Minimum interval between fires: **10 minutes**.
- Run history is trimmed to the most recent 50 fires per automation.
