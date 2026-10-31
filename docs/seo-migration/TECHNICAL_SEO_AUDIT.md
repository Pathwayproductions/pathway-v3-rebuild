# Technical SEO Audit — pathwayproductions.in (existing WordPress site)

Collected 2026-10-31. Read-only — nothing on the live site was changed.
Collection method: logged into `/wp-admin/` as an Editor-level account
("Karthik Ravi" / Pathway Productions), Rank Math's own SEO Analyzer,
public sitemap/robots.txt, and live-page extraction via browser automation
(no WAF/CAPTCHA blocks hit). Semrush (connected in this project) supplied
independent off-page data where Porter/GA4/GSC access was blocked (see
`OFF_PAGE_SEO_REPORT.md`).

## 1. Platform & plugin stack

| Component | Finding | Source | Confidence |
|---|---|---|---|
| CMS | WordPress 7.1.4 | wp-admin news widget | confirmed |
| Page builder | Elementor + Premium Addons for Elementor | wp-admin menu + profile.php | confirmed |
| SEO plugin | **Rank Math SEO** (not Yoast — corrected after initial sitemap-format guess) | wp-admin menu, profile.php field, sitemap XML structure | confirmed |
| Caching | LiteSpeed Cache | Rank Math "Visible Plugins" security check | confirmed |
| CDN / image optimization | Jetpack Photon (`i0.wp.com` image proxy) | live page source | confirmed |
| Analytics/marketing plugins visible | Mystickyelements, Slide Anything, WordPress Popup | Rank Math "Visible Plugins" check | confirmed |
| Other active plugins (menu-confirmed) | Jetpack (My Jetpack, Forms), WP WhatsApp Chat (Social Chat) | wp-admin sidebar | confirmed |
| Full plugin list / versions | **NOT ACCESSIBLE** — logged-in account is Editor-level, not Administrator; `/wp-admin/plugins.php` returns "Sorry, you are not allowed to access this page" | wp-admin | inaccessible — record as such per audit instructions |
| Theme name | Not publicly visible (Rank Math confirms "Theme Visibility: not publicly visible") and not accessible via this account | — | inaccessible |
| Redirect plugin | No dedicated redirect plugin found in visible menus; Rank Math itself includes a redirection module but its settings page was not reachable with this account's permissions | — | inaccessible — flag for admin-level follow-up |

## 2. Crawling & indexing

