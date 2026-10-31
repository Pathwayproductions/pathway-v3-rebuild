# Live Site SEO & Links Audit — pathwayproductions.in

Extracted directly from the current production site on 2026-10-31, for the
29-page V3 SEO migration. This is **current-state research**, not a change —
nothing here has been applied anywhere.

Method: fetched each live page individually (title, meta description,
canonical, robots meta, internal/external links, YouTube embed URLs — the
site is WordPress/Elementor, so video embeds are lightbox popups encoded in
link attributes, not `<iframe>` tags, and had to be decoded per page).
`/sitemap.xml` and `/robots.txt` were not reachable from this session, so
coverage is the site's own nav/footer graph plus the blog listing — not a
guaranteed-complete crawl. Checked server-side redirects (3xx) for all pages
were **not verified** — everything below is page content, not HTTP headers.

## 1. Per-page SEO snapshot

All pages below return `robots: follow, index, max-snippet:-1,
max-video-preview:-1, max-image-preview:large` unless noted — the live site
is fully indexed, unlike the V3 rebuild's current `noindex,nofollow`.

| Live URL | Title tag | Canonical | Notes |
|---|---|---|---|
| `/` | Pathway Productions: Ad Film Makers in Chennai | self | |
| `/creative-video-productions/` | Creative Video Productions - Ad films & Explainer Videos | self | |
| `/ad-films/` | Ad Films in Chennai | self | |
| `/corporate-video-productions/` | Corporate Video Productions - Chennai | self | |
| `/explainer-video-company/` | Explainer Video Company in Chennai | self | |
| `/whiteboard-animation/` | Whiteboard Animation \| Pathway Productions, Chennai | self | |
| `/2d-animation-services/` | 2D Animation Services in Chennai | self | |
| `/3d-animation-services/` | 3D Animation Services in Chennai | self | |
| `/music-album/` | Music Album \| Music Makers in Chennai \| Pathway Productions | self | |
| `/digital-marketing-solutions/` | Digital Marketing Agency in Chennai | self | |
| `/advertising-agency/` | Advertising Agency \| Pathway Productions | self | |
| `/feature-films/` | Feature Films - Chennai | self | |
| `/team/` | Get To Know Our Team \| Pathway Productions | self | |
| `/success-stories/` | Pathway Productions - Success Stories of Industry Top Brands | self | |
| `/careers/` | Careers \| Pathway Productions, Chennai | self | |
| `/blogs/` | Blogs \| Pathway Productions, Chennai | self | |
| `/contact/` | Contact us \| Pathway Productions, Chennai | self | |
| `/ppc/` | PPC Advertising Agency \| Pathway Productions, Chennai | **`/digital-marketing-solutions/ppc/`** | Short URL is live/crawlable but self-declares a different canonical — see §4 |
| `/lead-generation/` | Lead Generation \| Pathway Productions, Chennai | **`/digital-marketing-solutions/lead-generation/`** | Same pattern as `/ppc/` |

Not individually fetched but confirmed to exist as nav links (same
short-path-vs-long-path pattern likely applies — unverified):
`/digital-marketing-solutions/brand-awareness/`, `/online-sales/`,
`/web-development/`, `/seo/`, `/social-media/`,
`/creative-video-productions/virtual-reality/`.

## 2. Blog posts (live, from `/blogs/` listing — 9 total shown)

1. AI Video Production: How It Works and Why Original Music Makes the Difference — `/ai-video-production-original-music-guide/`
2. Movie Video Production and Digital Marketing Company — `/movie-video-production-digital-marketing/`
3. How a Social Media Marketing and Video Production Company Grows Your Business Faster — `/social-media-video-production-company/`
4. What Does a Music Album Production Company Actually Do? — `/music-album-production-company-what-they-do/`
5. The Complete Guide to Generating B2B Leads in 2026 — `/how-to-generate-b2b-leads-2026/`
6. How to Measure ROI from a Social Media Management Agency — `/measure-roi-social-media-management-agency/`
7. SEO vs. PPC – Which Should You Invest In First? — `/seo-vs-ppc-which-should-you-invest-in-first/`
8. Whiteboard Animation vs. 2D Animation — `/whiteboard-animation-vs-2d-animation/`
9. Ad Film vs Corporate Video — `/ad-film-vs-corporate-video/`

