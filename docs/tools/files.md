---
outline: deep
---

# File Management

The AI agent can read and write files on your local filesystem. A permission system ensures you stay in control of all modifications.

## Permission Model

File operations are split into two categories:

### Read-Only (No Prompt Required)

These operations run automatically when the AI needs information:

- List directory contents
- Read file contents
- Search within files

### Write Operations (Approval Required)

These operations always trigger a permission prompt:

- Create new files
- Edit existing files
- Delete files
- Move or rename files


## Blocked Paths

Certain sensitive directories are always denied, regardless of approval:

| Path | Reason |
|------|--------|
| `node_modules` | Package integrity |
| `.ssh` | SSH keys and config |
| `.aws` | AWS credentials |
| `.gnupg` | GPG keys |
| `/Applications` | System applications |
| `/System` | macOS system files |

Attempts to read or write to these paths are blocked without a prompt.

## Saving AI Artifacts

When the AI generates code, data, or other files during a conversation, you can save them to any local directory:

1. The AI generates a file artifact
2. You approve the save location
3. The file is written to your filesystem

This works for any file type -- source code, configuration files, data exports, images, and more.

## Use Cases

- **Code editing**: Let the AI read your codebase, suggest changes, and apply them with your approval
- **Config management**: Generate or update configuration files (`.env`, `tsconfig.json`, Docker files)
- **Log analysis**: Point the AI at log files for debugging and pattern recognition
- **Data export**: Save AI-generated reports, CSVs, or structured data to disk
