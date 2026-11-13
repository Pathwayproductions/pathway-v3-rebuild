# Off-Page SEO & Search Performance Report — pathwayproductions.in

Collected 2026-10-31. Sources: Semrush (connected to this project — real data), Porter Metrics (connected, but access blocked for this specific site — see below). Google Search Console and GA4 data for pathwayproductions.in itself were **not obtainable** this pass; this is stated plainly below rather than estimated.

> **Tooling update (2026-11-13):** Reporting now uses **AgencyAnalytics** instead of Porter Metrics going forward. Pathway Productions LLP is already set up there with Google Ads, Meta Ads, Bing Ads, GA4, Google My Business, HubSpot, Microsoft Clarity, Facebook, Instagram, YouTube and LinkedIn connected — the Porter account-slot cap and 30-day history limit described below no longer apply to future audits. Google Search Console still isn't in AgencyAnalytics' connected providers for this client either, so that specific gap is unchanged; it still needs a direct GSC connection.

## 1. What could NOT be pulled, and why (read this first)

- **Google Search Console — pathwayproductions.in has no connected property.** The Porter Metrics workspace tied to this account has GSC access for two *other* brands (`http://www.wowtam.com/` and `https://courses.gardencity.university/` / `sc-domain:gardencity.university`) but **not** for pathwayproductions.in, even though Rank Math on the WordPress side confirms GSC is linked there directly. **Action needed**: connect the pathwayproductions.in Search Console property to Porter (or grant a direct GSC API connection) to get real clicks/impressions/query/position data for the next version of this audit.
- **Google Analytics 4 — a "Pathway Website" GA4 property exists in Porter but querying it is currently blocked.** Two separate plan limits hit: (1) the workspace already has more connected accounts than the current Porter plan allows (3), so querying this new property would need another to be disconnected first — not something done without your approval, since it could affect other clients' reporting; (2) even within that cap, the plan's history window is capped at the **last 30 days** — the brief asked for 12-16 months with a 3-month comparison, which this plan cannot serve regardless. **Action needed**: either free up an account slot (your call on which to disconnect) or upgrade the Porter plan, then re-run this query.
- **Jetpack's own on-site stats**: not reachable — the logged-in WordPress account (Editor role) has no "Stats" menu item visible.

Nothing below substitutes for real GSC query/landing-page/impressions data. Treat the Semrush figures as independent third-party estimates, not Google's own numbers.

## 2. Domain-level organic visibility (Semrush, India database)

| Metric | Value |
|---|---|
| Semrush Rank (India) | 658,027 |
| Organic keywords ranking (top 100) | 28 |
| Estimated monthly organic traffic | 239 visits |
| Estimated organic traffic value | $3/mo |
| Paid (Google Ads) keywords | 0 |

**Headline finding**: of the ~239 estimated monthly organic visits, **208 come from the single branded keyword "pathway productions"** (position 1). Non-branded, service-intent keywords (e.g. "video production company chennai," "ad film makers in chennai," "corporate video makers chennai") all rank outside the top 10 (positions 11–86) and generate close to zero estimated traffic each. In plain terms: the site's organic visibility today is almost entirely people already searching for the brand by name, not people discovering it through service-related search. This is useful context for the new site's SEO priorities — it is starting from a narrow base, so the main migration risk is *not losing branded-search dominance*, while the real opportunity is in improving non-branded rankings going forward.

## 3. Top organic keywords (Semrush, India database, by estimated traffic)

| Keyword | Position | Monthly volume | Ranking URL |
|---|---|---|---|
| pathway productions | 1 | 260 | / |
| roadway productions | 10 | 170 | / (likely a misspelling match) |
| video production company chennai | 13 | 140 | /corporate-video-productions/ |
| corporate video makers chennai | 19 | 110 | / |
| ad film makers in chennai | 11 | 110 | / |
| video production company in chennai | 12 | 170 | **/video-production-services/** (the noindexed orphan page — see Technical Audit §2) |
| cinema production company in chennai | 25 | 390 | / |
| film production companies in chennai | 24 | 390 | / |
| production houses in chennai | 20 | 260 | / |
| film studios in chennai | 63 | 260 | / |

Full 26-row export available on request; the pattern holds throughout — mostly positions 10-90, almost all traffic concentrated on the homepage and the brand term.

## 4. Backlink profile (Semrush, root domain)

| Metric | Value |
|---|---|
| Total backlinks | 2,272 |
| Referring domains | 513 |
| Referring IPs | 412 |
| Follow links | 1,691 |
| Nofollow links | 581 |
| Authority Score | 18/100 |

Top referring domains by authority (plex.tv 78, google.com.eg 72, warthunder.com 62, provenexpert.com 51, sitelike.org 51) are mostly **not topically relevant** to video production/advertising — typical of an organic, uncurated link profile for a small agency rather than a deliberate link-building program. No evidence of toxic/spam link patterns beyond the usual noise; no action needed here specifically, but also no backlink-equity strategy currently in place worth protecting beyond what's captured in the page-level data below.

## 5. Page-level backlink equity (the real migration-risk signal)

This is the most actionable off-page finding. Semrush's indexed-pages report shows backlink equity is concentrated on a few URLs, **including some that no longer match the current site structure or are excluded from the sitemap**:

| URL | Backlinks | Referring domains | Status this pass |
|---|---|---|---|
| `www.pathwayproductions.in/` | 2,023 | 269 | live, redirects to non-www per Rank Math |
| `www.pathwayproductions.in/creative-productions/explainer-videos/` | 328 | 2 | **live (HTTP 200), legacy pre-redesign URL, consolidated only via canonical tag — not a real 301** (see Technical Audit) |
| `pathwayproductions.in/` (non-www) | 68 | 37 | live |
| `www.pathwayproductions.in/video-production-services/` | 30 | 1 | **the noindexed orphan page** |
| `www.pathwayproductions.in/ad-films` | 23 | 7 | live, matches current `/ad-films/` |
| `pathwayproductions.in/video-production-services/` | 20 | 1 | same orphan page, non-www variant |
| `pathwayproductions.in/digital-marketing-solutions/ppc/` | 11 | 1 | live, matches current page |
| `pathwayproductions.in/success-stories/` | 9 | 1 | live, matches current page |
| `www.pathwayproductions.in/creative-productions/corporate-videos/` | 8 | 3 | legacy URL — not confirmed live this pass |
| `www.pathwayproductions.in/corporate-video-services/` | 7 | 1 | **spot-checked this pass — currently resolves to Video Production Services page content, likely a soft-404/catch-all, not its own page** |
| `www.pathwayproductions.in/creative-productions/ad-films/` | 6 | 1 | legacy URL — not confirmed live this pass |

**Bottom line**: two URLs carry disproportionate, at-risk equity — the legacy `/creative-productions/explainer-videos/` alias (328 backlinks, no hard redirect) and the noindexed `/video-production-services/` orphan (50 backlinks combined across www/non-www, still ranking #12 for a real keyword). Both need an explicit decision before launch; see `SEO_PRESERVATION_CHECKLIST.md`.

## 6. Data not available this pass

- Real Search Console clicks/impressions/CTR/average-position by query or page.
- Real GA4 sessions, users, conversions, landing-page performance, 12-16 month trend, 3-month comparison.
- Google Business Profile data and local citation consistency.
- Branded vs. non-branded search split from Google's own data (the Semrush split above is a reasonable proxy but not Google's own numbers).
