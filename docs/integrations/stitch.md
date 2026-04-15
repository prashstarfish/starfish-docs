---
outline: deep
---

# Stitch

Stitch connects AI-powered UI generation to Starfish. Generate complete UI screens, build design systems, create app prototypes, and iterate on designs -- all through natural language.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **Stitch** and click **Connect**.
3. You will be prompted for a **Google API Key**.
4. To generate an API key:
   - Go to the [Google Cloud Console](https://console.cloud.google.com).
   - Navigate to **APIs & Services > Credentials**.
   - Click **Create Credentials > API Key**.
   - Copy the generated key.
5. Paste the API key into Starfish and click **Save**.
6. The integration status will show **Connected**.

## What You Can Do

- **Generate Screens** -- Create UI screens from text descriptions
- **Design Systems** -- Create, update, and apply design systems to your projects
- **Projects** -- Create and manage Stitch projects, list and browse existing ones
- **Screen Variants** -- Generate multiple variants of a screen for comparison
- **Edit Screens** -- Modify existing screens with natural language instructions
- **Prototypes** -- Build multi-screen app prototypes with linked navigation

## Example Prompts

- "Generate a login screen with email and password fields, a 'Forgot password' link, and social login buttons"
- "Create a design system with our brand colors (#1a1a2e, #16213e, #0f3460) and Inter font"
- "Show me 3 variants of a pricing page with toggle between monthly and annual plans"
- "Edit the dashboard screen to add a sidebar navigation with icons"
- "Create a mobile app prototype with onboarding, home, and profile screens"

## Notes

- Stitch uses a Google API key for authentication, not a traditional Personal Access Token. You generate this key in the Google Cloud Console.
- Make sure the Stitch API is enabled for your Google Cloud project before creating the API key.
- Design systems created in Stitch can be applied across multiple projects for consistent styling.
- Generated screens use standard web technologies and can be exported for development.
