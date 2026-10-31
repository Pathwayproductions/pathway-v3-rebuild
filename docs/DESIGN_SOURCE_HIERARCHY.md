# Design Source Hierarchy — V3 Visual Refinement

This document is the standing rulebook for how the reference material is used on
this rebuild. It applies to every page, including the 27 already built. It is
binding for `docs/29_PAGE_DESIGN_MAPPING.md` and for any implementation that
follows its approval.

**Update (visual implementation phase):** a third reference tier was added below
(§1c) for storytelling/compositional inspiration, plus a standing imagery/art-
direction brief (§7) covering the kind of photography every page should imply.
Both apply from this point forward, including to the two representative pages
(Corporate Films, Amazon Advertising) built in this pass.

## 1. The reference types, and what each governs

### Primary reference — Approved V3 Homepage

**File:** `reference/APPROVED_HOMEPAGE_V3.html`

This is the final, approved visual-identity authority for the entire site. It alone
governs, on every page:

- Typography — serif/sans combinations, heading hierarchy, weights, sizes, line
  heights, editorial treatment.
- Blue accents — the approved blue palette, used selectively on words/phrases,
  links, accents and buttons, never as blanket heading color.
- Background colors — white, light grey, charcoal, per the V3 tokens.
- Contrast rules for text in light and dark sections.
- Buttons/CTAs — styling, borders, colors, hover behavior.
- Navigation, footer, spacing, borders, dividers, overall brand appearance.
- Visual quality bar — cinematic, premium, editorial, uncluttered.

The approved homepage itself stays unchanged except for technical fixes that
preserve its visual fidelity.

### Secondary references — Six earlier approved templates

**Source:** `Pathwayproductions/Pathwebsite`, read-only, branch
`design/chatgpt-full-website`, folder `design-system/templates-approved/`.

| ID | Family | Approved representative | Application |
|---|---|---|---|
| T1 | Division & Service Hub | Creative Productions | Large service signposts; imagery tailored per division |
| T2 | Film-First Storytelling | Corporate Films | Wide film-led hero, client-centred narrative, real work/storyboard |
| T3 | Production & Resource Scope | Crew & Equipment | Operational resource rows, a practical brief, honest scope |
| T4 | Marketing & Outcomes | Amazon Advertising | Audience/placement/buyer-journey visualisation |
| T5 | Intelligence & Team Operations | Marketing Intelligence | Unified data, gaps, recommendations, cross-team actions |
| T6 | Editorial & Enquiries | Contact | Contact form, or an About/Blog/Careers content-listing variant |

These six are used **only** for:

- Section composition and content grouping.
- Column structures and alignment.
- Image/text positioning.
- Hero composition and proportions.
- Visual hierarchy within a section.
- Content flow and section arrangement.
- Placement logic for portfolios, services, processes, CTAs.

They are explicitly **not** used for: typography or font styles, font colors or
blue accents, background colors, button colors/styling, navigation/footer styling,
decorative color schemes, or overall visual identity. Where the old repo's own
`design-system/APPROVED-DESIGN.md` describes a different locked system (flat white,
a lighter blue `#4BB4CE`, no charcoal sections), that spec is superseded for this
rebuild — it's noted here only so it's not mistaken for current direction.

**If the two ever conflict, the approved V3 homepage wins on anything visual.**

### 1c. Tertiary reference — Creative Productions V3 Revised HTML

**File:** `reference/Pathway_Creative_Productions_V3_Revised_HTML.html` — **not yet
available in this repository or uploaded to this session.** This section documents
how it will be used once supplied; nothing below depended on reading it.

This file is **additional creative inspiration only**, one tier below the six
templates in authority. Use it for: storytelling structure, image integration
technique, asymmetric compositions, visual rhythm (how sections vary in size,
spacing and emphasis against each other), and more engaging/less mechanical
section arrangements than a flat grid.

Do **not** take its colors or typography if they differ from the approved
homepage — same rule as the six templates, stated explicitly because this file
is a "revised" design exploration and may carry its own palette or type choices
that were never approved.

Where it conflicts with the six templates on layout logic, the six templates
(tied to an actual approved batch) still win — this file is inspiration for
*how* to vary a composition, not a fourth authority that overrides the others.

## 2. How to combine them, per page

1. Study the relevant template (or the page's own existing Phase-1 structure, for
   Home/Ad Films/PPC) for section layout and alignment only.
2. Identify the best composition for *that page's actual content* — not a
   default layout applied regardless of what the page says.
3. Apply V3 homepage typography, selective blue accents, the white/paper/charcoal
   background palette, and approved button treatments.
4. Adapt the composition where needed so pages don't repeat each other.
5. Keep one consistent design language without making every page look identical.

