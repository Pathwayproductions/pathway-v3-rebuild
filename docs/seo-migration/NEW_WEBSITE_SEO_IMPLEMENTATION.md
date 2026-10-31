# New Website SEO Implementation Instructions — for the 29-page V3 build

Written for whoever implements SEO on `build/29-page-full-site`. Depends on
decisions in `SEO_PRESERVATION_CHECKLIST.md` being made first — several
items below have a placeholder pending that decision.

## 1. Redirects (server/platform-level 301s — not canonical tags)

Implement a 301 redirect map covering every row marked "redirect" or
"301 redirect" in `SEO_MIGRATION_MAP.csv`. At minimum, these are **confirmed,
no-decision-needed**:

```
/creative-video-productions/        -> /creative-productions/
/digital-marketing-solutions/       -> /digital-marketing/
/feature-films/                     -> /films/
/digital-marketing-solutions/social-media/  -> /digital-marketing/social-media/
/digital-marketing-solutions/ppc/   -> /digital-marketing/ppc/
/2d-animator-recruitment/           -> /careers/
/creative-productions/explainer-videos/  -> /explainer-video-company/   [NEW — currently only canonical-tag-linked, see checklist #3]
```

The following need Arun's confirmation of the target before implementing
(see `SEO_MIGRATION_MAP.csv` "NEEDS CLIENT DECISION" rows):
lead-generation, seo, online-sales, success-stories, team,
video-production-services, plus all 41 blog post URLs once the blog
migration decision (checklist #1) is made.

## 2. Metadata to carry forward (do not rewrite from scratch)

For every page with a confirmed exact-slug match (home, ad-films,
corporate-video-productions, explainer-video-company, music-album,
careers, contact, blogs), the existing title tags and meta descriptions in
`EXISTING_SEO_METADATA.csv` are reasonable starting points — they're
currently indexed and (for the homepage especially) tied to the site's one
real ranking keyword ("pathway productions," position 1). Don't discard
them outright in favor of all-new copy; compare before replacing.

**Do NOT carry forward**: the Terms & Conditions meta description (it's a
duplicate of Privacy Policy's — write fresh copy for both legal pages).

## 3. Canonical tags

Every page should self-canonicalize to its own new URL (this is how the
current site is configured and it works correctly — just repoint to the
new URL structure). Do not rely on canonical tags alone to consolidate
old URLs into new ones — see redirects above.

## 4. Robots / indexing defaults

Match the current site's defaults unless there's a specific reason not to:
`follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large`
on every public page. The current build was observed to be `noindex,nofollow`
site-wide during this audit (per the prior `LIVE_SITE_SEO_AND_LINKS_AUDIT.md`
pass) — **confirm this is intentionally turned off for staging and gets
switched to indexable before/at launch**, not forgotten.

## 5. Sitemap

Generate a fresh XML sitemap (index + sub-sitemaps, following the current
Rank Math pattern of separating pages/posts/categories if a taxonomy system
is kept) covering all 29 pages plus whatever blog-post URLs result from
checklist item #1. Submit to Search Console on launch day.

## 6. Schema / structured data

The current site has `Article` schema on all pages and `BlogPosting` schema
on all blog posts (Rank Math-generated). Add equivalent schema in the new
build: at minimum `Organization`/`LocalBusiness` site-wide, `BlogPosting`
on any migrated blog content, and `VideoObject` on pages embedding the
YouTube videos confirmed in `YOUTUBE_VIDEO_INVENTORY.csv` once those
videos are approved for reuse.

## 7. Analytics & tracking

- Install GA4 on the new site (property already exists in Porter as
  "Pathway Website" — reuse the same property/measurement ID rather than
  creating a new one, to preserve historical continuity).
- Reuse GTM container `GTM-NPQF6K8` if still valid, or document the new one.
- **Connect Search Console for pathwayproductions.in to whatever reporting
  tool the team uses (Porter or direct)** — this was a gap found during
  this very audit (see `OFF_PAGE_SEO_REPORT.md` §1) and should not persist
  into the new site's operation.
- Preserve/re-verify the Google Search Console property ownership on launch
  (a domain-wide property survives a platform change; a URL-prefix property
  may need re-verification).

## 8. Open Graph / social meta

Fix the broken `og:image` (currently a misconfigured dynamic endpoint on
the live site) — every page in the new build should have a real, static
`og:image` URL at minimum for the homepage and each of the 29 pages.

## 9. Performance

No Core Web Vitals baseline exists yet for either site (not measured this
pass — see Data Gaps in `TECHNICAL_SEO_AUDIT.md`). Recommend running
PageSpeed Insights or a Lighthouse CI pass on both the live site and the
new build before launch, so there's a before/after comparison rather than
launching blind. The one measured fact from this audit: the current
homepage's HTML alone is 159KB, above Rank Math's 50KB recommendation —
worth keeping the new build leaner if practical.

## 10. YouTube/video

Once the videos in `YOUTUBE_VIDEO_INVENTORY.csv` and
`PORTFOLIO_CONTENT_INVENTORY.csv` are confirmed/approved by Arun, embed
them per `docs/VIDEO_MEDIA_REGISTER.csv`'s existing page-mapping (VID-001
through VID-008), updating those rows' `video_url` from "URL REQUIRED" to
the real confirmed URLs, and add new register rows for the
whiteboard-animation/2D/3D-animation client work that currently has no
destination page (pending the consolidation decision in the preservation
checklist).
