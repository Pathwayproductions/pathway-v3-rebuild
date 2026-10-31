# Google Search Console Audit — pathwayproductions.in

Audit date: 2026-10-31. Read-only — no indexing settings, sitemaps, URL removals,
ownership, or configurations were changed in Search Console. Data source: Google
Search Console (property `https://pathwayproductions.in/`, accessed via the
`marketing@pathwayproductions.in` Google account, which already had GSC access
configured). This is the **first-party Google data** that `OFF_PAGE_SEO_REPORT.md`
(2026-10-31, earlier pass) explicitly flagged as unobtainable; where this report's
findings overlap with that Semrush-based report, they are called out as
**confirmed via GSC** below.

## 0. Property and access notes

- **Only one GSC property exists**: `https://pathwayproductions.in/` (URL-prefix,
  HTTPS, non-www). There is no Domain-level property, and no `www.` or `http://`
  variant is separately tracked. This means GSC itself cannot show whether any
  traffic is being split across a www/non-www or http/https variant — Search
  Console's HTTPS report (§4) only confirms the tracked property's own pages
  are served over HTTPS, not that other variants redirect correctly (that was
  checked in the earlier on-page audit instead).
- Access was read-only throughout: no indexing requests, sitemap submissions,
  property settings, or removals were made.

## 1. Search performance — totals by time window

| Window | Clicks | Impressions | Avg CTR | Avg position |
|---|---|---|---|---|
| Last 3 months | 285 | 12.9k | 2.2% | 13.6 |
| Last 6 months | 473 | 25.8k | 1.8% | 12.4 |
| Last 12 months | 879 | 45.5k | 1.9% | 13.3 |
| Last 16 months (max GSC retains) | 1.03k | 58.8k | 1.8% | 17.4 |

### Year-over-year (GSC's native 3-month YoY comparison — the only true like-for-like YoY view available; see limitation below)

| Metric | Last 3 months (Aug–Oct 2026) | Same period last year (Aug–Oct 2025) | Change |
|---|---|---|---|
| Clicks | 285 | 138 | **+106%** |
| Impressions | 12.9k | 11.1k | +16% |
| CTR | 2.2% | 1.2% | +1.0pp |
| Avg position | 13.6 | 30.3 | **improved ~16.7 positions** |

**This is the single strongest positive signal in the dataset.** Over the same
3-month window a year apart, average ranking position improved from ~30.3
(page 3–4 of results) to ~13.6 (page 2), CTR nearly doubled, and clicks more
than doubled — while impressions grew only modestly. The site isn't just being
discovered more; it is ranking meaningfully higher for the same search demand,
and that's converting into clicks. **Whatever SEO work has driven this
improvement over the past year must be preserved through the migration** — this
reframes the migration goal as "protect positive momentum," not just "prevent
decline from a flat baseline."

**Limitation**: GSC retains ~16 months of history for this property, so a true
12-month-vs-12-month YoY comparison isn't possible — only the native 3-month
YoY comparison tool could be run. The 6- and 12-month figures above are
point-in-time totals, not YoY-compared.

## 2. Query performance (16-month window, 891 distinct queries)

Totals: 1.03k clicks / 58.8k impressions / 1.8% CTR / avg position 17.4.

**Top queries by clicks** (full list in `GSC_QUERY_PAGE_MAPPING.csv`):

| Query | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|
| pathway productions | 309 | 1,305 | 23.7% | 2.9 |
| pathway production | 30 | 371 | 8.1% | 4.5 |
| video production company in chennai | 11 | 1,040 | 1.1% | 19.5 |
| ad film makers in chennai | 10 | 1,278 | 0.8% | 11.5 |
| ad film production houses in chennai | 9 | 270 | 3.3% | 4.5 |
| ad film agency in chennai | 7 | 397 | 1.8% | 7.6 |
| digital marketing agency chennai | 6 | 531 | 1.3% | 13.0 |
| film production companies in chennai | 3 | 692 | 0.4% | 11.4 |

