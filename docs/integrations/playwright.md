---
outline: deep
---

# Playwright

Playwright adds local browser automation to Starfish. Browse the web, take screenshots, fill forms, click buttons, and automate any browser-based task -- all running locally on your machine with no authentication required.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **Playwright** and click **Connect**.
3. The integration activates immediately. No sign-in or tokens required.

Playwright runs a local browser instance on your machine. There is no external service to authenticate with.

## What You Can Do

- **Navigate** -- Open any URL, go back/forward, manage tabs
- **Screenshots** -- Capture full-page or element-level screenshots
- **Click & Interact** -- Click buttons, links, and interactive elements
- **Fill Forms** -- Type into input fields, select dropdowns, upload files
- **Read Content** -- Get page snapshots (accessibility tree), read text content
- **Run JavaScript** -- Execute custom scripts in the browser context
- **Monitor Network** -- Inspect network requests and console messages
- **Wait for Elements** -- Wait for specific elements, text, or URLs to appear
- **Keyboard & Mouse** -- Press keys, hover over elements, drag and drop
- **Dialog Handling** -- Accept or dismiss browser dialogs and alerts
- **Resize** -- Change the browser viewport dimensions

## Example Prompts

- "Go to our staging site and take a screenshot of the homepage"
- "Fill out the signup form on https://example.com/register with test data"
- "Click the 'Add to Cart' button and then take a screenshot of the cart page"
- "Navigate to our competitor's pricing page and extract all the plan names and prices"
- "Check if the login page loads correctly and has no console errors"

## Notes

- Playwright runs entirely on your local machine. No data is sent to external servers for browser automation.
- The browser instance is headless by default. You will see screenshots in the chat rather than a visible browser window.
- Playwright is useful for testing, scraping authenticated pages, and automating repetitive browser tasks.
- For large-scale public web scraping, consider using [Apify](./apify) instead.
