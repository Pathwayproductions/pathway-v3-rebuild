# Claude handoff — Pathway V3 website (2026-11-01)

## Scope and source of truth
- Repository: https://github.com/Pathwayproductions/pathway-v3-rebuild
- Current working branch: `design/page-specific-hero-banners`. Continue on a NEW branch based on this branch; do not start from `main`.
- Review URL: https://pathway-v3-review.netlify.app/
- Live site: https://pathwayproductions.in/ — DO NOT deploy or modify the live site.
- This is a static multi-page HTML/CSS/JS website. Preserve the existing visual design and approved homepage composition.

## Design decisions to preserve
- Minimal, cinematic creative-production imagery; contemporary professional marketing imagery; natural lighting and skin tones.
- Pathway blue, light grey, charcoal. Avoid indiscriminate blue filters.
- Left-aligned headlines and supporting copy. Homepage headline is left-aligned and vertically centered; film-page inner heroes are left-aligned and bottom-weighted; text-led inner pages have left-aligned hero text.
- Preserve type hierarchy, spacing, content grid, CTA hierarchy, responsive navigation, and existing video carousel behavior.
- Page-specific images should emphasize the right side to protect left-side text readability. Mobile crop and contrast require actual visual QA.
- Do not add baked-in text/labels to photography.

## Work recently committed
- Responsive image-backed inner-page hero CSS in `assets/css/site.css`.
- Temporary hero activation for light inner pages in `assets/js/main.js`; this currently reuses existing page imagery or a shared temporary concept. This is NOT a completed 29-image implementation.
- Added 24 spreadsheet-curated YouTube video placements:
  - Corporate Videos: 5
  - Ad Films: 7
  - Explainer Videos: 5
  - Feature Films: 2
  - Creative Productions / 2D Animation: 5
- These were added as new carousel sections and may duplicate earlier carousels. Resolve duplicates, do not remove verified portfolio videos without reconciliation.
- Spreadsheet source supplied by user: `Live_Site_YouTube_Videos.xlsx`, first worksheet, “Video Link to be used in Site”. If file is not accessible to Claude, request it from the user. Do not silently substitute old video IDs or assume old title-to-ID mappings are correct.
- GCU spreadsheet row had no usable URL and was not added.

## Current known gaps
1. Audit all 29 pages, routes and navigation against `docs/29_PAGE_DESIGN_MAPPING.md`; check actual implemented slugs instead of guessing.
2. Finish distinct, relevant, optimized hero assets for all 29 pages. Remove temporary shared-image fallback only when replacement imagery is available.
3. Reconcile spreadsheet videos with older carousel content and ensure titles/YouTube IDs are correct. Verify links and thumbnails.
4. Audit homepage and all inner-page hero headline/paragraph/CTA alignment, image focal points, desktop and mobile crop. The prior alignment assessment was source-code-level only, not a full browser visual audit.
5. Audit responsive behavior, broken images, duplicate content, accessibility, and performance. Preserve the approved visual structure.
6. SEO migration: inspect `docs/LIVE_SITE_SEO_AND_LINKS_AUDIT.md`, resolve legacy redirects, and ensure preview noindex is not accidentally applied to live production.
7. Permanent Netlify review workflow: the existing `pathway-v3-review` site is a MANUAL DROP deployment (`manual_deploy=true`, `deploy_source=drop`, published 2026-10-31). Connect the existing Netlify project to GitHub continuous deployment using the designated review branch, so every push refreshes the SAME URL. Do not create a new Netlify site unless explicitly approved.
8. Verify actual deployed commit before claiming the review site is updated. Never claim live deployment merely because GitHub commits exist.

## Recommended workflow
1. Read `docs/DESIGN_SYSTEM.md`, `docs/29_PAGE_DESIGN_MAPPING.md`, `docs/IMAGE_ART_DIRECTION.md`, `docs/LIVE_SITE_SEO_AND_LINKS_AUDIT.md`, and the current code.
2. Create a Claude working branch off `design/page-specific-hero-banners`.
3. Fix high-confidence bugs, video duplicates and mobile issues in small reviewable commits.
4. Produce a page-by-page QA report with screenshots at desktop, tablet and mobile widths; request approval before changing approved layouts.
5. Establish Git-based automatic deploys for the existing review Netlify site, then verify that the latest commit appears at the stable preview URL.
6. Keep `main` and the live website unchanged until explicit approval.

## Guardrails
- No visual redesign without user approval.
- Do not replace existing working YouTube links with generic images.
- Do not claim all 29 hero images are complete.
- Do not merge branches or deploy to the live site without approval.
