# Executive SEO Summary — pathwayproductions.in migration audit

Audit date: 2026-10-31. Read-only — nothing on the live site or the GitHub
repo's existing content was changed; all 9 new files below are additions
under `docs/seo-migration/`.

## 1. Executive summary (top findings)

1. **41 blog posts have no destination in the new build.** The new site's `/blogs/` is an index page only — no article template exists yet. 14 of those posts were published since June 2026 and are actively earning fresh search visibility today. This is the largest single risk found.
2. **A noindexed "orphan" page is quietly ranking and earning backlinks.** `/video-production-services/` is excluded from the sitemap and set to noindex in WordPress, yet is publicly reachable, has ~50 real backlinks, and ranks #12 in Google for a 170-searches/month keyword. It needs an explicit decision, not an accidental drop.
3. **A legacy URL is carrying 328 backlinks on a canonical tag, not a redirect.** `/creative-productions/explainer-videos/` (pre-redesign URL structure) only survives today because of a canonical tag pointing to `/explainer-video-company/` — that mechanism won't carry across a platform migration without a real 301.
4. **Privacy Policy and Terms & Conditions don't exist in the new 29-page build.** Both are legally required and currently missing.
5. **Organic visibility is narrow and brand-dependent.** Of ~239 estimated monthly organic visits, 208 come from the single branded keyword "pathway productions." Service-intent keywords rank 10th-90th with near-zero traffic — the real opportunity for the new site is broadening non-branded visibility, while the preservation priority is protecting the branded-search dominance that already exists.
6. **GSC and GA4 data for the site itself were not obtainable this pass** — not because the data doesn't exist, but because of access/connection gaps (see §3). The Off-Page report is built on third-party Semrush estimates instead, which is noted everywhere it applies.
7. **11-16 individual pages have no mapped destination** in the new 29-page build (whiteboard animation, 2D/3D animation services — together holding ~21 embedded client-project videos, advertising-agency, team, two digital-marketing sub-services, and others) — each needs a consolidate/keep/drop decision.
8. **On-page SEO has a few concrete, fixable bugs**: a duplicated meta description between Terms & Privacy, 3 pages with no H1, 23+ images missing alt text on the homepage alone, and a broken homepage `og:image`.

## 2. Current website architecture

29 published pages + 41 blog posts + 6 category archives + 19 private/legacy pages (mostly old homepage drafts, no SEO value) = 49 total WordPress pages, 42 posts. Full inventory in `EXISTING_URL_INVENTORY.csv`.

## 3. What this audit could and couldn't access

**Could access**: WordPress admin (Editor-level account, not Administrator — plugin list, theme name, and redirect-plugin settings were blocked), public sitemap/robots.txt, Rank Math's own SEO Analyzer and bulk post/page lists, live page source for all 29 pages + spot-checks of legacy URLs, Semrush (real backlink and keyword-ranking data).

**Could not access**: Google Search Console for pathwayproductions.in (connected for two *other* client brands in this account, not this one), GA4 for the Pathway site (blocked by a Porter plan account-slot limit and a 30-day history cap), Jetpack's on-site stats, full plugin/theme inventory, Core Web Vitals/PageSpeed data, full per-post metadata for all 41 blog posts (bulk SEO-score data was pulled instead).

## 4. SEO risks ranked by severity

See `SEO_MIGRATION_MAP.csv` (risk column) and `SEO_PRESERVATION_CHECKLIST.md` (priority-ordered action list). Critical: blog posts, the orphan video-production-services page, the uncredited legacy explainer-videos URL. High: 8 pages with no mapped destination, missing legal pages, unverified legacy alias URLs.

## 5. YouTube video inventory summary

56 distinct YouTube video IDs found embedded across the live site (deduplicated), spanning ad films, corporate films, explainer videos, whiteboard/2D/3D animation, music videos, and the Kurai Ondrum Illai feature film. None are yet confirmed/approved for reuse in the new build — see `YOUTUBE_VIDEO_INVENTORY.csv` for the full list and `docs/VIDEO_MEDIA_REGISTER.csv` (pre-existing in this repo) for how 8 of them already map to planned new-site sections.

## 6. Missing content and media

41 blog posts (no destination), legal pages (Privacy Policy, Terms & Conditions), and all client video work currently shown on `/whiteboard-animation/`, `/2d-animation-services/`, `/3d-animation-services/` (no destination page for any of the three).

## 7. Recommendations for the 29-page website

See `NEW_WEBSITE_SEO_IMPLEMENTATION.md` for the full technical implementation list (redirects, metadata, schema, analytics, sitemap).

## 8. Where everything is

All 9 new deliverables are in `docs/seo-migration/` on branch `build/29-page-full-site`:
`EXISTING_URL_INVENTORY.csv`, `EXISTING_SEO_METADATA.csv`, `SEO_MIGRATION_MAP.csv`,
`YOUTUBE_VIDEO_INVENTORY.csv`, `PORTFOLIO_CONTENT_INVENTORY.csv`,
`TECHNICAL_SEO_AUDIT.md`, `OFF_PAGE_SEO_REPORT.md`,
`SEO_PRESERVATION_CHECKLIST.md`, `NEW_WEBSITE_SEO_IMPLEMENTATION.md`,
`MEDIA_INTEGRATION_MANIFEST.json`. This file is a 10th, the executive summary tying them together.

## 9. Items requiring Arun's approval before migration

1. What happens to the 41 blog posts (build article pages & migrate vs. selective migration vs. other).
2. Fate of `/video-production-services/` (restore as indexed page vs. deliberate drop).
3. Redirect targets for 6 "tentative" mappings (lead-generation, seo, online-sales, success-stories, feature-films→films, team).
4. Consolidate/drop decision for 8 pages with no mapped destination (whiteboard-animation, 2d/3d-animation-services, advertising-agency, virtual-reality, team, web-development, brand-awareness).
5. Whether any of the client video work found (NTC, N Trust, LECS, GoStocks, GCU, Fashion Profiles, Phozhil, We Box, Spice Hill, Akara Research, Ecobuddy, and others) is approved for reuse in the new build.
6. Freeing a Porter account slot or upgrading the plan to unblock GA4/GSC data access for future reporting.
