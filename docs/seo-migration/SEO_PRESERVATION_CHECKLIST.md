# SEO Preservation Checklist — before replacing the live WordPress site

Prioritized. Items 1-4 are flagged **URGENT** because they involve real,
currently-earning search equity that a straight swap to the 29-page build
would silently drop.

## URGENT — decide before launch

- [ ] **1. Decide what happens to all 41 existing blog posts.** The new build's `/blogs/` is an index page only — no individual article template or post pages exist yet. 14 of the 41 posts were published since June 2026 (12 in October 2026 alone) with strong Rank Math SEO scores (72-86/100) and are actively earning fresh search visibility right now. Options: (a) build an article template and migrate all 41 posts with 301s from old to new URLs, (b) migrate only the newest/highest-performing posts and 301 the rest to `/blogs/` or a relevant service page, (c) some other plan. **This is the single largest SEO risk in the whole migration and needs Arun's decision first**, because it determines engineering scope.
- [ ] **2. Decide the fate of `/video-production-services/`.** This page is set to Private/noindex in WordPress and excluded from the sitemap, but it is still publicly reachable, has ~50 real backlinks, and ranks #12 in Google for "video production company in chennai" (170 searches/month) per Semrush. Either restore it as an indexable page with a 301 into the new build (e.g. `/production-services-india/`), or make a deliberate, informed decision to let it go — don't let it fall through the cracks by accident.
- [ ] **3. Add a real 301 redirect for `/creative-productions/explainer-videos/` → `/explainer-video-company/`.** This legacy pre-redesign URL is currently live and holds 328 backlinks from 2 domains, consolidated only via a canonical tag (which has no effect once the URL stops resolving on the new platform). A canonical tag is not a substitute for an HTTP redirect during a platform migration.
- [ ] **4. Add Privacy Policy and Terms & Conditions pages to the new build.** Neither currently exists in the 29-page build. These are legal requirements (and typically required by Google Ads / Meta Ads account policies) — do not carry forward the current Terms & Conditions page's metadata as-is, it has a confirmed bug (duplicate meta description copied from Privacy Policy, Rank Math score 23/100).

## HIGH — resolve before launch

- [ ] **5.** Confirm destination (or deliberate drop) for pages with no match in the new 29-page build: `/whiteboard-animation/` (5 embedded client videos), `/2d-animation-services/` (5 embedded client videos), `/3d-animation-services/` (11 embedded client videos — largest video count of any page on the site), `/creative-video-productions/virtual-reality/`, `/advertising-agency/`, `/team/`, `/digital-marketing-solutions/web-development/`, `/digital-marketing-solutions/brand-awareness/`.
- [ ] **6.** Confirm the 6 tentative redirect targets flagged "NEEDS CLIENT DECISION" in `SEO_MIGRATION_MAP.csv` (lead-generation→qualified-leads, seo→seo-ai-search, online-sales→ecommerce, success-stories→work, feature-films→films, team→about).
- [ ] **7.** Verify and, if needed, add 301s for the other legacy alias URLs found with real backlinks but not confirmed live this pass: `/creative-productions/corporate-videos/` (8 backlinks), `/corporate-video-services/` (7 backlinks — spot-checked, appears to be a soft-404/catch-all currently), `/creative-productions/ad-films/` (6 backlinks).
- [ ] **8.** Run a full HTTP-status sweep of every URL Semrush's index shows for this domain (not just the ones spot-checked here) to catch any other legacy URLs still carrying link equity.

## MEDIUM — fix during or shortly after migration

- [ ] **9.** Fix the Terms & Conditions / Privacy Policy duplicate-meta-description bug in the new copy (don't inherit it).
- [ ] **10.** Add missing H1 tags (`/careers/`, `/digital-marketing-solutions/seo/` equivalents) and fix the `/digital-marketing-solutions/` hub's mismatched H1 ("Our Work").
- [ ] **11.** Full image alt-text audit — Rank Math flagged 23 missing alt attributes on the homepage sample alone.
- [ ] **12.** Fix the broken/misconfigured homepage `og:image` (currently points to `/wp-admin/admin-ajax.php` instead of a static image).
- [ ] **13.** Pick one canonical YouTube channel URL — two are in simultaneous use site-wide (`youtube.com/user/PathwayProductionLLP` legacy form and `youtube.com/PathwayProductions` current form).
- [ ] **14.** Decide the fate of the 6 blog category archive pages (`/category/*`) — no blog-taxonomy system currently planned in the new build.
- [ ] **15.** Decide whether `/thank-you/` needs a static-route equivalent in the new build (contact-form post-submit state).
- [ ] **16.** Connect a Google Search Console property for pathwayproductions.in to Porter (or an equivalent reporting tool) so future audits have real query/impression/click data instead of third-party estimates.
- [ ] **17.** Resolve the Porter/GA4 account-slot and plan-history limits so GA4 data for the Pathway site itself can be pulled going forward.

## LOWER PRIORITY

- [ ] **18.** Consolidate `/2d-animator-recruitment/` (stale single job posting) into `/careers/`.
- [ ] **19.** Get Administrator-level WordPress access for a follow-up pass to inspect the full plugin list/versions, redirect-plugin configuration, and theme name — all were inaccessible to the Editor-level account used for this audit.
- [ ] **20.** Preserve `Article`/`BlogPosting` schema markup (confirmed present site-wide via Rank Math) in whatever is built to replace the migrated blog content.