**Worked example — Corporate Films:** use the Corporate Films template (T2) to
decide how hero, film showcase, service description and process sections are
composed and ordered. Style all of it with the V3 homepage's serif type, selective
blue emphasis, white/paper/charcoal backgrounds and approved buttons. Result: a
page that is visually unmistakably V3, with a composition shaped by its own
content rather than by the homepage's section order.

## 3. Background color rules

Approved palette only:

- White `#FFFFFF`
- Light grey (paper) `#F1F3F5`
- Charcoal `#292D31`
- Alternate charcoal `#30363B`, where it reads better against the adjacent block

Rules:

- Choose each section's background **individually**, based on its content,
  contrast need, imagery, and the page's visual rhythm.
- Do **not** mechanically repeat the homepage's six-section
  White→Paper→Charcoal→White→Paper→Charcoal sequence on every other page.
- No two adjacent sections share a background — avoid visual merging.
- A page with fewer real content blocks gets fewer sections, not padding to hit a
  "standard" count.

## 4. Typography and blue-accent rules

- V3 typography throughout: the approved serif/sans pairing, scale, and weights.
- Blue is selective — meaningful words/phrases within a heading, links, and key
  interactive elements (buttons). Never color an entire heading blue by default.
- No fonts or blue values from the older templates. Only the approved V3 tokens
  (including the accessible `--blue-text` variant used for all text-role blue, per
  the contrast work already verified in Milestones 1–2).
- Accessible blue variants apply wherever contrast requires it, without changing
  the approved visual character.

## 5. Anti-repetition rule

Do not build every page as: text-only hero → 3/4-col service grid → process row →
closing CTA. That combination is a trap this family of pages (especially the
Digital Marketing sub-pages) can fall into by default, since many share a similar
content shape (service explanation + CTA).

Where content justifies it, vary the composition: full-width cinematic sections,
asymmetric image/text splits, editorial two-paragraph blocks instead of a grid,
horizontal project/film showcases, process timelines, disclaimer/callout blocks,
link-list closes instead of a card grid, or omitting a section type a page's real
content doesn't support (no invented padding).

Shared CSS components exist for efficiency — they must not be allowed to dictate
identical page layouts. A component is reused; a layout is not copy-pasted.

## 6. Design review gate

No site-wide (re)build proceeds without an approved page-by-page mapping first.
That mapping is `docs/29_PAGE_DESIGN_MAPPING.md` in this same commit. It must be
reviewed and approved before any HTML/CSS implementation begins on this branch.
After approval, implementation starts with six representative pages — Creative
Productions, Corporate Films, Amazon Advertising, Marketing Intelligence, Contact,
plus one more agreed at approval time — with desktop and mobile previews, before
the remaining pages proceed.

`main`, the original `Pathwebsite` repository, and the live website stay untouched
until that approval is given.

**Checkpoint added this pass:** after the design-source hierarchy and the 29-page
mapping are approved, implementation proceeds two representative pages at a time
(this pass: Corporate Films + Amazon Advertising), not all six at once — each pair
stops for review before the next proceeds.

## 7. Imagery and art-direction brief

This governs every new image placeholder and, later, every approved image asset
across the site — not just the two pages in this pass.

**Tone:** positivity, creativity, progress, human connection. Film-production
pages lean photorealistic/cinematic; Digital Marketing pages combine
photorealistic and conceptual visuals where appropriate (e.g. a conceptual
audience/data visual alongside a real person).

**What every image should carry, where the subject calls for people:**

- Authentic Indian and predominantly South Indian people.
- Natural sunlight, greenery, welcoming environments.
- Creative discussions, collaboration, teamwork.
- Workspace details where appropriate — coffee mugs, desks, everyday texture.
- Physical action, dynamic movement, purposeful activity (not posed stillness).
- Genuine smiles, laughter, achievement, accomplishment.
- Natural expressions, believable interactions, realistic environments.

**Avoid:** generic stock photography, the same camera/production-gear shot reused
across pages, artificial-looking (AI-generic) people, excessive darkness, sterile
corporate visuals, isolated product shots, staged line-ups.

**Provenance and approval:** final image assets come from a separate ChatGPT-led
concept/generation pipeline (see `docs/IMAGE_ART_DIRECTION.md` for the asset-record
schema and per-page visual priorities) and are approved by the client per asset —
no image is approved by virtue of appearing in a prototype. Until assets arrive,
every image slot on this rebuild is a clearly labelled placeholder describing what
the image should show (subject, lighting, mood) — never a stand-in stock photo and
never a fabricated "finished" image.

## Final rule

**V3 Homepage = visual identity and styling authority.**
**Six earlier templates = section-layout and alignment references only.**
**Individual page content = determines the appropriate composition.**

These three responsibilities stay separated throughout.
