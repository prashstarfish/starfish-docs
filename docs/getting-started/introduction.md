---
outline: deep
---

# Introduction

Starfish is an AI workspace that connects your team's tools to powerful language models in a single desktop interface. Instead of switching between Gmail, ClickUp, Figma, GitHub, and a dozen other tabs, you talk to one assistant that can act across all of them.

## What Starfish does

Starfish is not a chatbot. It is a full working environment. From a single conversation you can:

- Read and reply to emails
- Create and manage tasks
- Inspect and generate designs
- Deploy code and review pull requests
- Analyze ad performance and SEO data
- Generate images and video
- Run terminal commands and browse the web

All of this happens through natural language. You describe what you want, and the assistant executes it using your connected tools.

## Who it's for

Starfish is built for anyone who uses multiple SaaS tools daily:

- **Agencies** managing client projects across design, development, and marketing platforms.
- **Teams** that want a unified interface for Google Workspace, ClickUp, GitHub, and more.
- **Freelancers** who need to move fast without toggling between apps.

## What makes it different

Most AI tools are chat-only. Starfish ships with an embedded terminal, a built-in browser, image and video generation, and 13+ integrations that take real actions — not just talk about them.

Supported integrations include Google Workspace, Google Marketing Suite, ClickUp, GitHub, Figma, Vercel, Canva, Zapier, Apify, GoHighLevel, Facebook Ads, and more.

## Architecture

Starfish is a desktop application for macOS. Under the hood:

- **Electron** provides the native shell and system-level access.
- **Next.js** runs locally to power the UI.
- **Vercel AI Gateway** connects to LLMs (Claude, GPT-4, Gemini) through a unified routing layer.
- **MCP (Model Context Protocol)** servers handle communication with each integration.

Everything runs on your machine. Your data stays local unless you explicitly connect an external service.
