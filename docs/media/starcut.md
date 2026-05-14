---
outline: deep
---

# Starcut Video Editor

Starcut is the in-app video editor. Pick a video on your disk, trim it, reframe for vertical platforms, drop in captions, mix a background music track, and render — all without leaving Starfish.

Open it from the sidebar's **Video Editor** link.

## Why use it

Starcut is built for the "I shot a podcast / interview / screen recording, now I need a short-form vertical cut" loop. It handles the parts that take the longest in a normal editor — finding the best moments, reframing to vertical, and following the subject through the shot — using AI.

Nothing leaves your machine. All processing runs locally via a bundled ffmpeg binary; AI calls go through the Vercel AI Gateway and Groq for transcription.

## Workflow

1. **Pick a video** — click the file picker; uses the native macOS dialog.
2. **Trim** — set start and end on the timeline. Re-uses the existing clip for analysis so you don't pay for the whole source file.
3. **Pick an aspect ratio** — 9:16 (TikTok / Reels / Shorts), 16:9 (YouTube / presentations), 1:1 (Instagram feed).
4. **Pick a reframe mode** — Centre crop, Face-pan, or Smart pan (AI).
5. **Captions** *(optional)* — Off, Opus, Karaoke, or Minimal style.
6. **Soundtrack** *(optional)* — pick a background track from the library or upload your own.
7. **Render** — the output lands in `~/Movies/Starfish Clips/` (macOS).

## Reframe Modes

### Centre crop

Plain geometric centre crop — fastest path, no analysis. Good when the subject is already centred in the source.

You can also click **Analyze with AI** in the panel that appears under the mode buttons. The AI picks the single best static centre point (e.g. centres on the speaker even if they're slightly off-frame in the source) and the render uses that instead of the geometric middle.

### Face-pan

Hard cuts between two manually-marked face positions. You drag two rectangles onto a sample frame; the renderer measures motion energy in each ROI and cuts to whichever face is talking. Works great for two-person interviews where you want the speaker on-screen.

### Smart pan (AI)

The headline mode. Gemini Flash samples 4–24 frames from your trim range plus an audio transcript (Groq Whisper) and returns a sequence of pan keyframes: at each timestamp, the AI picks where the subject is in the frame, how confident it is, and how zoomed-in to be.

Smart pan handles:

- **Subject following** — pans horizontally and vertically to keep whoever is speaking / acting / interesting in shot.
- **Dynamic zoom** — AI varies the crop width over time. 1.0 = tight strip (default); 2.0 = wider view for group shots / b-roll; 0.5 = closer than default for close-ups.
- **Speaker awareness** — when a transcript is available, the model uses it to identify who's talking at each moment so the visual frame matches the audio.

Click **Analyze with AI** in the Smart pan panel to kick off analysis. You'll see a chip per keyframe (timestamp + subject label + zoom level when it differs from 1.0). Re-analyze any time.

#### Motion style

Pick how the crop moves between AI keyframes:

| Style | Behaviour | Best for |
|-------|-----------|----------|
| **Cut** | Hard cuts at each keyframe boundary | Social-media energy, matches the look of fast-cut reels |
| **Smooth pan** | Continuous smoothstep glide across the whole interval | Cinematic, documentary feel |
| **Fast pan** | Quick swoop (~0.4s) at each keyframe then hold | Subject visible most of the time; punchy without being abrupt |

## Captions

Caption styles:

- **Off** — no captions burned in.
- **Opus** — big bold karaoke with a yellow active word.
- **Karaoke** — 4-word chunks with a green highlight on the active word.
- **Minimal** — clean text, no highlight.

Captions use Groq's `whisper-large-v3-turbo` for word-level timestamps. You'll see a spell-check modal before render so you can fix any Whisper mis-hearings; your edits are baked into the burn-in. Adds 5–20s to the render.

## Soundtrack

Optional background music mix. Two sources:

- **Library** — curated [free music tracks](/media/soundtrack) (Creative Commons via Jamendo) with AI-readable tags (mood, genre, energy, BPM, "useful for").
- **Your uploads** — drag in any `.mp3` / `.wav` / `.ogg` / `.flac` / `.aac` / `.m4a` (50 MB cap). Lives in your local userData directory; never uploaded anywhere.

Controls in the Soundtrack panel:

- **Volume** slider (0–100% of source audio level).
- **Duck under voice** toggle — when on, ffmpeg's sidechain compressor lowers the music whenever the source audio (typically speech) is present. Default on.
- Fade-in / fade-out are automatic (0.5s in, 1.0s out).

See the [Soundtrack](/media/soundtrack) page for the full music library reference.

## Find the best moments

When your source is long (a 30-min podcast, an hour-long interview), the **Find moments** button runs a transcript-aware LLM scan and returns 3–5 short clip candidates with titles and reasons. Each candidate can be batch-rendered with the same reframe / caption / soundtrack settings.

Vibe presets bias the picker: All, Funny, Insightful, Quotable, or Emotional.

Target-duration presets cap the clip length to platform-friendly windows:

- **Free** — no cap (LLM picks 8–25s)
- **60s** — TikTok / Reels / Shorts algorithmic sweet spot
- **3 min** — YouTube Shorts max
- **10 min** — TikTok in-app recording cap

When you select moments and click **Render selected**, each moment is rendered with its own per-clip AI pan analysis using that moment's title and reason as narrative context.

## Output

Rendered clips land in:

- macOS: `~/Movies/Starfish Clips/`
- Others: `~/Videos/Starfish Clips/`

Files are named `<source-stem>_YYYY-MM-DDTHH-MM-SS.mp4`. Multiple outputs from one source produce a small in-app gallery during the session — open them, copy paths, or open the containing folder.

## Under the hood

- Bundled ffmpeg via `ffmpeg-static` (`Resources/ffmpeg-static/ffmpeg` in production builds). No `brew install ffmpeg` required.
- Trim uses `-c copy` (no re-encode, instant) before any analysis or encoding pass.
- Smart pan uses ffmpeg's `zoompan` filter so crop width can vary per frame.
- Captions are baked into the same render pass as crop+scale (no second encode).
- Soundtrack is mixed in the same pass via `-filter_complex` with `sidechaincompress` for ducking.
