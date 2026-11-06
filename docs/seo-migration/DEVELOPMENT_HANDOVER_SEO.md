# Development Handover — SEO implementation for the V3 build

For: the V3 development Claude session working on `build/29-page-full-site`.
Prepared 6 Nov 2026 on a separate research branch.

> **Status: NOT APPROVED. Do not implement anything in this document yet.**
> Implement a row only after its "Approval status" in
> `SEO_IMPLEMENTATION_MASTER.xlsx` reads **Approved** or **Approved with
> changes** (use the changed values). Rows marked *Pending*, *Rejected* or
> *Needs info* stay untouched. Do not deploy and do not merge.

Source of truth for every value below: `SEO_IMPLEMENTATION_MASTER.xlsx`
(tabs Page Comparison, Blog Posts, Redirect Map, Images, Video SEO,
Technical). If this document and the spreadsheet differ, the spreadsheet
wins.

## 1. Rules that apply to every page

1. **No visual redesign.** The approved V3 look stays. Every SEO change here
   is in `<head>`, heading semantics, link lists, alt text, attributes or
   JSON-LD.
2. **Semantic H1 without visual change.** Where the spreadsheet's
   "Recommended H1" says *keep X as display line*, mark up the keyword line
   (usually the existing eyebrow/kicker) as the single `<h1>`. Change the
   creative headline to `<p class="display">` (or keep its current class)
   so it looks identical. Exactly one `<h1>` per page.
3. **`<head>` template** (fill from the spreadsheet row):
   ```html
   <title>{Proposed SEO title}</title>
   <meta name="description" content="{Proposed meta description}">
   <link rel="canonical" href="https://pathwayproductions.in{V3 URL}">
   <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
   <meta property="og:type" content="website">
   <meta property="og:title" content="{Proposed SEO title}">
   <meta property="og:description" content="{Proposed meta description}">
   <meta property="og:url" content="https://pathwayproductions.in{V3 URL}">
   <meta property="og:image" content="https://pathwayproductions.in/assets/og/{page-slug}.jpg">
   <meta name="twitter:card" content="summary_large_image">
   ```
   Keep `noindex,nofollow` on staging. Switch to the line above **only at
   launch** (§8). `/thank-you/` uses `noindex, follow` permanently.
4. **URLs:** lowercase, hyphenated, trailing slash, absolute `https://pathwayproductions.in` (non-www) in canonicals, og:url and schema.
5. **Remove "| V3 Review"** from every title at launch (Home and Creative Productions have it today).
6. **Internal links:** link to the final URL, never to a URL that redirects.

## 2. Page-by-page changes

Use the Page Comparison tab. Columns G (title), J (meta), N (H1), Q
(heading changes), V (links), Y (canonical), Z (schema), AA (redirects in).
The rows that change the most:

| Page | Change |
|---|---|
| `/` | Title back to `Pathway Productions: Ad Film Makers in Chennai`; H1 per rule 2; Organization/LocalBusiness JSON-LD. |
| `/creative-productions/` | Title `Video Production Company in Chennai \| Pathway Productions`; add H3 cards linking 2D & 3D Animation and AI Video. |
| `/ad-films/` | Title `Ad Film Production House in Chennai \| Pathway Productions` (not the homepage phrase). |
| `/corporate-video-productions/` | Title `Corporate Video Production in Chennai \| Pathway Productions`; add width/height to the 5 images. |
| `/explainer-video-company/` | Title `Explainer Video Company in Chennai \| Pathway Productions`; add H2 "Types of Explainer Video" with 3 H3 links. |
| `/2d-animation-services/` | New V3 page at the **existing** URL; sections 2D / 3D / Whiteboard; move all videos from the 3D and whiteboard pages. |
| `/films/` | Film titles become H2s; Movie JSON-LD ×2. |
| `/digital-marketing/` + sub-pages | Titles per spreadsheet; replace every placeholder meta ("current draft for visual and editorial review"). |
| `/music-album/` | Remove/reword the H3 "What we don't provide (yet confirmed)". |
| `/blogs/` | Replace the 3 placeholder H3s with real post titles; build the article template (§4). |
| New pages | `/live-action-explainer-videos/`, `/ai-video-production/`, `/digital-marketing/web-development/`, `/film-marketing/tv-commercial-release/` (scope approval first), `/work/case-studies/`, `/thank-you/`, `/privacy-policy/`, `/terms-conditions/`. |

## 3. Internal links (global)

Add a footer link block on every page:

