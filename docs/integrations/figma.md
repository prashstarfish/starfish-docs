---
outline: deep
---

# Figma

Figma connects your design files to Starfish. Read designs, inspect components, generate production-ready code from your mockups, and manage Code Connect mappings between Figma components and your codebase.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **Figma** and click **Connect**.
3. A browser window will open to Figma's authorization page.
4. Sign in to your Figma account and approve the connection.
5. You'll be redirected back to Starfish. The integration status will show **Connected**.

## What You Can Do

- **Read Designs** -- Get design context, layout, and styling from any Figma file or frame
- **Screenshots** -- Capture visual screenshots of specific nodes or entire pages
- **Component Inspection** -- Browse component properties, variants, and design tokens
- **Code Generation** -- Generate code from designs adapted to your project's stack
- **Code Connect** -- Map Figma components to your codebase components for consistent design-to-code translation
- **Design System** -- Search your design system, inspect variables, and create design system rules
- **Metadata** -- Read file structure, pages, and node hierarchy
- **FigJam** -- Read FigJam boards and generate diagrams

## Example Prompts

- "Show me the design for the login page in our Figma file" (paste the Figma URL)
- "Generate a React component from this Figma frame"
- "What design tokens are defined in our Figma design system?"
- "Take a screenshot of the mobile nav component"
- "Set up Code Connect mappings for the Button component"

## Notes

- Figma uses OAuth PKCE for authentication. The connection is handled through a secure browser popup.
- When generating code from designs, Starfish adapts the output to match your project's existing stack and component library.
- Code Connect mappings persist across sessions. Once you map a Figma component to a codebase component, future code generation will use the mapping automatically.
- You can paste any `figma.com/design/...` or `figma.com/board/...` URL directly into the chat.
