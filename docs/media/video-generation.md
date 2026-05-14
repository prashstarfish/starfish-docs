---
outline: deep
---

# Video Generation

Create short video clips (typically 4–10 seconds) from text descriptions or starting images within Starfish. Two surfaces, same Gateway backend: the dedicated **Video Gen studio** for one-off clips, and the **in-chat video tool** for clips that need conversation context.

## Available Models

| Model | Backend | Notes |
|-------|---------|-------|
| **Veo 3** | Google `veo-3.0-generate-001` | Strong general-purpose model. Start-frame supported. |
| **Kling v3** | Kling `kling-v3.0` (t2v / i2v) | Cinematic motion, supports both start AND end frames for guided motion. |
| **Kling v2.6** | Kling `kling-v2.6` (t2v / i2v) | Slightly older, also supports start + end frames. |
| **Seedance 2** | ByteDance `seedance-2.0` | Stylized motion, good for animation-style output. |

All four route through Vercel AI Gateway. A "premium" badge in the picker flags models with a higher per-clip cost.

## Video Gen Studio

The dedicated studio lives at **Video Gen** in the sidebar.

1. Click **Video Gen** in the sidebar to open or resume a session.
2. Set the configuration:
   - **Duration** — typically 4–10 seconds (model-dependent).
   - **Aspect ratio** — 16:9 (landscape), 9:16 (portrait), 1:1 (square).
   - **Start frame** *(optional)* — upload an image to use as the first frame.
   - **End frame** *(optional, Kling only)* — upload an image to use as the last frame. Greyed out on Veo/Seedance.
3. Type a description of the video.
4. Click **Generate**. Progress is shown inline — video gen typically takes 1–3 minutes.

### Storage

Generated videos are stored in IndexedDB keyed by session — the clip survives reload without re-downloading. A `idb://sessionId/turnId/generated` sentinel in localStorage tracks the connection. Videos resolve to a `blob:` URL on mount for inline playback.

### Continue in Chat

The "Continue in chat" button on a generated clip opens a fresh chat session pre-seeded with the original prompt. Note: chat agents **cannot watch video** — the clip itself isn't transferred. The original prompt becomes the conversation context so you can discuss edits, request variations (via re-generation in the studio), or pair the clip with other work.

## In-Chat Video Generation

The chat agent can also generate clips inline.

### Enabling it

Click the **Media** dropdown in the chat composer (next to **Agents** and **Apps**) and toggle **Video** on. Off by default — videos are slower and pricier than images.

Once on, the agent has access to a `generate_video` tool it can invoke when your message asks for a clip.

### How it shows up

The clip plays inline as a `<video>` element. The bytes are saved as an Artifact (in SQLite), and the chat message references it via `/api/artifacts/<id>` so the conversation timeline doesn't carry multi-MB data URLs in store state.

## Aspect Ratio Guide

| Aspect Ratio | Format | Common Uses |
|--------------|--------|-------------|
| 16:9 | Landscape | YouTube, presentations, websites |
| 9:16 | Portrait | Instagram Stories, TikTok, YouTube Shorts |
| 1:1 | Square | Instagram feed, social ads |

## Use Cases

- **Social media content** — short-form clips for Stories, Reels, TikTok.
- **Product demos** — quick walkthroughs and feature highlights.
- **Ad creatives** — generate video ads for testing and iteration.
- **B-roll** — establishing shots, lifestyle footage, motion backgrounds.

## After Generation — Starcut Editor

Generated (or any imported) videos can be opened in the [Starcut Video Editor](/media/starcut) for trimming, smart reframing for vertical, background music, and AI-driven pan/zoom.
