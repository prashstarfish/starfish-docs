---
outline: deep
---

# Facebook Ads

Facebook Ads connects your Meta advertising accounts to Starfish. Manage ad campaigns, audiences, creatives, pull performance insights, and configure automation rules -- all through natural language.


## How to Connect

Facebook Ads supports two authentication paths depending on your team membership.

### Starfish Team Members (@starfishadage.com)

If your account email ends in `@starfishadage.com`, you are automatically routed through the team proxy:

1. Open **Settings > Integrations** in Starfish.
2. Find **Facebook Ads** and click **Connect**.
3. The connection is established automatically. No tokens or manual setup required.

### External Users (PAT Fallback)

If you are not a Starfish team member, you will need to provide a System User token and Ad Account ID:

1. Open **Settings > Integrations** in Starfish.
2. Find **Facebook Ads** and click **Connect**.
3. You will be prompted for two values:
   - **System User Access Token** -- Generate this in Meta Business Manager under **Settings > System Users > Generate Token**. Select the `ads_management` and `ads_read` permissions.
   - **Ad Account ID** -- Starts with `act_`. Find it in **Ads Manager > Account Settings**.
4. Paste both values and click **Save**.
5. The integration status will show **Connected**.

## What You Can Do

- **Campaigns** -- Create, read, update, and pause ad campaigns
- **Ad Sets** -- Manage targeting, budgets, schedules, and bid strategies
- **Ads** -- Create and manage individual ads and creatives
- **Audiences** -- Build and manage custom and lookalike audiences
- **Insights** -- Pull performance metrics (spend, impressions, clicks, conversions, ROAS) at the account, campaign, ad set, or ad level
- **Automation Rules** -- Configure rules that automatically adjust budgets, bids, or pause underperforming ads
- **Creatives** -- View and manage ad creative assets

## Example Prompts

- "Show me the top 5 campaigns by ROAS for the last 30 days"
- "Pause all ad sets in the 'Summer Sale' campaign that have a CPA above $50"
- "Create a new campaign called 'Product Launch Q2' with a daily budget of $200"
- "What's my total ad spend this month across all active campaigns?"
- "List all custom audiences with more than 10,000 people"

## Notes

- Team-proxy authentication is automatic for `@starfishadage.com` email addresses. No configuration is needed.
- External users must generate a System User token with appropriate permissions in Meta Business Manager. Regular user tokens are not supported.
- The Ad Account ID must include the `act_` prefix.
- Performance insights support date ranges, breakdowns by age/gender/placement, and all standard Facebook Ads metrics.
