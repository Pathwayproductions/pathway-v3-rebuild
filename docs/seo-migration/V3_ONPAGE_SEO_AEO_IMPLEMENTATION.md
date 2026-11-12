# V3 On-Page SEO / AEO Implementation Log

Written 2026-11-13, on branch `claude/v3-site-finish`. This documents the
on-page technical SEO and AEO (AI-search/answer-engine optimization) work
done across all 34 pages of the V3 rebuild, grounded in the existing
research in this folder (`EXECUTIVE_SUMMARY.md`, `OFF_PAGE_SEO_REPORT.md`,
`EXISTING_SEO_METADATA.csv`, `SEO_MIGRATION_MAP.csv`) plus fresh Ubersuggest
keyword data pulled this session (Semrush was unavailable — out of API
units on the connected account; Ryze/Google Ads Keyword Planner was also
checked and found connected but with a lapsed subscription).

## What was implemented

1. **Fixed 2 internal placeholder titles** that would have shipped to
   production search results and social shares as-is: the homepage and
   `/creative-productions/` both carried a literal `| V3 Review` suffix in
   `<title>` and `og:title`.
2. **Fixed 15 meta descriptions**: 9 that were 28-80 characters (well
   under the ~150-160 char SERP snippet budget) and 6 that still carried
   an internal placeholder string — `"<Page> at Pathway Productions:
   current draft for visual and editorial review."` — instead of real
   copy. All replacements are keyword-informed (see "Keyword grounding"
   below) and sized to the snippet budget.
3. **Added JSON-LD structured data site-wide**:
   - `Organization` — all 34 pages.
   - `Service` — all 25 service-type pages (serviceType, provider,
     areaServed — Chennai-local for the legacy ad-film/corporate-video/
     explainer-video cluster where the real keyword equity sits per
     `OFF_PAGE_SEO_REPORT.md`, India-wide for digital marketing and the
     newer production-services/OTT/TV-release pages).
   - `FAQPage` — all 27 pages that carry a visible FAQ section (extracted
     directly from each page's own `<details>/<summary>` markup, so the
     schema matches the visible content exactly). 7 new FAQ sections were
     written from scratch for pages that had none (digital-marketing/
     intelligence, managed-services, consulting, build-operate-transfer,
     industries; production-services-india/crew-equipment,
     production-services-india/production-management).
   - `BreadcrumbList` was already present site-wide from earlier work
     (confirmed still valid on 33/34 pages — the homepage correctly has
     none).
4. **Internal linking**: every digital-marketing sub-page only linked to
   other digital-marketing pages in its "You Might Also Be Interested In"
   row — the creative-productions cluster already links out to digital-
   marketing, but not the reverse. Swapped one card on 9 pages (the hub,
   amazon-ads, ecommerce, ppc, qualified-leads, seo-ai-search,
   social-media, web-development, music-album) for a topically-relevant
   cross-cluster link. Left weak-fit pages (intelligence, managed-
   services, consulting, build-operate-transfer, industries) alone rather
   than force an unnatural link.
5. **sitemap.xml + robots.txt**: prepared, not activated. `robots.txt` is
   `Allow: /` (deliberately NOT disallowing crawling, since every page's
   per-page `noindex,nofollow` meta tag is what actually keeps the site
   out of the index right now — blocking crawlers in robots.txt would
   stop them from ever reading that meta tag). Flipping meta robots to
   `index,follow` and submitting the sitemap to Search Console are
   launch-day steps that still need Arun's go-ahead.
6. **Accessibility**: FAQ accordion `<summary>` elements had only the
   browser default focus outline; added the site's own `focus-visible`
   blue outline to match every other interactive element.
7. **Verified clean**: 0 missing image alt attributes site-wide (vs. 23
   found on the legacy WordPress homepage alone), 0 duplicate titles/meta
   descriptions across all 34 pages, 0 broken/misconfigured `og:image`
   (vs. the legacy site's `/wp-admin/admin-ajax.php` bug), all 34
   canonical tags match the sitemap exactly, 0 pages with mobile
   horizontal overflow after every change above.

## Keyword grounding used

- Legacy ranking data from `OFF_PAGE_SEO_REPORT.md` (Semrush): the site's
  real organic visibility today is narrow and almost entirely
  branded ("pathway productions", 260 searches/mo, position 1).
  Service-intent Chennai terms rank 11th-90th with near-zero traffic —
  confirming these as real opportunity keywords, not keywords to protect.
- Fresh Ubersuggest data (Chennai, locId 1007809), pulled this session:
  - `digital marketing agency chennai` cluster: **5,400/mo, difficulty
    12** — the single biggest, lowest-competition opportunity found,
    informed the digital-marketing hub's and PPC/SEO sub-pages' meta
    rewrites.
  - `advertising agency in chennai` (880/mo), `social media marketing
    agency in chennai` (320/mo), `video production company chennai`
    (110/mo) and the wider "chennai + [ad film/corporate video/explainer
    video] production" long-tail cluster (10-50/mo each, very low
    difficulty) informed the creative-production page rewrites.

## Open items — need Arun's decision, not fixed autonomously

1. **Contact email inconsistency (NAP).** The homepage, about and contact
   pages' schema/header area reference `hello@pathwayproductions.in` (4
   occurrences site-wide), but the actual visible "Email Us" button and
   mailto link on `/contact/` use `contact@pathwayproductions.in` (the
   only 2 occurrences of that address). The `Organization` schema added
   this session uses `hello@` since it's the more common address
   site-wide — if `contact@` is actually the canonical one, that's a
   one-line change to make once confirmed, but this isn't something to
   guess on.
2. **No phone number or WhatsApp link anywhere on the V3 site.** The
   legacy WordPress site had `+918056994433` as a primary "Call Now"
   number plus a WhatsApp deep link on every page; the V3 rebuild
   currently has neither. Worth a deliberate decision either way (not
   assumed to be an oversight, since the whole positioning/tone of V3 is
   different) rather than left as a silent gap.
3. **`sameAs` social profiles in the new Organization schema** use the
   real profiles confirmed in the prior live-site audit (LinkedIn,
   YouTube — canonical `/PathwayProductions` form per that audit's own
   recommendation over the legacy `/user/PathwayProductionLLP` form —
   Facebook, Instagram). None of these are linked anywhere in the V3
   site's own footer or header (the legacy site had them in its footer).
   Worth confirming these four are still the right/current profiles
   before they go live in schema that search engines and AI assistants
   will read.
4. **noindex,nofollow remains untouched** on every page, as decided
   earlier in this engagement. Sitemap/robots.txt above are launch-ready
   but inert until that flips.
5. Everything from `SEO_PRESERVATION_CHECKLIST.md` (41 blog posts, the
   orphaned `/video-production-services/` page, the 328-backlink legacy
   `/creative-productions/explainer-videos/` alias, missing legal pages,
   the 6 "NEEDS CLIENT DECISION" redirect targets) remains open and
   unchanged by this session's work — those are migration/redirect
   decisions, not on-page fixes, and still need Arun's sign-off per that
   checklist.
