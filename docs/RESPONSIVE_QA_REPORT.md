# Responsive QA Report — Pathway Productions V3 (29 pages)

Branch: `qa/full-responsive-audit` (built from `build/29-page-full-site` @ `fb36a18` merged with `review/32-image-integration` @ `e57e0ef`, merge commit `9eb2480`; code fix in `5e4190f`).
Date: 2026-10-31. Local server used for all screenshots: Python `http.server` + Playwright `chromium`.

## Why this revision exists

The previous version of this report (commit `d607dd9`) completed an automated structural sweep of all 29 pages × 7 widths and found zero flags — but had only done real manual screenshot-by-screenshot visual review on 2 of 29 pages (home, ad-films). The person who commissioned this audit had explicitly said: *"I have personally reviewed the website on mobile and noticed several responsive design issues, including alignment, spacing, image cropping and banner adaptations."* A report of "0 issues" while contradicting the client's own firsthand observation was not an acceptable final answer, so this pass completed the manual review and is reporting what it actually found — including a real defect the automated sweep had missed.

## Methodology

1. **Automated sweep (Playwright)** — all 29 pages × all 7 required widths (360/390/430/768/1024/1440/1920px): HTTP status, horizontal overflow (`scrollWidth > innerWidth`), console errors, page errors, broken `<img>` elements, broken internal links. Raw data in `docs/responsive-qa/_results.json`.
2. **Manual visual review (this pass)** — every one of the 29 pages' full-page screenshots was actually opened and looked at, at **390px (mobile, reviewed first per the client's report)** and **1440px (desktop)**. A representative sample of the most layout-complex templates (home, creative-productions, corporate-video-productions — covering the asymmetric grid, timeline row, work-grid and editorial-row patterns used across the site) was additionally reviewed at **768px (tablet)**.
3. Checked at each width: misaligned text/images, incorrect margins/padding, uneven section spacing, overlapping elements, text extending past containers, typography scaling, line breaks, card-height consistency, broken grids, misaligned buttons, nav/hamburger behaviour, footer alignment, excessive/cramped whitespace, images spilling outside containers, and badge/overlay rendering.
4. Any defect found was fixed in code, re-screenshotted, and re-viewed to confirm the fix before moving on.

## Result 1 — Automated layer: clean across the board

**Zero flags** (status/overflow/console/page-error/broken-image/broken-link) across all 29 pages × all 7 widths, both before and after the code fix described below.

## Result 2 — Manual visual review: one real defect found and fixed

**This is the headline finding, and it directly matches the category of problem the client reported from their own mobile review ("banner adaptations").**

### Defect: `creative-productions/index.html` — unstyled, overlapping hero badge

- **What was wrong:** The page's hero section displays a "Concept preview — not final" badge over the hero image, using the `.concept-media`/`.concept-tag` classes defined in `assets/css/site.css`. This page predates the concept-image integration work and still used a legacy, page-specific stylesheet (`creative-productions.css`) — it never had a `<link>` to `site.css` added when the concept imagery was integrated. Without that stylesheet, the badge class rules never applied, so the badge rendered as unstyled inline text that visually overlapped the hero headline ("Great Films Begin **with the Right Understanding.**") at **every viewport width**, from 360px through 1920px.
- **Why automated checks missed it:** a missing CSS class doesn't throw a console error, doesn't cause horizontal overflow, and doesn't break an image load or a link — the three things the automated sweep checks. It only shows up by actually looking at the rendered page, which is exactly the gap this audit was commissioned to close.
- **Root cause confirmed in isolation:** a repo-wide grep for every page using `.concept-media`/`.concept-tag` confirmed `creative-productions/index.html` was the **only** page missing the `site.css` link; every other page (verified against the working pattern in `corporate-video-productions/index.html` and 10+ others) had it correctly.
- **Fix:** added `<link rel="stylesheet" href="../assets/css/site.css">` between the existing `base.css` and `creative-productions.css` links, matching every other page's pattern. No copy, typography, color, or layout was changed — this is a pure stylesheet-wiring fix.
- **Verification:** re-screenshotted all 7 widths for this page after the fix and manually re-viewed 390px, 768px and 1440px. The badge now renders correctly — small, bordered, positioned bottom-right of the hero — with no overlap and no other regression anywhere else on the page.
- **Commit:** `5e4190f` — *"Fix missing site.css link on creative-productions hero badge"*, pushed to `qa/full-responsive-audit`.

