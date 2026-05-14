---
outline: deep
---

# Knowledge Files

Knowledge files are uploads attached to a project or folder that the AI can read on demand. PDFs, Word docs, spreadsheets, images, code samples — drop them in once and they're available in every chat in the same scope.

## Supported file types

| Type | What happens on upload |
|------|------------------------|
| PDF | Text extracted with PDF.js. Available verbatim via `readWorkspaceFile`. |
| DOCX (`.docx`) | Text extracted with Mammoth. Available verbatim. |
| XLSX (`.xlsx`, `.xls`) | Cell contents flattened with ExcelJS, sheet by sheet. |
| Images (PNG, JPG, GIF, WebP, SVG, etc.) | Stored as bytes. Read multimodally by vision models when the AI calls `readWorkspaceFile`. |
| Plain text (`.txt`, `.md`, `.json`, `.csv`, `.ts`, `.py`, etc.) | Read as UTF-8. |
| Anything else | Bytes are stored, but no text extraction is attempted. The AI can still describe and download the file. |

The per-file size cap is **50 MB**. Files larger than that are rejected at upload time.

## Uploading a file

From the **Knowledge files** section on a project or folder page:

- Click **Upload** and pick one or more files.
- Or drag-and-drop files onto the dashed drop zone.

Multiple files can upload in parallel. Each row appears immediately with an **Analyzing** pill while the AI processes it in the background — uploads don't block on analysis.

## What happens during analysis

For every uploaded file, Starfish runs a single Claude Haiku 4.5 call that produces:

- **A 1–2 sentence description** — concrete and specific. *"Acme Inc brand guidelines — logo, colour palette (#5B2C6F primary, #F4D03F accent), typography. 12 pages."*
- **A suggested filename** when the original looks meaningless.

The analyzer runs with a concurrency cap of 3 — bulk uploads of 20 files don't blast 20 parallel calls.

If the AI can't produce a useful description (vision flagged the image as ambiguous, the model timed out, or the response didn't match the schema), Starfish falls back to a metadata-only description like *"PDF (3.2 MB). Auto-described from metadata only — the AI couldn't generate a richer summary."* The file remains fully usable and the **Re-analyze** button retries it on demand.

## Auto-rename

If you upload a file with a meaningless name — `IMG_4892.png`, `Screenshot 2025-04-26 at 11.32.10.png`, `8400e29b-41d4-4716-9a0f-c7f1.pdf`, `126510.org.pdf`, `WhatsApp Image 2024-07-15 at 18.04.32.jpeg` — Starfish renames it to something descriptive based on the file's contents.

What counts as "meaningless":

- Mostly digits (`126510.org.pdf` — 60%+ digits).
- UUID-shaped or long hex strings.
- Common camera, screenshot, scan, or messenger patterns (`IMG_*`, `Screenshot *`, `Scan_*`, `WhatsApp Image *`).
- Long random strings with little to no real words.

Files with sensible names — `logo1.png`, `brand-guide.pdf`, `Q3-research.pdf` — are kept as-is.

The original filename is **never lost**. Hover the row to see *"Originally: 126510.org.pdf"* in the tooltip; the Manifest panel also lists the original name.

To turn auto-rename off: **Settings → Workspace → Auto-rename uploaded files**. With the toggle off, the analyzer still proposes a rename, but you have to **Accept** it from the file row before it applies.

## The row layout

By default each row is compact:

```
[icon]  filename.pdf   3.2 MB   2 min ago   [Analyzing]   [Download] [Re-analyze] [Delete]
```

If a rename is suggested but auto-rename was off, a purple banner under the row offers **Accept** / **Keep**.

Hover the filename to see the original name (if it was renamed) and the full description in a native tooltip.

The list collapses to **3 rows by default**. Click *Show all (N)* to expand, *Show fewer* to collapse back.

## The Manifest panel

Click the **Manifest** button at the top of the Knowledge files section to open a richer view. The Manifest shows every file in this scope with:

- The current and original filenames.
- The full AI-generated description.
- Any analyzer warning (e.g. *"Model produced no usable output — using a metadata-only description"*).
- An inline **Edit description** affordance for each file.

Editing a description here marks it as user-edited. Future re-analysis runs **will not overwrite** your edit — your wording wins until you clear it.

## Per-row actions

| Action | What it does |
|--------|--------------|
| **Download** | Opens the file in a new tab with its native MIME type. PDFs preview, images render. |
| **Re-analyze** | Reruns Haiku for fresh description + rename suggestion. Use when you find the description wrong or after a soft failure. |
| **Delete** | Removes the row from the database AND the bytes from disk. **Your original file in Downloads (or wherever you uploaded from) is never touched.** |

## How the AI uses these files

Two layers:

1. **Manifest in the system prompt.** Every chat in the project (or folder) receives a `AVAILABLE WORKSPACE FILES` block listing every file with its description and id. The AI can decide which file is relevant without ever reading the bytes.

2. **The `readWorkspaceFile` tool.** When the AI needs verbatim content — *"what's our exact colour palette?"*, *"what does the launch brief say about timeline?"* — it calls `readWorkspaceFile(fileId)`. The tool returns:

   - Extracted text for documents (PDFs, DOCX, XLSX, plain text).
   - A base64 image with MIME for image files (so vision models can describe it).
   - Pagination via `offset` / `limit` for huge documents.

The tool is **scoped to the chat's project**. A chat in Project A cannot read files from Project B even if it knows their ids.

## Disk usage

Files are stored under `~/Library/Application Support/Starfish/workspace-files/<projectId>/` (macOS) — sibling to the SQLite database.

A typical project: 30 MB – 100 MB across its files. Ten projects: ~300 MB – 1 GB on disk. Same scale as a Slack desktop cache. Modern disks have hundreds of GB free.

When you delete a file, the bytes are removed immediately. When you delete a folder, files attached to that folder lose their folder link but keep their project link (their bytes stay). When you delete a project, its on-disk directory is wiped.

## Privacy

The analyzer sends file content to the Vercel AI Gateway (and from there to Anthropic for Haiku). This is the same network path as your normal chats — the same provider, the same endpoint, no different. No file content leaves your machine *except* during analysis or when the agent reads it via `readWorkspaceFile`.

## Tips

- **Drop the source PDF, not a screenshot of it.** Text extraction is far better than vision-OCR-on-screenshot.
- **Re-analyze when you reorganise.** If a description is wrong (model hallucinated, file is more interesting than it looked), one click fixes it.
- **Edit descriptions in the Manifest.** Especially for files the AI couldn't describe well. A user-edited description survives re-analysis.
- **Folder-scope files for confidentiality.** Files in `Project / Confidential` aren't visible to chats in `Project / Marketing` — even though both share the project's project-level files.
