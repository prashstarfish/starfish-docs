---
outline: deep
---

# Embedded Terminal

Starfish includes a full terminal emulator built into the workspace. Run shell commands, manage servers, and execute builds without switching windows.


## How It Works

The terminal spawns real shell processes (bash or zsh) using xterm.js and node-pty. It behaves identically to your system terminal -- same shell config, same PATH, same environment variables.

## Multi-Tab Support

Open multiple terminal sessions side by side:

- **New tab**: `Cmd + T`
- **Close tab**: `Cmd + W`
- Switch between tabs by clicking or using the tab bar


## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd + T` | New tab |
| `Cmd + W` | Close tab |
| `Cmd + K` | Clear terminal |
| `Cmd + C` | Copy selection |
| `Cmd + V` | Paste |
| `Cmd + +` | Zoom in |
| `Cmd + -` | Zoom out |

## AI Command Execution

The AI agent can execute terminal commands on your behalf. Every command triggers a permission prompt before running -- you always approve or deny before anything executes.


This enables workflows like:

- "Run `npm install` and fix any errors"
- "Check the git log for the last 5 commits"
- "Start the dev server and tell me the URL"

## Use Cases

- **Build and test**: Run builds, execute test suites, inspect output
- **Git operations**: Stage, commit, push, and resolve conflicts
- **Server management**: Start/stop local servers, check ports, tail logs
- **Package management**: Install dependencies, audit packages, update versions
- **General shell tasks**: File operations, environment setup, scripting
