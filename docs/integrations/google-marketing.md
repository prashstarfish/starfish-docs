---
outline: deep
---

# Google Marketing Suite

Google Marketing Suite brings GA4 analytics, Search Console SEO data, and Google Tag Manager into Starfish. Query your website performance, inspect search rankings, and manage tags -- all through natural language.


## How to Connect

1. Open **Settings > Integrations** in Starfish.
2. Find **Google Marketing Suite** and click **Connect**.
3. A setup stream will launch. Sign in with the Google account that has access to your analytics properties.
4. Grant the requested permissions.
5. Wait for the stream to complete. The integration status will show **Connected**.

## What You Can Do

### GA4 Analytics

- List all GA4 properties you have access to
- Run custom reports with dimensions, metrics, and date ranges
- View real-time active users and events
- List conversion events

### Search Console

- Query search performance data (clicks, impressions, CTR, position)
- Filter by page, query, country, or device
- Inspect URL indexing status
- List and submit sitemaps

### Tag Manager

- List accounts and containers
- View, create, and manage tags
- View, create, and manage triggers
- View, create, and manage variables
- Create and publish container versions

## Example Prompts

- "Show me the top 10 landing pages by sessions for the last 30 days"
- "What are my top search queries in Google Search Console this week?"
- "Check the indexing status of https://example.com/pricing"
- "List all tags in my GTM container"
- "Run a GA4 report comparing organic vs paid traffic for the last 90 days"

## Notes

- Google Marketing Suite uses a stream-based setup flow, similar to Google Workspace. The connection runs in a terminal-style panel inside Starfish.
- You need appropriate access to GA4 properties, Search Console sites, and GTM containers in the Google account you connect with.
- GA4 reports support any combination of dimensions and metrics available in the GA4 Data API.