**Branded vs non-branded**: branded queries ("pathway productions", "pathway
production", "pathways productions", "pathway productions llp", "pathway
chennai") account for ~351 of the ~1,030 total clicks (~34%) despite being a
handful of queries — confirming the earlier Semrush-based finding that organic
visibility is narrow and brand-dependent, now with real first-party numbers.

**High-impression, zero-click queries** (visibility without traffic — a CTR /
snippet opportunity, or in one case a brand-confusion artifact):

| Query | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|
| pathwayproductions.co.nz | 0 | 5,127 | 0% | 6.1 |
| explainer video company in chennai | 0 | 589 | 0% | 7.3 |
| production companies in chennai | 0 | 287 | 0% | 10.8 |
| corporate video makers chennai | 0 | 256 | 0% | 28.7 |
| corporate film makers in chennai | 0 | 201 | 0% | 17.6 |

`pathwayproductions.co.nz` is **not this client** — it's a different company
with a near-identical name ranking for its own brand term. No action is
possible (can't rank for someone else's brand); flagged only as a naming-
confusion data point, not a real opportunity.

**Queries ranking positions 4–10**: "pathway productions" (2.9), "pathway
production" (4.5), "ad film production houses in chennai" (4.5), "pathway
productions llp" (1.0), "pathway production website" (1.7) — mostly branded.
Non-branded service terms in this band are rare.

**Queries ranking positions 11–20**: "video production company in chennai"
(19.5), "ad film makers in chennai" (11.5), "film production companies in
chennai" (11.4), "video production agency in chennai" (10.8), "digital
marketing agency chennai" (13.0) — this is where most non-branded service
visibility actually sits, just below page 1.

### Research-category reconciliation (per brief §3 — these are research
categories the client asked about, not assumed existing rankings)

| Category | GSC query-presence finding |
|---|---|
| Corporate video production(s) | Present; ranks via variants, e.g. "corporate video production company in chennai" pos 17.7, 0 clicks |
| Corporate film makers | "corporate film makers in chennai" — 0 clicks / 201 impr / pos 17.6 (visibility, no clicks) |
| Ad film production | Present; ranks 4.5–29 across variants, real clicks on several |
| Film production companies in Chennai | 3 clicks / 692 impr / pos 11.4 — the single biggest-impression query with real but thin clicks |
| Explainer videos | "explainer video company" 1 click/77 impr/pos 41.1 (weak); "explainer video company in chennai" 0/589/pos 7.3 (good position, zero clicks — a CTR/snippet issue, not a ranking issue) |
| Animation | No animation query (2D/3D/whiteboard) earns meaningful clicks; positions mostly 15–95 — **not competitively ranking** |
| Music video production | **Not found** as a ranking query in this dataset at all |
| Video production services | "video production services in chennai" 2 clicks/176 impr/pos 10.0; exact match "video production services" 0/18/pos 36.9 |
| Digital marketing | Multiple variants, 2–6 clicks, positions 13–23 (weak-to-moderate) |
| SEO | "seo" appears with 0 clicks/pos 52 only — **no meaningful SEO-service ranking** |
| Google Ads | **Not found** as a ranking query at all |
| Amazon Advertising | **Not found** as a ranking query at all |
| Film marketing | "film marketing services" 0 clicks/pos 93.8 — **not ranking** |
| Production services in India | Not found as a distinct phrase; "production services" 0 clicks/pos 36 only |

Absence from a ranking position means the site currently earns no clicks /
negligible impressions for that term in Google's own data — it does not mean
the service is unimportant to the business, only that it isn't yet a search-
visibility asset. Treat this table as a content/SEO-investment opportunity map
for the new site, not a verdict on service priority.

## 3. Page performance (16-month window, 76 distinct landing pages)

