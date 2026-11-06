# SEO Preservation Report — Pathway V3 migration

Prepared 6 Nov 2026 · Research branch only · **Nothing has been implemented.**
Companion files: `SEO_IMPLEMENTATION_MASTER.xlsx` (every page, every rule),
`DEVELOPMENT_HANDOVER_SEO.md` (instructions for the V3 build),
`Pathway_V3_Master_Keyword_Mapping.xlsx` (124 keywords, P0–P3).

## 1. Bottom line

The site has momentum worth protecting, and the current V3 build would lose
much of it. GSC clicks rose 106% year on year (Aug–Oct 2026) and average
position improved from 30.3 to 13.6. As built today, V3 removes the
homepage's ranking title. It also drops "Chennai" and the ranking phrases
from service titles, cuts internal links from about 21 per page to 6, and
has no blog article template. Every V3 page is set to `noindex`.

All of these are fixable without redesigning the approved V3 look. The
recommendations change titles, metas, the semantic H1, footer links,
redirects and tracking. They do not change layout.

## 2. The 10 highest-risk decisions (approval needed first)

| # | Decision | Evidence | Recommendation | Risk |
|---|---|---|---|---|
| 1 | Homepage title and H1 | ~82% of 16-month GSC clicks land on `/`; it ranks 11.5 for "ad film makers in chennai" through the title "Pathway Productions: Ad Film Makers in Chennai". V3 title: "Pathway Productions — Creative Production & Digital Marketing \| V3 Review". | Keep the live title exactly at launch. Make a short keyword H1 the semantic H1; keep "Crafting Stories That Transcend." as the visual line. | Critical |
| 2 | `/video-production-services/` | Private in WordPress; the 31 Oct Ubersuggest crawl gets a **404**. Google still indexes it: 17 clicks, 2,659 impressions, ~50 backlinks. A blog post links to it. | 301 to `/creative-productions/` — on the live site now and in V3. Do **not** use `/production-services-india/` (foreign-producer intent). | Critical |
| 3 | 41 blog posts | No V3 article template. 11+ posts earn clicks; 2 are de-indexed. | Build the template; keep every slug; fix the duplicate title/meta (§4). | Critical |
| 4 | Internal linking | Live nav/footer links ~21 pages from every page. V3 nav links 6; `/blogs/`, `/careers/`, `/digital-marketing/industries/` have **0** inbound links; most service pages have 1–3. | Footer link block to every page + contextual links (Page Comparison, column V). | High |
| 5 | Launch indexing gate | All 29 V3 pages are `noindex,nofollow`; 2 titles end "\| V3 Review". | Make index/follow + clean titles a page-by-page launch gate. | Critical |
| 6 | Service-page titles | V3 titles drop ranking phrases: "Corporate Films", "Explainer Videos", "Digital Marketing", "Google, Meta & Amazon Ads \| PPC". | Use the proposed titles (all ≤ 60 chars) in the spreadsheet. | High |
| 7 | Keyword ownership | Four URLs compete for "video production company in chennai" (homepage, orphan page, blog post `/video-production-company-in-chennai/`, Corporate). V3 `/ad-films/` copies the homepage phrase. The DM hub competes with a blog post. | One owner per phrase (§5). | High |
| 8 | Animation consolidation | `/3d-animation-services/` (1,467 impr) and `/whiteboard-animation/` have no V3 page; together with 2D they hold 21+ client videos. | Merge into `/2d-animation-services/` (URL kept, retitled 2D & 3D); move every video. | High |
| 9 | Redirect rebuild | The live site 301s `/creative-productions/*`, short aliases (`/ppc/`, `/seo/` …), `/digital-marketing/lead-generation/` and 29 date archives into the old structure. V3 reuses `/creative-productions/` and `/digital-marketing/`. | Replace every WordPress rule with the Redirect Map tab — server-side, single hop. | High |
| 10 | Enquiry form + tracking | V3 Contact is `mailto:` only; no `/thank-you/`. GA4's "contact" key event counts page views; 15 real form submits in 16 months. | Approve a form, `/thank-you/` (noindex) and named conversion events. | High |

