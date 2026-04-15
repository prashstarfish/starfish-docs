---
outline: deep
---

# Prompt Builder

The Prompt Builder helps you write structured, effective prompts for complex tasks. Instead of crafting everything in a single message, you define requirements and constraints separately -- the builder generates an optimized prompt.

## Opening the Prompt Builder

Click the **Prompt Builder** button near the composer to open the side panel.

![Prompt Builder panel](/images/prompt-builder.png)

## How It Works

The builder has three sections:

### Requirements

A text area where you describe what you want. Be specific about the output you expect. Type **@** to mention tools or files inline.

### Do / Don't Instructions

Constraint sets that shape the AI's behavior:

- **Do** -- things the AI should include or follow. Examples: "Include your target audience and brand voice", "Specify the desired output format".
- **Don't** -- things to avoid. Examples: "Ask for multiple unrelated things at once", "Be vague about what success looks like".

The builder ships with sensible defaults. Add, edit, or remove instructions as needed. Your custom instructions persist across sessions.

### @Tool Mentions

Reference specific integrations directly in your requirements. The builder ensures those tools are included in the generated prompt.

## Generating the Prompt

Click **Generate** and the builder produces an optimized prompt from your requirements and constraints. The generated prompt is inserted into the composer, ready to send or edit further.

## Tips for Good Prompts

- **One task per prompt.** Break complex workflows into sequential messages.
- **Name the output format.** "Write a CSV with columns: name, email, status" beats "give me the data."
- **Set boundaries.** The Don't instructions are powerful -- use them to prevent common failure modes.
- **Reference context.** Use @mentions to point the AI at specific files or tools it should use.