- **Creative Productions:** Ad Films · Corporate Films · Explainer Videos · 2D & 3D Animation · AI Video Production · Music Videos · Our Films
- **Film & India:** Film Marketing · TV Commercial Release · OTT Distribution · Production Services India · Crew & Equipment · Production Management
- **Digital Marketing:** PPC · SEO & AI Search · Social Media · Qualified Leads · Web Development · E-commerce · Amazon Ads · Industries · Managed Services · Consulting · Marketing Intelligence · Build–Operate–Transfer
- **Company:** About · Our Work · Case Studies · Blog · Careers · Contact · Privacy Policy · Terms & Conditions

Add BreadcrumbList markup and visible breadcrumbs on every inner page.
Contextual body links come from Page Comparison column V. Required today:
`/blogs/`, `/careers/` and `/digital-marketing/industries/` have zero
inbound links.

## 4. Blog article template

- Route: `/{slug}/` — **identical** slug to the live post (41 rows in the Blog Posts tab). No `/blog/` prefix.
- Elements: `<h1>` = post title; byline with author and `datePublished`; featured image with alt; body; "Related service" link to the owning page (Blog Posts tab, column I).
- JSON-LD `BlogPosting`: headline, description, image, datePublished, dateModified, author (Person), publisher (Organization), mainEntityOfPage.
- Fix before migrating: give `how-we-transformed-our-video-production-workflow-with-ai` a unique title and meta (it duplicates `brands-need-expert-ad-film-makers`). Repoint the link in `video-production-agency-in-chennai-ai-vide` from `/video-production-services` to `/creative-productions/`.
- `/blogs/page/2/`–`/page/5/`: keep pagination with self-canonicals, or 301 them to `/blogs/` if the index lists every post.

## 5. Redirects

Implement **every** row of the Redirect Map tab at the server/hosting layer.
These are not canonical tags and not JavaScript redirects. Requirements:

- Status 301, single hop (old URL → final URL; never via the old structure).
- Both slash and no-slash forms; http and www variants resolve in one hop.
- Remove any rule that redirects `/creative-productions/` or `/digital-marketing/*` into the old structure (those paths are V3 pages now).
- `/elementor-hf/*` and `/test/*` → 410.
- Netlify-style example (adapt to the actual host):
  ```
  /video-production-services            /creative-productions/               301
  /video-production-services/           /creative-productions/               301
  /creative-video-productions/          /creative-productions/               301
  /creative-productions/explainer-videos/ /explainer-video-company/          301
  /feature-films/                       /films/                              301
  /digital-marketing-solutions/ppc/     /digital-marketing/ppc/              301
  ```
- Test: every Redirect Map row returns 301 → 200 in one hop (curl `-sIL`) before DNS switch.

## 6. Images

- Every `<img>`: explicit `width` and `height`, `alt` (descriptive, plain language; decorative images `alt=""`), `loading="lazy"` below the fold, `fetchpriority="high"` on the hero only.
- Responsive `srcset` at 640/1280/1920 w; WebP or AVIF; hero ≤ 200 KB at 1280 w.
- Filenames: descriptive kebab-case, e.g. `corporate-video-shoot-chennai-office.webp` (not `IMG_0042.jpg`).
- The 9 `concept-previews` images are 412–683 px wide placeholders. Replace them with approved finals ≥ 1600 px wide before launch (Images tab).
- og:image 1200×630 JPG for every page, in `/assets/og/`.

## 7. Video SEO

- Use a lite YouTube embed (thumbnail + click-to-load iframe with a `title` attribute) to protect Core Web Vitals.
- One `VideoObject` per approved video (Video SEO tab): name, description, `thumbnailUrl` (`https://i.ytimg.com/vi/{id}/hqdefault.jpg`), `uploadDate` (from YouTube), `duration` (ISO 8601), `embedUrl`.
- Add `<video:video>` entries for those pages in the XML sitemap.
- Only embed videos whose approval status is Approved.

## 8. Structured data templates

Site-wide (in the homepage, referenced by `@id` elsewhere):
```json
{"@context":"https://schema.org","@graph":[
 {"@type":["Organization","ProfessionalService"],"@id":"https://pathwayproductions.in/#org",
  "name":"Pathway Productions","url":"https://pathwayproductions.in/",
  "logo":"{absolute URL of the final logo file — TO CONFIRM}",
  "telephone":"+91-80569-94433","email":"contact@pathwayproductions.in",
  "address":{"@type":"PostalAddress","streetAddress":"TO CONFIRM","addressLocality":"Chennai","addressRegion":"Tamil Nadu","addressCountry":"IN"},
  "sameAs":["https://www.linkedin.com/company/pathwayproductions/","https://www.youtube.com/PathwayProductions","https://www.facebook.com/PathwayOffl","https://www.instagram.com/pathwayoffl/"]},
 {"@type":"WebSite","@id":"https://pathwayproductions.in/#website","url":"https://pathwayproductions.in/","name":"Pathway Productions","publisher":{"@id":"https://pathwayproductions.in/#org"}}]}
```
Service page:
```json
{"@context":"https://schema.org","@graph":[
 {"@type":"Service","name":"Corporate Video Production","serviceType":"Corporate video production",
  "areaServed":[{"@type":"City","name":"Chennai"},{"@type":"Country","name":"India"}],
  "provider":{"@id":"https://pathwayproductions.in/#org"},
  "url":"https://pathwayproductions.in/corporate-video-productions/"},
 {"@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Home","item":"https://pathwayproductions.in/"},
  {"@type":"ListItem","position":2,"name":"Creative Productions","item":"https://pathwayproductions.in/creative-productions/"},
  {"@type":"ListItem","position":3,"name":"Corporate Films","item":"https://pathwayproductions.in/corporate-video-productions/"}]}]}
```
Use the same pattern for Movie (`/films/`), BlogPosting, AboutPage,
ContactPage, CollectionPage (`/work/`). Add JobPosting only for real
openings. Do not add FAQPage unless the FAQ is visible on the page. Validate
every template in Google's Rich Results Test.