## 3. Rankings and equity to protect

| Asset | Today | V3 URL | Protection |
|---|---|---|---|
| "pathway productions" | 309 clicks · pos 2.9 | `/` | Keep title brand-first, URL, NAP |
| "ad film makers in chennai" | 10 clicks · 1,278 impr · pos 11.5 (via homepage) | `/` | Keep homepage title; `/ad-films/` targets "production house / agency" instead |
| "ad film production houses in chennai" | 9 · 270 · pos 4.5 | `/ad-films/` | Title "Ad Film Production House in Chennai" |
| "ad film agency in chennai" | 7 · 397 · pos 7.6 | `/ad-films/` | Meta + body copy |
| "video production company in chennai" | 11 · 1,040 · pos 19.5 | `/creative-productions/` | Hub becomes owner; orphan page 301s here |
| "explainer video company in chennai" | 0 · 589 · pos 7.3 | `/explainer-video-company/` | Keep title phrase; new meta for CTR |
| "corporate video chennai" | 1 · 336 · pos 8.0 | `/corporate-video-productions/` | Restore "Corporate Video … Chennai" title |
| "movie / short film production company in chennai" | 4 · 226 · 8.1 and 4 · 224 · 8.5 | `/films/` | 301 `/feature-films/`; keep film names and wording |
| "digital marketing agency chennai" | 6 · 531 · pos 13.0 | `/digital-marketing/` | Keep the exact title phrase; fix "Our Work" H1 |
| `/careers/` | 14 clicks · pos 5.5 · 33 backlinks (naukri.com) | `/careers/` | Keep URL; link it in the footer |
| `/team/` | 10 clicks · pos 4.4 | `/about/` | 301; short "people behind Pathway" section on About |
| Legacy explainer alias | 328 backlinks | → `/explainer-video-company/` | Single-hop 301 |
| `/success-stories/` | 9 backlinks | → `/work/case-studies/` | 301 |
| `/digital-marketing-solutions/ppc/` | 11 backlinks | → `/digital-marketing/ppc/` | 301 |
| Top blog posts | `best-digital-marketing-agency-in-chennai` 12 clicks; `the-role-of-editing-in-ad-films` 11 clicks (pos 7.6); `video-production-agency-in-chennai-ai-vide` 5 clicks | Same slugs | Article template |
| 58 embedded YouTube videos | 0 indexed as video results | Destination pages per Video SEO tab | Move every approved video; add VideoObject + video sitemap |

## 4. Problems found on the live site this pass (new)

- **`/video-production-services/` already returns 404** to logged-out visitors (it is Private in WordPress). The earlier "publicly reachable" reading was likely made while logged in. Its equity is leaking now, before migration.
- **Duplicate title and meta caused a de-indexing.** `how-we-transformed-our-video-production-workflow-with-ai` carries the title and meta of `brands-need-expert-ad-film-makers` (Ubersuggest). This is the most likely reason Google dropped it. Its focus keyword is also wrong ("expert ad film makers").
- **A third page competes for the top query.** The blog post `/video-production-company-in-chennai/` ("Top Video Production Company in Chennai", Oct 2026) targets the same phrase as the hub and the orphan page.
- **Two titles are too short** (Ubersuggest): `/ad-films/` "Ad Films in Chennai" (19 chars) and `/feature-films/` (23).
- **7 thin pages** (under ~180 words): `/thank-you/`, `/music-album/`, `/2d-animator-recruitment/`, `/contact/`, `/team/`, `/digital-marketing-solutions/web-development/`, `/creative-video-productions/virtual-reality/`.
- **68 of the 69 "broken links" are Cloudflare's email-protection link**, a crawler artefact. Plain `mailto:` links in V3 avoid it. The one real broken link is the blog link to `/video-production-services`.

