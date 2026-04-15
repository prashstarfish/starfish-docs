---
outline: deep
---

# Embedded Browser

Starfish includes a built-in web browser directly in the workspace. Browse the web, preview AI-generated HTML, and let the AI interact with pages on your behalf.

![Embedded browser](/images/browser-overview.png)

## Features

- **Multi-tab browsing** with URL bar, back/forward, and refresh
- **AI-generated HTML preview** -- artifacts render instantly in the browser
- **Playwright integration** -- the AI can control the browser programmatically

## AI Browser Control

Through Playwright integration, the AI agent can interact with web pages:

| Action | Description |
|--------|-------------|
| Navigate | Open any URL in the browser |
| Click | Click buttons, links, and interactive elements |
| Fill forms | Enter text into input fields and forms |
| Screenshot | Capture the current page state |
| Extract content | Read text and data from the page |

All browser actions initiated by the AI require your approval through permission prompts.

## HTML Artifact Preview

When the AI generates HTML, CSS, or JavaScript artifacts during a conversation, they automatically render in the embedded browser. This creates a tight feedback loop:

1. Ask the AI to build a page or component
2. See it rendered in real time
3. Request changes and see updates immediately


## Use Cases

- **Research**: Look up documentation, reference material, or competitor sites without leaving Starfish
- **Preview generated code**: See AI-built HTML/CSS/JS rendered live
- **Test web apps**: Navigate to localhost and test your running application
- **Form automation**: Let the AI fill out repetitive forms
- **Competitive analysis**: Browse and extract information from websites