## 9. Forms and tracking

- `/contact/`: an HTML form (name, email, phone, service interest, message) that posts and then lands on `/thank-you/`. Keep the phone, email and WhatsApp links.
- GTM `GTM-NPQF6K8`, GA4 property 256406920. Events: `contact_form_submit` (on `/thank-you/` load after a submit), `phone_click` (`tel:`), `email_click` (`mailto:`), `whatsapp_click`. Mark these four as key events; un-mark `page_view`, `contact`, `blog`, `portfolio` (an Admin change — needs approval).
- Use one contact email consistently (V3 uses both `contact@` and `hello@`; confirm which).

## 10. Launch checklist (gate)

- [ ] Every approved row implemented; unapproved rows untouched.
- [ ] Every page: one `<h1>`, unique title ≤ 60 chars, unique meta ≤ 155, self-canonical, robots `index, follow`.
- [ ] No "| V3 Review" anywhere; no `noindex` except `/thank-you/`.
- [ ] Every Redirect Map row: 301 → 200 in one hop.
- [ ] 41 blog slugs return 200 with BlogPosting JSON-LD.
- [ ] Rich Results Test passes for each template.
- [ ] sitemap.xml lists every indexable URL (+ video entries); robots.txt references it; no `Disallow: /`.
- [ ] Mobile Lighthouse: LCP < 2.5 s, CLS < 0.1 on Home, Creative hub, Ad Films, Corporate, Explainer, Animation.
- [ ] Form submit → `/thank-you/` → `contact_form_submit` visible in GA4 DebugView.
- [ ] Launch day: submit sitemap in GSC; inspect `/`, `/creative-productions/`, `/ad-films/`, `/explainer-video-company/`; watch Coverage and 404s daily for 14 days.

## Appendix A — Live-page extraction (fills the "Pending live extraction" cells)

Run in Chrome on any page of `https://pathwayproductions.in/` while **logged out**
of WordPress (DevTools → Console). It fetches each live page and returns
headings, images and internal links as JSON to paste back for the research
session.

```js
const paths = ["/","/creative-video-productions/","/ad-films/","/corporate-video-productions/","/explainer-video-company/",
 "/2d-animation-services/","/3d-animation-services/","/whiteboard-animation/","/music-album/","/feature-films/",
 "/digital-marketing-solutions/","/digital-marketing-solutions/ppc/","/digital-marketing-solutions/seo/",
 "/digital-marketing-solutions/social-media/","/digital-marketing-solutions/lead-generation/",
 "/digital-marketing-solutions/online-sales/","/digital-marketing-solutions/web-development/",
 "/digital-marketing-solutions/brand-awareness/","/advertising-agency/","/success-stories/","/team/","/careers/",
 "/contact/","/blogs/","/creative-video-productions/virtual-reality/","/video-production-services/"];
const out = {};
for (const p of paths) {
  const r = await fetch(p, {credentials: "omit"}); const html = await r.text();
  const d = new DOMParser().parseFromString(html, "text/html");
  const imgs = [...d.querySelectorAll("img")].map(i => ({src: i.getAttribute("data-src") || i.getAttribute("src"),
     alt: i.getAttribute("alt"), w: i.getAttribute("width"), h: i.getAttribute("height")}));
  out[p] = {status: r.status,
    h: [...d.querySelectorAll("h1,h2,h3")].map(h => h.tagName + ": " + h.textContent.trim().replace(/\s+/g," ")),
    imgs,
    links: [...new Set([...d.querySelectorAll("main a[href], .elementor-section a[href]")].map(a => a.getAttribute("href"))
      .filter(h => h && (h.startsWith("/") || h.includes("pathwayproductions.in"))))]};
}
copy(JSON.stringify(out, null, 1)); "copied " + Object.keys(out).length + " pages to clipboard";
```
