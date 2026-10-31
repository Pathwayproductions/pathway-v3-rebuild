# Design Source Hierarchy — V3 Visual Refinement

This document is the standing rulebook for how the two kinds of reference material
are used on this rebuild. It applies to every page, including the 27 already built.
It is binding for `docs/29_PAGE_DESIGN_MAPPING.md` and for any implementation that
follows its approval.

## 1. The two reference types, and what each governs

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

## Final rule

**V3 Homepage = visual identity and styling authority.**
**Six earlier templates = section-layout and alignment references only.**
**Individual page content = determines the appropriate composition.**

These three responsibilities stay separated throughout.
