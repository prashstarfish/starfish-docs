---
outline: deep
---

# Soundtrack Library

A built-in catalogue of background music tracks for the [Starcut video editor](/media/starcut). Two sources — a cloud-hosted library of curated Creative Commons tracks, and any audio file you drop in from your own disk.

The library is only visible inside Starcut. There's no top-level "Music" page — by design.

## Where the music comes from

- **Curated library** — ~25 tracks pulled from [Jamendo](https://www.jamendo.com)'s Creative Commons catalog. Tracks span mood / genre buckets (cinematic dramatic, lofi chill, ambient meditation, funk groovy, etc.). Each track is annotated with AI-readable metadata: mood, genre, energy (1–10), BPM, description, and "useful for" tags.
- **Your uploads** — any `.mp3`, `.wav`, `.ogg`, `.flac`, `.aac`, or `.m4a` file. 50 MB cap per file.

## How the catalogue works

Library track **metadata** lives in Supabase (read-only for the app). The audio **bytes** live on the upstream CDN — we don't re-host any copyrighted material. When you preview or render with a library track, Starfish downloads the bytes once from the CDN into a local cache (`<userData>/music-cache/<id>.<ext>`), then plays from disk on every subsequent use.

User uploads live entirely on your machine (`<userData>/music-uploads/<id>.<ext>`) and are indexed in your local SQLite database.

## Using a track

In the Starcut Soundtrack panel:

1. **Preview** — click the play button next to any track to listen. First click for a library track downloads it (you'll see a spinner); subsequent clicks play instantly.
2. **Pick** — click the track title to select it for the next render. The selected track shows a green "Picked" badge.
3. **Volume** — slider controls the music level relative to the source audio. Default 25%.
4. **Duck under voice** — when on (default), ffmpeg's sidechain compressor lowers the music whenever the source audio (speech, narration) is present, then returns to the set level when it stops. Works on any video — no transcript required.
5. **Clear** — removes the selected track. Renders go ahead without music.

## Uploading your own

Click **Upload** at the top of the panel. The file picker accepts the formats listed above. Once uploaded:

- Duration is probed automatically and shown on the row.
- The track is sorted to the top of the picker (above the library).
- The trash icon on the row deletes both the metadata and the bytes on disk.

Uploaded tracks never leave your machine.

## Licenses

The library defaults to Creative Commons tracks. Some are CC-BY (attribution required) — the track's row shows the license name, and the artist field is populated so you can credit them in your video description.

The seed manifest favours commercial-friendly licenses (CC-BY, CC-BY-SA), but you're responsible for following the upstream license terms when using a clip in a published work.

User uploads carry no license metadata — Starfish assumes you have the rights to use what you uploaded.

## "Smart pick" via the agent

When you set up an [Automation](/automations/overview) that produces a Starcut clip, the agent can read each library track's AI-readable description and pick one to match the brief ("upbeat acoustic for a product reveal", "ambient calm for the intro card"). This works because the metadata lives next to the catalog row — no audio decoding required.

## Where things live

| Asset | Location |
|-------|----------|
| Library metadata | Supabase `music_tracks` table (server) |
| Library audio bytes | Upstream CDN (Jamendo), cached locally on first use |
| Local cache index | SQLite `music_library_cache` table |
| Cached audio bytes | `<userData>/music-cache/<id>.<ext>` |
| Upload index | SQLite `music_uploads` table |
| Upload bytes | `<userData>/music-uploads/<id>.<ext>` |
