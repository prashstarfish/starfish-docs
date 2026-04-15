---
outline: deep
---

# Google Workspace

Google Workspace connects Starfish to your Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks, Chat, and Contacts. Ask the AI to read, create, and manage content across all nine Google services from a single integration.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **Google Workspace** and click **Connect**.
3. A setup stream will launch. Sign in with your Google account when prompted.
4. Grant the requested permissions for each Google service.
5. Wait for the stream to complete. The integration status will show **Connected**.

::: tip
If you have multiple Google accounts, the setup flow will ask you to pick one. Choose the account that has access to the calendars, drives, and inboxes you want the AI to work with.
:::

## What You Can Do

### Gmail

- List and search emails by sender, subject, date, or label
- Read full email threads
- Get message details and attachments

### Calendar

- List upcoming events across calendars
- Create, update, and delete events
- Check availability and schedule meetings

### Drive

- List, search, and browse files and folders
- Create new files and folders
- Share files and manage permissions
- Copy, move, and delete files

### Docs

- Create new documents
- Read document content
- Update documents with batch edits

### Sheets

- Read spreadsheet data and metadata
- Append rows to existing sheets
- Update cell ranges

### Slides

- Create new presentations
- Read slide content and layout

### Tasks

- List task lists and individual tasks
- Create, update, and delete tasks
- Mark tasks as complete

### Chat

- List Chat spaces and members
- Read and send messages
- Delete messages

### Contacts

- Search contacts by name, email, or phone
- List all connections

## Example Prompts

- "Show me my unread emails from the last 24 hours"
- "Create a calendar event for tomorrow at 2pm called 'Sprint Review' and invite the team"
- "Find the Q1 budget spreadsheet in Drive and summarize the totals"
- "Add a row to the 'Leads' sheet with name 'Acme Corp' and status 'New'"
- "What meetings do I have this week?"

## Notes

- Google Workspace uses a stream-based setup flow, not a standard OAuth popup. The connection process runs in a terminal-style panel inside Starfish.
- All Google services are enabled through a single connection. You do not need to connect each service separately.
- The AI can only access data in the Google account you authenticated with. To switch accounts, disconnect and reconnect.