- **robots.txt**: `Disallow: /wp-admin/`, `Allow: /wp-admin/admin-ajax.php`, declares `Sitemap: https://pathwayproductions.in/sitemap_index.xml`. No other disallow rules.
- **Sitemap index**: 4 sub-sitemaps — `post-sitemap.xml` (42 URLs incl. blog index), `page-sitemap.xml` (28 URLs), `elementor-hf-sitemap.xml` (header/footer templates, not content), `category-sitemap.xml` (6 URLs).
- **HTTP/HTTPS & WWW**: Rank Math confirms "Both www and non-www versions of your URL are redirected to the same site" and the site serves HTTPS throughout.
- **Canonical tags**: present and self-referencing on every page checked (29/29 sampled pages had a correct self-canonical), **except** the legacy alias `/creative-productions/explainer-videos/`, whose canonical correctly points to `/explainer-video-company/` — meaning that legacy URL is consolidated via canonical tag only, **not an HTTP 301**. See finding #1 below.
- **Meta robots**: `follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large` on every published/public page checked. One confirmed exception: `/video-production-services/` returns `follow, noindex` — see finding #2.
- **Orphan/noindex-but-reachable page**: `/video-production-services/` is excluded from the sitemap and marked `noindex` in Rank Math, yet is publicly reachable by direct URL, has real inbound backlinks, and still appears in Google's organic index per Semrush (position 12 for a 170-vol/mo keyword). This is the single highest-risk individual URL found in this audit — see `SEO_MIGRATION_MAP.csv`.
- **Duplicate/legacy URL still live**: `/creative-productions/explainer-videos/` (a pre-redesign URL structure) resolves with HTTP 200 and serves the same content as `/explainer-video-company/`, relying on its canonical tag for consolidation. It carries 328 backlinks from 2 referring domains per Semrush — a canonical tag will not survive a platform migration; a hard 301 must be added.
- **Other legacy alias URLs found with real backlinks, not confirmed live this pass**: `www.pathwayproductions.in/creative-productions/corporate-videos/` (8 backlinks), `www.pathwayproductions.in/corporate-video-services/` (7 backlinks — spot-checked this pass; currently resolves to the Video Production Services page content, which is likely a soft-404/catch-all rather than its own distinct page), `www.pathwayproductions.in/creative-productions/ad-films/` (6 backlinks). Recommend a full HTTP-status sweep of all Semrush-reported indexed URLs before launch.
- **404s / broken internal links / orphan pages**: not systematically crawled this pass (no full-site crawler tool was available in this session — Semrush's own Site Audit tool, connected in this project, can do this and is recommended as a follow-up, see Data Gaps).
- **Pagination / search-result indexing / media-attachment indexing**: not individually inspected this pass — flagged as pending.

## 3. Website performance

Source: Rank Math's built-in SEO Analyzer (homepage only — this is the only in-session performance tool available; no PageSpeed Insights / Lighthouse access this pass).

| Metric | Finding | Measured or recommendation? |
|---|---|---|
| Page size | 159 KB HTML document — "over the average of 33 KB and our recommendation of 50 KB" | measured |
| Response time | Under 0.2 seconds | measured |
| Image headers / expires | Server uses expires headers for images | measured |
| CSS minification | Some CSS files not minified (flagged: `fonts.bunny.net` CSS) | measured issue |
| JS minification | All JS files appear minified | measured |
| Homepage request count | 3 total requests (1 image, 1 JS, 1 CSS) on the measured page | measured |
| Core Web Vitals (LCP / INP / CLS) | **NOT MEASURED** — no PageSpeed Insights/CrUX tool was available in this session | pending — needs separate pass |
| Mobile performance | Not independently measured this pass | pending |
| Lazy loading | Confirmed in use site-wide (`data-lazyloaded` attributes observed throughout page source) | measured |

## 4. Structured data (schema.org)

Rank Math confirms: "Schema.org data has been found on your homepage" and the Posts list shows every blog post schema-typed as **Article (BlogPosting)**; every page schema-typed as **Article**. Full JSON-LD property-level extraction was not performed this pass (would require per-page source inspection) — flagged as pending. Recommend preserving `BlogPosting` schema for any migrated blog content and adding `LocalBusiness`/`Organization`/`VideoObject` schema explicitly in the new build if not already planned.

## 5. Tracking & analytics

- **Google Search Console**: Rank Math confirms "Google Search Console has been linked" on the WordPress side. **However**, the Porter Metrics connector used for this audit has GSC access for two *other* properties (`wowtam.com`, `gardencity.university` — different brands under the same Google account) but **no GSC property for pathwayproductions.in itself is connected to this reporting tool**. See `OFF_PAGE_SEO_REPORT.md`.
- **GA4**: A "Pathway Website" GA4 property exists and is connected via Porter, but querying it was blocked this pass by a Porter plan limit (3-connected-account cap already reached by other client accounts, and even within-cap history is capped at 30 days on the current plan). See `OFF_PAGE_SEO_REPORT.md`.
- **GTM container**: `GTM-NPQF6K8` (confirmed in prior audit pass, `docs/LIVE_SITE_SEO_AND_LINKS_AUDIT.md`).
- **Meta Pixel / Google Ads conversion tracking**: not independently re-verified this pass; not fired or test-triggered per audit safety rules.
- **Cookie consent**: no dedicated consent-management plugin identified in the visible plugin list.

## 6. On-page SEO findings (issues requiring attention)

1. **Duplicate meta description — Terms & Conditions / Privacy Policy.** `/terms-conditions/` carries the *exact* meta description written for Privacy Policy ("Learn how Pathway Productions safeguards your privacy...") — confirmed on both pages. Rank Math shows `/terms-conditions/` with a focus keyword of "privacy policy" (wrong) and an SEO score of **23/100**, the lowest of any published page. **Do not carry this metadata forward** — write fresh, correct copy for the new Terms page.
2. **Missing H1 tags** on 3 published pages: `/careers/`, `/digital-marketing-solutions/seo/`. (A third page, `/advertising-agency/`, has no Rank Math focus keyword set either.)
3. **H1/content mismatch**: `/digital-marketing-solutions/` (the hub page) has an H1 of "Our Work" instead of a digital-marketing-relevant heading.
4. **Missing image alt text**: Rank Math flags 23 images without `alt` attributes sampled from the homepage alone — likely a site-wide pattern given it's the top-trafficked page; a full alt-text audit of all page/post images is recommended before migration so the new build inherits correct alt text rather than copying the gap forward.
5. **Missing/incomplete Open Graph tags**: Rank Math flags "some Opengraph meta tags are missing" site-wide; the homepage's `og:image` was observed pointing to `/wp-admin/admin-ajax.php` rather than a real image URL — likely a broken/misconfigured dynamic OG-image generator. Needs a real static fallback image in the new build.
6. **Low/no focus keyword set** on several published pages: `/advertising-agency/`, `/2d-animator-recruitment/` (score 10/100), plus 2 blog posts ("Doing SEO Is Important," "How To Grow Your Brand Image").
7. **Rank Math SEO Analyzer overall score**: 79/100 (23 passed / 6 failed of 29 checks) — see items above for the 6 failures.

## 7. Data gaps / what this audit could not verify

- Full plugin inventory, versions, and theme name (blocked by account permissions — see §1).
- Redirect-plugin configuration / existing redirect rules (blocked by account permissions).
- Full-site 404/broken-link/orphan-page crawl (no crawler tool used this pass; recommend running Semrush Site Audit, already connected to this project).
- Core Web Vitals / PageSpeed Insights (LCP, INP, CLS) — not measured.
- Full JSON-LD schema property extraction per page.
- Full on-page metadata (meta description, H1, body copy, image alt text, internal/external link lists) for all 41 individual blog posts — only SEO score + focus keyword were pulled in bulk from wp-admin; a dedicated per-post pass is needed if full content preservation is required.
- HTTP-status verification sweep of every URL Semrush reports as historically indexed (several legacy alias paths were spot-checked and flagged, but not exhaustively).