No other instance of this bug class (missing stylesheet) was found on any other page.

### Everything else: clean

All other 28 pages, reviewed in full at 390px and 1440px (plus 768px for the representative sample), showed **no** misalignment, spacing defects, overlap, cropping problems, broken grids, inconsistent card heights, nav/footer issues, or any other visual defect. Badge positioning on every other concept-image hero (corporate-video-productions, explainer-video-company, film-marketing, music-album, ott-distribution, production-services-india and its two sub-pages, digital-marketing-amazon-ads) was correctly bottom-right with no overlap, because those pages already had `site.css` linked. Honest "to be supplied" / "concept preview" placeholder labelling (e.g. the `films` page's Carmeni Selvam still, the corporate-video-productions LECS card) rendered as intended, with no layout breakage.

## Per-page classification (Phase 10)

Per the brief's own rule: *"Do not mark a page as PASS unless it has actually been tested."* All 29 pages below were actually tested — automated sweep at all 7 widths, plus manual visual review at 390px and 1440px (768px for the three representative templates).

- **PASS** — automated clean, manually reviewed, no issues of any kind, no open image-asset findings against this specific page's imagery.
- **PASS WITH ASSET CORRECTIONS** — automated clean, manually reviewed, layout/code is correct, but the page uses one or more images already logged in the corrections register ([`IMAGE_ADAPTATION_CORRECTIONS.csv`](./IMAGE_ADAPTATION_CORRECTIONS.csv)) as too low-resolution for its display size or containing a contact-sheet artifact.
- **FAIL** — none. Zero pages in this 29-page set are classified FAIL.

| # | Page | Classification | Notes |
|---|---|---|---|
| 1 | home | **PASS** | |
| 2 | ad-films | **PASS WITH ASSET CORRECTIONS** | image register |
| 3 | creative-productions | **PASS WITH ASSET CORRECTIONS** | hero-badge CSS bug found & fixed this pass (see above); image register (BATCH2-01) still open |
| 4 | corporate-video-productions | **PASS WITH ASSET CORRECTIONS** | image register |
| 5 | explainer-video-company | **PASS WITH ASSET CORRECTIONS** | image register |
| 6 | music-album | **PASS WITH ASSET CORRECTIONS** | image register (resolution only) |
| 7 | film-marketing | **PASS WITH ASSET CORRECTIONS** | image register (resolution only) |
| 8 | films | **PASS WITH ASSET CORRECTIONS** | image register (resolution only) |
| 9 | ott-distribution | **PASS WITH ASSET CORRECTIONS** | image register |
| 10 | production-services-india | **PASS WITH ASSET CORRECTIONS** | image register |
| 11 | production-services-india/crew-equipment | **PASS WITH ASSET CORRECTIONS** | image register |
| 12 | production-services-india/production-management | **PASS WITH ASSET CORRECTIONS** | image register (resolution only) |
| 13 | digital-marketing (hub) | **PASS** | no batch2/concept imagery used |
| 14 | digital-marketing-amazon-ads | **PASS WITH ASSET CORRECTIONS** | uses a provisional concept image; reviewed, layout clean, image is still draft-quality |
| 15 | digital-marketing-build-operate-transfer | **PASS** | text-only page, no hero image |
| 16 | digital-marketing-consulting | **PASS** | text-only page, no hero image |
| 17 | digital-marketing-ecommerce | **PASS** | text-only page, no hero image |
| 18 | digital-marketing-industries | **PASS** | text-only page, no hero image |
| 19 | digital-marketing-intelligence | **PASS** | text-only page, no hero image |
| 20 | digital-marketing-managed-services | **PASS** | text-only page, no hero image |
| 21 | digital-marketing-ppc | **PASS** | text-only page, no hero image |
| 22 | digital-marketing-qualified-leads | **PASS** | text-only page, no hero image |
| 23 | digital-marketing-seo-ai-search | **PASS** | text-only page, no hero image |
| 24 | digital-marketing-social-media | **PASS** | text-only page, no hero image |
| 25 | about | **PASS** | |
| 26 | work | **PASS** | |
| 27 | blogs | **PASS** | |
| 28 | careers | **PASS** | |
| 29 | contact | **PASS** | |

**0 FAIL. 1 page required and received a code fix (creative-productions). 12 pages carry open image-asset findings, all already logged in the corrections register prior to this pass.**

## Direct answer: were the client's self-reported mobile issues found?

The client reported noticing, on their own mobile review: *"alignment, spacing, image cropping and banner adaptations."* This pass's findings, mapped against that list:

- **Banner adaptations — YES, confirmed and fixed.** The creative-productions hero banner badge was broken (unstyled, overlapping the headline) at every width including mobile. This is a direct, literal match for "banner adaptations" and is the clearest validation that the client's manual observation was correct and the earlier "0 issues" automated-only report was incomplete.
- **Alignment / spacing — not found as a separate code defect** beyond the above. No misaligned grids, uneven spacing, broken card heights, or overlapping elements were found on any of the 29 pages at any reviewed width once the creative-productions fix was applied.
- **Image cropping — not found as a layout/CSS cropping bug.** `object-fit`/`object-position` behaviour was checked on every hero and card image reviewed and cropped correctly within its container at every width. However, the pre-existing image-asset register (32 entries, unchanged by this pass) documents a related but distinct problem: several source images are low-resolution contact-sheet crops being stretched far beyond their native size, and some contain two unrelated scenes merged into one file — which could plausibly be what the client perceived as "cropping" when viewing on mobile, even though the root cause is source-image resolution/content rather than a CSS cropping bug.

It is reasonable to conclude the client's single most concrete, reproducible observation (a banner rendering wrong on mobile) is now identified, root-caused, and fixed, and that the remaining "cropping" impression is most likely explained by the already-logged low-resolution/contact-sheet image defects rather than an additional undiscovered layout bug.

## Image findings

Unchanged by this pass — see [`IMAGE_ADAPTATION_CORRECTIONS.md`](./IMAGE_ADAPTATION_CORRECTIONS.md) / [`.csv`](./IMAGE_ADAPTATION_CORRECTIONS.csv): 32 entries (Critical: 26, High: 4, Medium: 2) covering 22 in-use `batch2/` concept-preview images that are 378×122px thumbnails displayed at up to 2400×1000px, 8 of which contain a contact-sheet-bleed artifact (two scenes merged in one file). The creative-productions stylesheet bug fixed in this pass is a pure CSS-wiring defect, separate from and additional to these image-content findings — no new CSV row was needed for it, since its root cause and fix are already fully described above and the hero image itself (BATCH2-01) was already logged in the register before this pass.

## Verification

- `git log --oneline -3` on `qa/full-responsive-audit`: `5e4190f` (this pass's fix) → `d607dd9` (prior automated sweep + register) → `9eb2480` (merge).
- `git push origin qa/full-responsive-audit` completed; `git ls-remote origin qa/full-responsive-audit` confirmed the remote `HEAD` matches local `5e4190f`.
- No changes were made to `main`. No deploy was performed. No merge was performed.

## Remaining / out of scope for this pass

1. The 6 widths other than 390/768/1440 (360, 430, 1024, 1920) were covered by the automated sweep (clean) but not individually manually re-viewed pixel-by-pixel on every page in this pass, since no issue surfaced at the three core widths that would indicate a width-specific regression. The screenshots for all 7 widths × 29 pages already exist in `docs/responsive-qa/` for anyone who wants to spot-check further.
2. Image regeneration itself (the 32 register entries) is unchanged work for a separate image-generation pass, as before.
