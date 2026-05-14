---
outline: deep
---

# Google Workspace

Google Workspace connects Starfish to your Gmail, Calendar, Drive, Docs, Sheets, Slides, Tasks, Chat, and Contacts. Ask the AI to read, create, and manage content across all nine Google services from a single integration.

::: warning Do this setup once per user
Google Workspace requires a **one-time setup** in your own Google Cloud account. It takes about 15 minutes. Once done, your connection stays active for life — you will never have to redo it.
:::

## Before You Start

You need a Google account (personal or Workspace). No paid plan or billing is required.

## Step 1 — Create a Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com/).
2. Sign in with the Google account you want to connect.
3. At the top-left, click the project dropdown, then **New Project**.
4. Name it anything (for example, `Starfish Workspace`).
5. Click **Create** and wait a few seconds for the project to provision.
6. Make sure the new project is selected in the top bar before moving on.

## Step 2 — Enable the APIs You Need

1. In the left sidebar, go to **APIs & Services → Library**.
2. Search for and enable each of the following, one at a time:
   - **Gmail API**
   - **Google Drive API**
   - **Google Calendar API**
   - **Google Docs API**
   - **Google Sheets API**
   - **Google Slides API**
   - **Google Tasks API**
   - **Google Chat API**
   - **People API**
3. For each one, click the API, then click **Enable**.

::: tip
You only need to enable the APIs for the services you actually want to use. If you don't care about Slides, skip it. You can always come back and enable more later.
:::

## Step 3 — Configure the OAuth Consent Screen

1. In the left sidebar, go to **APIs & Services → OAuth consent screen**.
2. Choose **External** and click **Create**.
3. Fill in the required fields:
   - **App name**: `Starfish` (or anything you want)
   - **User support email**: your email
   - **Developer contact email**: your email
4. Click **Save and Continue** through the Scopes and Test Users screens. You do not need to add scopes or test users here.
5. On the Summary screen, click **Back to Dashboard**.

### Publish to Production

This is the most important step. Skip it and your connection will break every 7 days.

1. On the OAuth consent screen dashboard, find **Publishing status**.
2. Click **Publish App**.
3. Confirm by clicking **Confirm**.
4. The status should now read **In production**.

::: danger Do not skip this step
If your app is in **Testing** status, Google expires your tokens every 7 days and you will have to reconnect constantly. Publishing to **Production** is free, requires no verification for personal use, and makes your connection permanent.
:::

::: tip "Unverified app" warning
When you connect later, Google will show a screen saying "Google hasn't verified this app." This is normal for personal-use Cloud projects. Click **Advanced → Go to Starfish (unsafe)** to continue. You are the developer of this app, so it is safe.
:::

## Step 4 — Create OAuth Credentials

1. In the left sidebar, go to **APIs & Services → Credentials**.
2. Click **Create Credentials → OAuth client ID**.
3. For **Application type**, choose **Desktop app**.
4. Name it anything (for example, `Starfish Desktop`).
5. Click **Create**.
6. A dialog appears with your **Client ID** and **Client Secret**. Keep this tab open — you'll paste these into Starfish next.

## Step 5 — Connect Starfish

1. Open **Settings → Integrations** in Starfish.
2. Find **Google Workspace** and click **Connect**.
3. Paste your **Client ID** and **Client Secret** when prompted.
4. Click **Save**.
5. A browser window opens. Sign in with the same Google account you used in Step 1.
6. If you see the "unverified app" warning, click **Advanced → Go to Starfish (unsafe)**.
7. Review the requested permissions and click **Allow**.
8. The browser will say "You can close this tab." Return to Starfish.
9. The integration status will show **Connected**.

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

## Troubleshooting

### "Access blocked: this app is blocked" or "Error 403: access_denied"

Your OAuth consent screen is still in **Testing** mode. Go back to Step 3 and publish to Production.

### Connection dropped after a week

Same cause — your consent screen is in Testing mode. Publish to Production and reconnect once. It will stay connected after that.

### "Invalid client" or "Client ID not found"

Double-check that you copied the Client ID and Client Secret exactly, with no extra spaces. The Client ID should end in `.apps.googleusercontent.com`.

### Some tools don't work

You might not have enabled the API for that service in Step 2. Go to **APIs & Services → Library**, search for the missing service (for example, `Google Calendar API`), and click **Enable**.

### I want to reconnect with a different Google account

In Starfish, go to **Settings → Integrations → Google Workspace**, click **Disconnect**, then reconnect. You can use any account you like, but it needs to be a user on the same Cloud project you set up.

### I want to switch Cloud projects entirely

1. In Starfish, disconnect Google Workspace.
2. Delete the saved credentials (Settings shows a "Clear credentials" option).
3. Start over from Step 1 with your new Cloud project.

## Notes

- **Your data stays with you.** Starfish never sees your Client ID, Client Secret, or access tokens — they are encrypted on your device using your operating system's keychain.
- **You control access.** Because the Cloud project is yours, you can revoke access anytime at [myaccount.google.com/permissions](https://myaccount.google.com/permissions) or by deleting the OAuth client in Google Cloud Console.
- **No usage limits from Starfish.** You are calling Google's APIs directly with your own credentials, so your usage is subject only to Google's standard API quotas (very generous for personal use).
- **Re-authenticating.** If you ever see a "reconnect needed" prompt, just click **Reconnect** — no need to re-paste your credentials.
