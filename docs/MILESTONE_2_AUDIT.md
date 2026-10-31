# Milestone 2 — Remaining 25 Pages, Architecture & Verification

Scope: following approval of Milestone 1 (homepage + Creative Productions), rebuild
the remaining pages in the V3 design language, in one batch, per the user's explicit
pacing decision. Two pages with no source content anywhere were skipped per the
user's explicit decision; everything else (25 of the remaining 27 routes) was built.

## 1. What's skipped, and why

**Explainer Videos** and **Music Video Production** have no source content anywhere —
no live page on `Pathwebsite`, no draft template under
`design-system/templates-approved/`, nothing beyond their names appearing as links in
nav/service grids. Per the user's explicit decision ("Skip for now, build everything
else"), these two were not built. Their links across the site (`index.html` capability
grid, `creative-productions/index.html` service grid, `work/index.html` link list)
remain `data-pending` with an accurate message: *"[Page name] has no source content yet
— not part of this review milestone."* No copy, imagery, or structure was invented for
either page.

## 2. Page inventory — the 25 built this milestone

**Creative/production archetype (8 pages, dark cinematic hero)** — real on-set
photography is implied by the source copy but not yet supplied, so each uses
`.hero-dark` (the same honest-placeholder pattern as Creative Productions' hero):

| Route | Source |
|---|---|
| `ad-films/` | live route |
| `corporate-video-productions/` | `T2-Corporate-Films.html` (only source; no live route) |
| `film-marketing/` | live route |
| `films/` | live route (no hero CTA in source — button omitted, not invented) |
| `ott-distribution/` | live route |
| `production-services-india/` | live route |
| `production-services-india/crew-equipment/` | live route |
| `production-services-india/production-management/` | live route |

**Digital Marketing archetype (12 pages, light editorial hero)** — no photography is
implied by this source content, so each uses `.hero-light` (plain text hero, no image —
adding one here would be inventing an asset the source never calls for):

`digital-marketing/`, `digital-marketing/ppc/`, `digital-marketing/seo-ai-search/`,
`digital-marketing/social-media/`, `digital-marketing/qualified-leads/`,
`digital-marketing/amazon-ads/`, `digital-marketing/ecommerce/`,
`digital-marketing/industries/`, `digital-marketing/consulting/`,
`digital-marketing/intelligence/`, `digital-marketing/managed-services/`,
`digital-marketing/build-operate-transfer/` — all from live routes.

**Company archetype (5 pages, light hero + bespoke sections)**:

`about/`, `work/`, `blogs/`, `careers/`, `contact/` — all from live routes.
`work/` correctly keeps the Explainer Videos / Music Video Production links pending
(see §1). `contact/` has no closing CTA band, since it is itself the CTA destination;
it instead carries a `.review-note` explaining the enquiry form is not yet wired to a
backend, with `mailto:` as the working interim path.

All body copy on all 25 pages traces directly to BeautifulSoup-extracted real text
(`h1,h2,h3,h4,p,a,li`) from the 24 live `Pathwebsite` routes (branch
`design/chatgpt-full-website`, read via `git show`, never checked out) or, for
Corporate Films, the one available draft template. Nothing was invented.

## 3. Architecture — component vocabulary, not 25 bespoke designs

Rather than hand-crafting 25 fully bespoke layouts (infeasible to verify responsibly
at this scale and batch-delivery pace), this milestone used a disclosed, pragmatic
approach: a small reusable component vocabulary in `assets/css/site.css` —
`.hero-dark`, `.hero-light`, `.svc-grid`/`.svc-card` (2/3/4-col), `.step-row` (3/4-col),
`.media-grid` (2/3-col), `.link-list`, `.close-cta`, `.review-note` — composed
per-page with real extracted content via a content-driven generator. Each page still
differs genuinely: real per-page copy, a hero treatment chosen by what the source
content actually implies (image vs. text), and varying section composition/order,
consistent with `DESIGN_SYSTEM.md` §3's rule against forcing one rigid template.
Every component carries explicit `.bg-charcoal`/`.bg-charcoal-alt` dark-section
overrides, verified against the same contrast standard as Milestone 1.

Section-background alternation (no two adjacent identical backgrounds) was maintained
on every page, same discipline as Milestone 1.

## 4. Bugs found and fixed during verification

Three real, user-impacting bugs were caught by the verification tooling before
delivery, not assumed-away:

1. **Broken final CTA on every generated page.** A positional-argument mismatch in the
   `close_cta()` component meant the real destination URL and the pending-message text
   were silently swapped — every page's closing "Get in Touch" button pointed at a
   404 built from message text. Caught by the full-site crawl's broken-link check;
   fixed by correcting the function signature to match all 18 call sites.
2. **Wrong hero-CTA behaviour on creative/production pages.** The hero's primary button
   was wired to intercept clicks with an unrelated "image pending" message instead of
   linking to the real Contact page, and used a hardcoded `../contact/` href that was
   wrong-depth on the two Production Services India subpages. Fixed: the button now
   links directly to a real, depth-correct Contact URL, with no interception, and is
   omitted entirely on the one page (Films) whose source has no hero CTA.
3. **Sub-threshold contrast on numeric service-grid labels.** `#6b7378` passed (barely)
   against plain white but measured 4.34:1 — under the 4.5:1 AA threshold — against the
   slightly darker `--paper` background used throughout these pages. Fixed by changing
   to `#5c6267` (5.56:1 on paper), applied consistently in both `site.css` and
   `creative-productions.css`.

## 5. Verification performed

- **Full-site Playwright crawl, all 27 live routes**: HTTP status, horizontal overflow,
  console errors, and every non-pending internal link resolved via `page.request.get()`.
  Result after fixes: **0 issues** — 0 bad statuses, 0 overflow, 0 console errors,
  0 broken links.
- **Lighthouse (real CLI runs, headless Chromium), 8 sampled pages** — home,
  creative-productions, ad-films, ppc, about, crew-equipment, contact, work:
  **100 Performance / 100 Accessibility / 96 Best Practices** on every sampled page.
  (SEO remains capped by the intentional `noindex,nofollow` on this unreleased build,
  as in Milestone 1.)
- **Visual spot-check (desktop screenshots)**: ad-films, ppc, about, contact — all
  confirmed clean (correct archetype, correct section alternation, correct blue
  emphasis, no overlap/clipping, correct honest-placeholder rendering).

## 6. What's in this review build

All 25 pages listed in §2, plus the nav/link updates in `index.html` and
`creative-productions/index.html` that connect to them (relative paths, no more
`data-pending` on links whose targets now exist). `screens/` has four new desktop
screenshots. Committed to `pathway-v3-rebuild` only (commit `6baf293`); `Pathwebsite`
and `Pathwaywebsite` were not modified; nothing deployed.

**Remaining gap**: Explainer Videos and Music Video Production (§1) — still pending
real source content/brief from the client before they can be built honestly.
