---
outline: deep
---

# GitHub

GitHub connects your repositories, pull requests, issues, and code reviews to Starfish. Manage your development workflow through natural language without switching to the browser.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **GitHub** and click **Connect**.
3. A setup stream will launch. Follow the prompts to authenticate with your GitHub account.
4. Authorize Starfish to access your repositories.
5. Wait for the stream to complete. The integration status will show **Connected**.

## What You Can Do

- **Repositories** -- List, search, and browse repos you have access to
- **Pull Requests** -- Create, review, comment on, and merge PRs
- **Issues** -- Create, update, close, and search issues
- **Code Reviews** -- Read review comments, submit reviews, request changes
- **Branches** -- List and manage branches
- **Commits** -- Browse commit history and diffs
- **Files** -- Read file contents from any branch or commit

## Example Prompts

- "List all open PRs in the starfish-app repo"
- "Create an issue titled 'Add dark mode support' in the frontend repo with a description of the requirements"
- "Show me the diff for PR #42"
- "What issues are labeled 'bug' and unassigned in the main repo?"
- "Summarize the last 10 commits on the develop branch"

## Notes

- GitHub uses a stream-based setup flow. The connection runs in a terminal-style panel inside Starfish.
- The AI can access all repositories your GitHub account has permissions for, including private repos.
- For organization repos, ensure your GitHub account has the necessary org-level permissions.