## 5. Keyword ownership (prevents cannibalisation)

| Phrase | Owner | Must not target it | Supporting pages link to owner |
|---|---|---|---|
| ad film makers in chennai | `/` | `/ad-films/` (V3 title currently does) | `/ad-films/` |
| ad film production house / agency in chennai | `/ad-films/` | — | blog posts on ad films |
| video production company in chennai | `/creative-productions/` | `/`, blog `/video-production-company-in-chennai/` | blog post retitled as a buyer's guide |
| explainer video company in chennai | `/explainer-video-company/` | live-action and AI pages | 4 explainer blog posts |
| animation studio / 2D & 3D animation in chennai | `/2d-animation-services/` | explainer overview | whiteboard and animation posts |
| digital marketing agency in chennai | `/digital-marketing/` | blog `best-digital-marketing-agency-in-chennai` | that post links with the exact phrase |
| ai video production | `/ai-video-production/` | `ai-video-production-original-music-guide` | both AI posts |

## 6. Change summary (46 page rows)

10 Retain · 20 Minor Optimisation · 8 Rewrite · 8 Retire → 301. Priority: 14 P0, 13 P1, 13 P2, 6 P3. All rows are "Pending approval"; the Summary tab counts update as you change them.

Rewrites are limited to new pages (Live-Action, AI Video, Web Development, TV Release, Case Studies), the expanded Animation page, the Creative hub (URL change plus new keyword owner) and Terms & Conditions (broken meta).

## 7. Unresolved decisions

- [ ] Approve the 10 decisions in §2.
- [ ] Blog post `/video-production-company-in-chennai/`: keep the slug and retitle it as a guide (recommended), or merge it into the hub with a 301?
- [ ] University social-media case study: keep it as a blog post, or move it to `/work/case-studies/` with a 301?
- [ ] Client approvals for named work: NTC, NTrust, LECS, We Box, Spice Hill, Fit & Flex, GoStocks, GCU, Phozhil, Fashion Profiles, Akara Research, Ecobuddy, Lifespice, Hard Truth, Smart pic, mSiren, Minmini App, Arun Excello, CIPET, Grand Sweets, Jio.
- [ ] TV Commercial Release scope: does Pathway coordinate channels or schedule telecasts? Does it handle broadcast delivery or book airtime?
- [ ] Exact business address for LocalBusiness schema and Google Business Profile (NAP must match).
- [ ] One contact email (V3 uses both `contact@` and `hello@`).
- [ ] Which URL imdb.com links to (20 links), to confirm it is in the Redirect Map.
- [ ] Data Retention in GA4 (2 → 14 months) and Ryze reactivation (Keyword Planner cross-check).

## 8. What this pass could not capture

Live H2/H3 headings, live image filenames/alt/dimensions and in-content
internal links per page were not extracted. Claude in Chrome was not
connected and the live site is not reachable from this session. Those
spreadsheet cells say "Pending live extraction". The snippet in
`DEVELOPMENT_HANDOVER_SEO.md` Appendix A fills them in about 10 minutes from
a logged-out Chrome window. Run it before final copy is written, so any
live heading or link worth keeping is not lost.

## Sources

GSC audit and query mapping (16 months to 27 Oct 2026) · GA4 audit (16
months) · Ubersuggest site audit of pathwayproductions.in (crawled 31 Oct
2026, 156 URLs) · Semrush India (6 Nov 2026) · Keyword workbook (Keyword
Planner, 30 Oct 2026) · EXISTING_SEO_METADATA.csv, EXISTING_URL_INVENTORY.csv,
YOUTUBE_VIDEO_INVENTORY.csv, WordPress admin exports (31 Oct 2026) · V3 HTML
on `build/29-page-full-site` (parsed 6 Nov 2026).