Individual post pages were not fetched (titles/URLs only, from the listing).

## 3. Global nav/footer link graph (same on every page)

**Main nav:** Creative Productions, Ad Films, Corporate Videos, Explainer
Video, Virtual Reality, Whiteboard Animation, 2D Animation, 3D Animation,
Music Album, Digital Marketing, Advertising Agency, Brand Awareness,
Generate Traffic (= online-sales), Lead Generation, Web Development, Feature
Films, Team, Success Stories, Careers, Blogs, Contact.

**Footer:** Privacy Policy, Terms & Conditions, social icons, obfuscated
email (Cloudflare `/cdn-cgi/l/email-protection`).

**External/utility, present on every page:**
- LinkedIn: `https://www.linkedin.com/company/pathwayproductions/`
- YouTube (two different channel URLs in use simultaneously):
  `https://www.youtube.com/user/PathwayProductionLLP` (legacy form) and
  `https://www.youtube.com/PathwayProductions` (current form) — **flag: pick
  one canonical channel URL for the rebuild**
- Facebook: `https://www.facebook.com/PathwayOffl` (two link variants, with/without trailing slash)
- Instagram: `https://www.instagram.com/pathwayoffl/`
- WhatsApp: `https://web.whatsapp.com/send?phone=+918056994433`
- Google Partner badge: `https://www.google.com/partners/agency?id=4566991259`
- Phone numbers in use: `+918056994433` (primary, "Call Now"), `9790922972`, `9840094129`
- GTM container: `GTM-NPQF6K8`

## 4. Flags for the SEO migration audit

**Duplicate/short-path URLs.** `/ppc/` and `/lead-generation/` are live,
indexable pages whose own meta declares a *different* canonical
(`/digital-marketing-solutions/ppc/` and `/digital-marketing-solutions/
lead-generation/` respectively) — i.e. the site already runs two URLs per
sub-service with one marked canonical over the other. The same pattern
likely applies to `/brand-awareness/`, `/online-sales/`, `/web-development/`,
`/seo/`, `/social-media/`, `/creative-productions/` (unverified — not
individually fetched). **For the rebuild's URL map, decide per short path
whether it 301s to the new long-form URL or is dropped** — right now traffic
could be landing on either form.

**Legacy URLs with no planned V3 equivalent.** The 29-page V3 mapping has no
page for: `/whiteboard-animation/`, `/2d-animation-services/`,
`/3d-animation-services/`, `/advertising-agency/`, `/feature-films/`,
`/team/`, `/success-stories/`, `/creative-video-productions/virtual-reality/`,
plus all 9 live blog posts and the short-path duplicates above. Each is
currently indexed and getting whatever organic equity it has — **every one
needs an explicit redirect/consolidate/keep-as-is decision before launch**,
not just the two (`/explainer-video-company/`, `/music-album/`) the original
brief called out. `/explainer-video-company/` and `/music-album/` *do* have
direct V3 equivalents now (same slugs) — good, no redirect needed there,
just a content swap.

**Slug mismatches to resolve:** live `/creative-video-productions/` vs. V3's
`/creative-productions/`; live `/corporate-video-productions/` matches V3
exactly; live `/digital-marketing-solutions/` vs. V3's `/digital-marketing/`
(and all its sub-pages sit one level deeper on the new site:
`/digital-marketing/ppc/` vs. live's `/ppc/` or
`/digital-marketing-solutions/ppc/`).

## 5. YouTube videos found live (real IDs — for the Video & Media Register)

All of these are **currently embedded and live today** — not invented, not
yet confirmed as approved for the rebuild. Cross-reference against
`docs/VIDEO_MEDIA_REGISTER.csv` before reusing; several map directly onto
existing `URL REQUIRED` rows.