**Homepage dominance**: the homepage alone captured 842 of 879 clicks (12-month
total shown in GSC's UI) — roughly 96% of all clicks when measured against the
12-month total, and ~82% of the full 16-month total. **Migration must get the
homepage URL, title, and ranking signals exactly right; everything else is
comparatively low-stakes traffic-wise.**

**Top pages by clicks**:

| Page | Clicks | Impressions | CTR | Avg position |
|---|---|---|---|---|
| / (homepage) | 842 | 37,303 | 2.3% | 13.8 |
| /contact/ | 38 | 5,345 | 0.7% | 6.3 |
| /video-production-services/ | 17 | 2,659 | 0.6% | 25.4 |
| /careers/ | 14 | 353 | 4.0% | 5.5 |
| /best-digital-marketing-agency-in-chennai/ (blog) | 12 | 403 | 3.0% | 18.9 |
| /the-role-of-editing-in-ad-films/ (blog) | 11 | 744 | 1.5% | 7.6 |
| /3d-animation-services/ | 10 | 1,467 | 0.7% | 34.0 |
| /feature-films/ | 10 | 1,381 | 0.7% | 7.2 |
| /team/ | 10 | 600 | 1.7% | 4.4 |
| /2d-animation-services/ | 9 | 1,410 | 0.6% | 14.7 |
| /explainer-video-company/ | 7 | 3,230 | 0.2% | 31.7 |

**Confirmed via GSC**: `/video-production-services/` — flagged by the earlier
Semrush-based audit as a "noindexed orphan page" — is confirmed in Google's own
first-party data to be **actively live, indexed, and earning real traffic**:
17 clicks / 2,659 impressions / avg position 25.4 over 16 months. URL
Inspection confirms it is currently indexed, indexing is allowed, and its
canonical is self-referencing with no conflict (see §4 for the full
reconciliation — this corrects, not just confirms, the earlier finding).

**Blog posts earning real clicks**: at least 11 individual blog-post URLs
appear among the top ~25 pages by clicks (including
`best-digital-marketing-agency-in-chennai`, `the-role-of-editing-in-ad-films`,
`video-production-agency-in-chennai-ai-vide`,
`role-and-importance-of-content-in-digital-marketing`,
`movie-video-production-digital-marketing`,
`how-we-transformed-our-video-production-workflow-with-ai`,
`ad-film-vs-corporate-video`,
`04-in-house-marketing-team-vs-external-advertising-agencies`,
`pathway-social-media-case-study-discussion-popular-university-in-bangalore-data-driven-approach`,
`in-house-teams-vs-a-video-production-agency`,
`ai-video-production-original-music-guide`). This is **GSC-confirmed**, not
just a Rank Math content-score inference: the blog is earning real search
traffic, strengthening `SEO_PRESERVATION_CHECKLIST.md` item #1 (the 41
blog-post migration risk) from "estimated" to "confirmed with first-party
click data."

