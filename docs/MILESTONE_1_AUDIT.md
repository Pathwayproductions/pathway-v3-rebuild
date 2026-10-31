# Milestone 1 — Audit, Architecture & Review Notes

Scope: audit the 29 source pages, establish the shared design system/architecture,
implement the approved V3 homepage, rebuild Creative Productions, provide browser
previews. Per instruction, work stops here for approval before the remaining 27 pages.

## 1. Source page inventory (`Pathwebsite`, branch `design/chatgpt-full-website`)

Read-only audit via `git fetch` + `git ls-tree` + `git show` against
`origin/design/chatgpt-full-website` — the branch was never checked out, so the
original repository was not modified.

**25 live routes exist** (`index.html` under a URL-shaped folder) across batches:
- Phase 1 (3): Home, Ad Films, PPC/Digital Marketing — the original prototype pages.
- Batch A2 (6), B1 (5), B2 (6), C (5) = 22 — live and present.
- **Batch A1 (4) has no live route folder**: Creative Productions, Corporate Films,
  Explainer Videos, Music Video Production. Per `design-system/templates-approved/README.md`
  these 4 were planned (giving the stated 29-page total: 26 planned + 3 Phase‑1), but only
  exist today as **template/draft files** under `design-system/templates-approved/`
  (`T1-Creative-Productions.html` … `T6-Contact.html`), not as deployed-shaped pages.

**Flag:** Creative Productions — the page this milestone rebuilds — is one of the four
"planned but not live" pages. `T1-Creative-Productions.html` was used as the only real
source for its copy, structure and service list (read via `git show`, base64 hero image
stripped out for inspection, confirmed not reused).

**Flag — two different "locked" design systems exist across the two repos.** The old
repo's own `design-system/APPROVED-DESIGN.md` describes a different locked system: flat
white background only, a much lighter blue (`#4BB4CE`), and explicit rejection of
charcoal/black tile sections. The new repo's `APPROVED_HOMEPAGE_V3.html` /
`docs/DESIGN_SYSTEM.md` is materially different: alternating White → Light Gray →
Charcoal sections and a stronger blue (`#269CC2`). Per your current instructions, V3 is
authoritative for this rebuild — this is noted so you're aware two specs exist, in case
that matters for other stakeholders.

## 2. Implementation stack & performance budget

Zero-build static HTML/CSS/vanilla JS (matches the existing site's own approach — no
framework to install, nothing to compile, trivial to preview or hand off):

- `assets/css/base.css` — shared design system: tokens, reset, type scale, header/nav,
  buttons, footer, section-background utility classes, and the two "honest placeholder"
  patterns (missing image / unverified video) carried over from established house style
  and required by `DESIGN_SYSTEM.md` §6.
- `assets/css/home.css`, `assets/css/creative-productions.css` — page-specific
  composition only (each page uses a distinct archetype per §7, not a shared layout).
- `assets/js/main.js` — mobile nav toggle + pending-route interception (any link to one
  of the other 27 not-yet-built pages shows a dismissible banner instead of 404ing or
  faking a destination).
- Budget target (per `DESIGN_SYSTEM.md` §8): LCP ≤2.5s, CLS ≤0.1, Lighthouse mobile ≥90.
  **Actual, measured** (`npx lighthouse`, headless Chromium, this environment):

  | Page | Performance | Accessibility | Best Practices | SEO | LCP | CLS |
  |---|---|---|---|---|---|---|
  | Home | 100 | 100 | 96 | 66 | 1.2s | 0 |
  | Creative Productions | 100 | 100 | 96 | 63 | 0.9s | 0 |

  SEO is capped only by the intentional `robots: noindex,nofollow` on this unreleased
  review build — expected to clear once a page is approved for indexing.

## 3. Homepage visual-parity verification

`reference/APPROVED_HOMEPAGE_V3.html` was diffed structurally against `index.html`:
section order, copy, link targets, and the six-section colour sequence
(White → Light Gray → Charcoal → White → Light Gray → Charcoal) all match. The only
substantive change is swapping the inline base64 hero image for a real `.jpg`/`.webp`
file pair, per `DESIGN_SYSTEM.md` §8 ("avoid embedding large base64 photographs in
production HTML"). Verified with Playwright (full-page desktop + mobile screenshots,
zero horizontal overflow, zero console errors) and real Lighthouse runs (above).

## 4. Image / video gaps

- **Homepage hero** — real asset extracted from the approved reference (846×410 JPEG).
  **Flag:** this source is low-resolution for a full-bleed desktop hero; it will look
  soft above ~1000px display width. Treat it as preview-quality for this milestone;
  request a higher-resolution master before this ships.
- **Creative Productions hero (`IMG-001`)** — not yet supplied (manifest:
  `approval_status = pending`). Built as a CSS placeholder labelled "HERO · IMAGE
  PENDING (IMG-001)" — no fake or stock photo substituted.
- **Portfolio stills (We Box, NTrust)** — no real stills exist yet; placeholders labelled
  "PROJECT STILL · TO BE SUPPLIED", matching the only real source content (`T1`).
- **Showreel video (`VID-001`)** — no verified YouTube/Vimeo URL on file. Built as a
  clearly labelled pending block, not a fake playable button, per `DESIGN_SYSTEM.md` §6.

## 5. What's in this review build

- `index.html` — V3 homepage, faithful rebuild.
- `creative-productions/index.html` — new page in the V3 editorial language (wide
  cinematic hero, 2×2 service grid, portfolio/showreel strip, link list, closing CTA —
  a distinct composition from the homepage, per `DESIGN_SYSTEM.md` §3/§7).
- `screens/` — Playwright desktop + mobile screenshots of both pages.
- All 27 other pages' internal links are intercepted with a "not part of this review
  milestone yet" banner rather than left broken or faked.

Nothing has been deployed or merged; `Pathwebsite` and `Pathwaywebsite` were not modified.