| Source page | Project / label | YouTube video ID | Maps to register row |
|---|---|---|---|
| `/corporate-video-productions/`, `/advertising-agency/` | NTC | `ZKrhWmWMinw` | **VID-005** (NTC/Ntrust/LECS) |
| `/corporate-video-productions/`, `/advertising-agency/` | N Trust | `nJ6FobPBQh4` | **VID-005** |
| `/corporate-video-productions/`, `/advertising-agency/` | LECS | `f-_IY9gUqaE` | **VID-005** |
| `/feature-films/` | Kurai Ondrum Illai (feature film, "Watch Movie") | `oXF7jquWRsE` | **VID-004** candidate |
| `/explainer-video-company/` | Hero ("Make yours") | `NjXDMDcsPFk` | **VID-006** candidate |
| `/explainer-video-company/` | GoStocks | `n4ZgXaIZxhE` | **VID-006** candidate |
| `/explainer-video-company/` | GCU (Garden City University) | `PQ-urzRuKY0` | **VID-006** candidate |
| `/explainer-video-company/` | Phozhil | `ogK5rdgI6Zw` | **VID-006** candidate |
| `/explainer-video-company/` | Fashion Profiles | `DoexLxR8tF8` | **VID-006** candidate |
| `/ad-films/` | unlabeled hero | `sPfqvPyO66o` | **VID-002** candidate |
| `/ad-films/` | We Box | `Ve3r6RINF1g` | **VID-002** candidate |
| `/ad-films/` | Spice Hill | `rbKELyHuRiw` | **VID-002** candidate |
| `/creative-video-productions/` | "creative video productions" (possible showreel) | `i2sVGKLNDn4` | **VID-001** candidate |
| `/whiteboard-animation/` | Ecobuddy Cool Drinks | `jp1yNYBOsmw` | unregistered — whiteboard animation has no V3 page yet |
| `/whiteboard-animation/` | Lifespice | `UPjchAVot9k` | unregistered |
| `/whiteboard-animation/` | Akara Research | `F1wBcxE6-iU` | unregistered |
| `/2d-animation-services/` | hero | `Ea8-mXdmVso` | unregistered |
| `/2d-animation-services/` | Hard Truth | `NPIpvOq2EOI` | unregistered |
| `/2d-animation-services/` | Smart pic | `026Fo3v1EgQ` | unregistered |
| `/2d-animation-services/` | mSiren | `o_SvTlfQhf0` | unregistered |
| `/2d-animation-services/` | Minmini App | `W6EbJp5xf8Q` | unregistered |
| `/3d-animation-services/` | hero | `A7LbmQtLI0s` | unregistered |
| `/3d-animation-services/` | 3D Industrial Animation | `gq5uKG0Uwv0` | unregistered |
| `/3d-animation-services/` | 3D Explainer Video | `g3yL1f8f0oE` | unregistered |

**Important finding:** `/explainer-video-company/` and `/music-album/`'s V3
pages currently say "no approved project credits exist yet." That's true for
*new, V3-approved* credits, but the **live** explainer page already shows 5
real project examples (GCU, GoStocks, Phozhil, Fashion Profiles, hero). Worth
confirming with Arun whether any of these are approved for reuse rather than
treating the category as a cold start. `/music-album/` lists 7 music-video
titles as plain text with no linked URLs — titles exist, videos don't appear
embedded anywhere live.

## 6. What this doesn't cover

- No HTTP-level redirect/status-code check (3xx chains, 404s) — only page
  content was read.
- `/sitemap.xml` and `/robots.txt` were blocked from this session's fetch
  tool; a complete crawl would need those or a proper site-audit tool
  (Semrush/Ubersuggest site audit, already connected in this project, can do
  this with real crawl data rather than page-by-page fetches).
- Individual blog posts, `/privacy-policy/`, `/terms-conditions/`, and the 4
  `/digital-marketing-solutions/` sub-pages (brand-awareness, online-sales,
  lead-generation, web-development) were linked but not individually
  fetched for title/meta.
- No backlink, ranking, or search-traffic data — this is on-page/link
  structure only. For keyword rankings and backlink profile, pull from
  Semrush/Ubersuggest (connected) rather than this document.