**Low-CTR, high-impression page**: `/digital-marketing-solutions/` has 2,491
impressions but only 1 click (0% CTR) over 16 months — consistent with the
earlier-found H1/title mismatch ("Our Work" vs. the page's actual topic) as a
plausible explanation.

## 4. Indexing and technical SEO

**Page indexing totals**: 109 known pages — 67 indexed, 42 not indexed (6 reasons).

| Reason | Count | Verdict |
|---|---|---|
| Page with redirect | 16 | Mostly benign (WP date archives, Elementor template parts, category feeds, trailing-slash canonicalization) — see detail below |
| Excluded by 'noindex' tag | 3 | Benign — author-archive pages only |
| Not found (404) | 2 | One benign (old asset path), one a leftover `/test/corporate-videos/` URL |
| Blocked due to other 4xx issue | 1 | `/wp-admin/admin-ajax.php` — **confirms the broken homepage `og:image` bug** from the earlier on-page audit with Google's own crawl data |
| Crawled – currently not indexed | 12 | Mixed — includes 2 blog posts with real historical clicks that have since lost indexation (see finding below) |
| Discovered – currently not indexed | 8 | Mostly never-crawled blog posts + a confirmed Elementor template-part URL leak pattern |

**Finding — indexation regression on real content**: two blog posts that
earned real clicks/impressions in the 16-month Performance data are *currently*
sitting in "Crawled – currently not indexed":
`pathway-social-media-case-study-discussion-popular-university-in-bangalore-data-driven-approach`
(2 clicks/72 impressions historically) and
`how-we-transformed-our-video-production-workflow-with-ai` (3 clicks/347
impressions historically). This means these pages **were** indexed and earning
clicks at some point in the window but have since been demoted by Google. This
sharpens the blog-migration risk (`SEO_PRESERVATION_CHECKLIST.md` #1): it's not
just that 41 posts need a destination — some are **actively losing search
visibility on the current site right now**, which will only get harder to
recover after a platform migration if nothing is done.

**Finding — Elementor template-part URL leak**: `/elementor-hf/main-footer/`
(redirects), `/elementor-hf/copywrite-footer/`, and `/elementor-hf/team/`
(both discovered-not-indexed) show the same pattern twice: page-builder
header/footer template parts are being exposed as independently
crawlable/discoverable URLs. This is a concrete, fixable technical-SEO item
for the new build, regardless of platform: **ensure reusable template/global-
widget sections are never served as or linked to standalone public URLs or
included in the XML sitemap.**

**Finding — test content exposure**: `/test/ad-films` (redirects) and
`/test/corporate-videos/` (404) confirm test/staging content has been
crawlable in production at least twice historically. Worth a quick check that
no `/test/*` paths exist on the new site before launch.

**Reconciling the `/video-production-services/` noindex discrepancy**: the
earlier Semrush-based audit's finding that this page is tagged noindex in
WordPress is **not supported by live GSC data**. A direct URL Inspection
confirms: *Page is indexed*, *Indexing allowed: Yes*, *Crawl allowed: Yes*,
*Page fetch: Successful*, and the user-declared canonical (self) matches
Google's selected canonical with no conflict. The "Excluded by noindex tag"
category contains only 3 author-archive URLs — **not** this page. What the GSC
data *does* confirm is the orphan-from-sitemap issue: URL Inspection shows "No
referring sitemaps detected" from the submitted `/sitemap_index.xml` (its only
discovered referring page is WordPress's own auto-generated
`/page-sitemap.xml`, which was never submitted to/tracked by Search Console).
**Corrected status**: this is a live, indexed, earning page that is simply
excluded from the site's *submitted* sitemap — not a noindex issue. The
migration action is unchanged and, if anything, more urgent: this page must be
included in the new site's sitemap and navigation, since it is demonstrably
earning real clicks today; losing it would be a measurable, not theoretical,
traffic loss.

**Core Web Vitals** (Experience report, source: Chrome UX Report, last updated
29/10/2026):
- **Mobile: 35 "Poor" URLs, 0 "Needs improvement", 0 "Good."** Every measured
  mobile URL currently fails Core Web Vitals thresholds. This is a real,
  GSC/CrUX-confirmed problem on the current live site (not a third-party
  PageSpeed estimate), and a clear floor the new 29-page build should
  improve on.
- **Desktop: insufficient CrUX traffic data** to report a verdict.
- Recommendation: re-benchmark Core Web Vitals on the new site at launch;
  "0 Good URLs" leaves no ambiguity about whether the new build needs to do
  better.

**HTTPS**: clean. 0 non-HTTPS URLs, 34 HTTPS URLs, no critical issues reported.
No migration risk here beyond maintaining full HTTPS on the new site.

**Enhancements (structured data)**: only **Breadcrumbs** is tracked (33 valid
items, 0 invalid — healthy). No FAQ, Product, Review, Event, Sitelinks-search-
box, or Video rich-result enhancement types are reported at all, despite
confirmed BlogPosting/Article schema and 56 embedded YouTube videos sitewide
(see §6 for the video-specific finding, which explains this directly).

## 5. Links report

**Note on scope, per the brief**: Search Console's Links report is **not a
complete backlink audit**. It reflects only what Google has crawled and
chosen to report, is not real-time, shows no DoFollow/NoFollow or authority
scoring, and omits many links a third-party crawler (Semrush/Ahrefs) would
surface. Treat the figures below as a confirmatory cross-check against
`OFF_PAGE_SEO_REPORT.md`'s Semrush-based backlink profile, not a replacement
for it.

**External links**: 463 total.
- Top linked pages: `/` (homepage) 412, `/careers/` 33, `/feature-films/` 10,
  `/contact/` 2, `/2d-animation-services/` 1.
- Top linking sites: ssmhome.in (43), industrial-transformers.com (33),
  naukri.com (33), gyroitsolutions.com (30), imdb.com (20).
- Top linking text: "pathway productions", "developed by pathway productions"
  (likely web/dev-credit links from client sites Pathway built), (empty),
  "navigate to website pathwayproductions in", "official site".

**Internal links**: 1,472 total. Nearly all primary service pages share an
identical internal-link count (68), indicating they're reached primarily
through a global nav/footer rather than contextual in-content links — useful
context for the new site's information architecture.

**Findings worth preserving/redirecting carefully**:
1. **`/careers/` carries real, identifiable external link equity** (33 links,
   traced to naukri.com, a job portal). Concrete reason to 301-redirect any
   retired careers/recruitment URLs (e.g. `/2d-animator-recruitment/`) to the
   new `/careers/` page rather than letting them 404, and to ensure the new
   site's `/careers/` keeps the same URL or gets a proper redirect.
2. **imdb.com links to the site** (20 links) — a credible industry-authority
   backlink, plausibly to a specific project/credit page. Worth a manual check
   (not performed in this read-only audit) of exactly which URL(s) IMDb links
   to, so that destination is explicitly preserved/redirected in the migration
   map.
3. Homepage concentration (412/463 = ~89% of external link equity) matches
   the Performance data's homepage dominance — reinforces that preserving the
   homepage URL and signals is the top backlink-preservation priority too.

## 6. Search appearance and rich results

**Search Appearance breakdown** (Performance report): the **only** category
reported across the 16-month window is "Translated results" (1 click/304
impressions/0.3% CTR/pos 8.0). No Video, FAQ, Sitelinks, or Breadcrumb-enhanced
result categories appear at all.

**Video indexing** (Indexing > Videos, last updated 29/10/2026): **0 videos
indexed**, 20 discovered but not indexed, for 2 reasons:
- "Video isn't on a watch page" — 19 videos
- "Video not processed yet" — 1 video

**Sitemap** (`/sitemap_index.xml`, submitted 1 Feb 2024, status Success, 78
discovered pages): **0 discovered videos** — the submitted XML sitemap
contains no `<video:video>` entries at all, which is the root cause behind the
video-indexing finding above. Google found the ~20 videos purely by crawling
page content, not via any structured sitemap/schema signal.

**What this confirms**: despite 56 distinct embedded YouTube videos across the
live site (per `YOUTUBE_VIDEO_INVENTORY.csv`) and confirmed BlogPosting
schema, Google does not consider any of them to be a page's primary content —
they're being read as incidental embeds, not as indexable video results. This
sharpens `NEW_WEBSITE_SEO_IMPLEMENTATION.md`'s VideoObject-schema
recommendation from a "nice to have" into **a confirmed, measurable current
gap**: the new site should either (a) give key videos their own dedicated
page/section clearly structured around that video, or (b) add explicit
VideoObject JSON-LD (thumbnail, duration, upload date) identifying the video
as central content, and (c) add `<video:video>` entries to the new sitemap.
None of this is optional polish — it's the specific, named reason Google is
currently not treating any of the 56 embedded videos as indexable.

## Cross-reference index

| This report's finding | Confirms/corrects/strengthens |
|---|---|
| §3 `/video-production-services/` real clicks + §4 noindex reconciliation | `OFF_PAGE_SEO_REPORT.md` finding #2 — upgrades from Semrush estimate to GSC-confirmed, and corrects the "noindex" claim to "orphan from sitemap" |
| §3 blog posts earning real clicks + §4 indexation-regression finding | `SEO_PRESERVATION_CHECKLIST.md` item #1 (41 blog posts) — strengthens with first-party click data and adds a new, more urgent angle (active de-indexing) |
| §4 `/wp-admin/admin-ajax.php` blocked-4xx | `TECHNICAL_SEO_AUDIT.md` broken homepage `og:image` finding — GSC-confirmed, not just an on-page suspicion |
| §4 Core Web Vitals (0 good mobile URLs) | New finding — no prior pass had CWV data at all |
| §5 Links report (`/careers/`, imdb.com) | New findings not previously surfaced by the Semrush pass |
| §6 Video indexing gap | `NEW_WEBSITE_SEO_IMPLEMENTATION.md` VideoObject schema recommendation — upgrades from a general best-practice suggestion to a confirmed current gap with a named root cause |
| §1 YoY improvement | New finding — establishes that the site has positive momentum to protect, not just a flat baseline to avoid losing |

This report supersedes the "GSC data not obtainable" note in
`OFF_PAGE_SEO_REPORT.md` §1 for pathwayproductions.in specifically. The
Semrush-based findings in that report remain valid as independent third-party
cross-checks and should be read alongside this one, not discarded.
