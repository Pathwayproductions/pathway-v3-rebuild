# Pathway Productions — Website Rebuild Design System v1.0

**Status:** Approved visual direction. The reference homepage is locked. Applies to the other 28 pages in the 29-page website.

## 1. Source of truth and scope
- `reference/APPROVED_HOMEPAGE_V3.html` is the **exact approved homepage**. Preserve its copy, structure, imagery, typography, layout, colour sequence, and interactions. Do not replace it with a generated interpretation.
- Source content and existing information architecture come from the existing 29-page drafts on `Pathwayproductions/Pathwebsite`, branch `design/chatgpt-full-website`. Inventory the actual pages before coding; do not invent missing content or projects.
- Rebuild the other pages in the same **editorial visual language**, not the same section layout.
- Deliver a separate, reviewable website, never deploy or merge to production without explicit approval.

## 2. Brand palette
| Token | Colour | Role |
|---|---|---|
| White | `#FFFFFF` | Spacious, editorial, image-forward sections |
| Light gray | `#F1F3F5` | Soft contrast; information and structured content |
| Charcoal | `#292D31` | Cinematic contrast, work showcases, prominent CTA sections |
| Alternate charcoal | `#30363B` | Tonal depth where needed, **not adjacent to another charcoal section** |
| Pathway blue | `#269CC2` | Selective headline emphasis, links, understated dividers and action cues |
| Ink | `#292D31` | Text on light surfaces |
| Muted text | `#666D70` | Secondary text on light surfaces |

These are working tokens grounded in the approved HTML and subsequent light-gray variant. Use contrast-checked accessible shades of blue where small text requires it; do not sacrifice readability to preserve an exact accent shade.

## 3. Section colour composition
- Each page chooses its own section sequence based on imagery, text density, CTA prominence and contrast. **Do not impose a universal White → Gray → Charcoal pattern.**
- Never place two large sections of the same background consecutively without a deliberate visual transition. In particular, avoid back-to-back charcoal sections.
- Aim for visually distinct neighbouring sections; use image-led transitions or white space when a page calls for nuance.
- The approved six-section homepage uses **White → Light Gray → Charcoal → White → Light Gray → Charcoal**, two occurrences of each. **This 2× balance is locked for the homepage only**, not a universal requirement for pages with different numbers of sections.
- Choose backgrounds for the content they hold: white for detailed imagery, gray for structured service/process blocks, charcoal for cinematic portfolio or strong closing CTA. These are guides, not rigid assignments.
- On charcoal: headings white with selective accessible blue accent, supporting text pale gray; controls and icons must have clear contrast.
- On light surfaces: headings ink, supporting text muted, blue used sparingly to draw attention.
- Avoid generic card grids when a full-bleed image, editorial split or clean list conveys the content better.

## 4. Typography and Pathway blue
- Preserve the approved homepage's typographic personality: large, elegant editorial headlines, confident whitespace, restrained small uppercase section labels, readable body text. **Inspect the actual reference HTML to identify font-family and weights** rather than substituting a generic sans-serif system.
- Apply selective blue to a meaningful phrase **within** a headline, not to entire headings or randomly scattered words. Example pattern: `Stories that <accent>move people.</accent>`; use page-specific copy, not this example by default.
- Keep the blue share visually restrained: typically one blue-emphasised phrase per major headline and occasional blue line/arrow/CTA accent. Do not turn whole pages blue.
- Use blue for active navigation, functional links, subtle rules and purposeful icons only where helpful. Avoid repeated bright blue boxes or large decorative blue panels.
- Maintain clear H1/H2/H3 hierarchy, responsive line lengths, and sufficient colour contrast (WCAG AA for body text).

## 5. Imagery and hero art direction
- Every page must have meaningful, positive, distinctive imagery relevant to that service. No placeholder camera reused across multiple pages.
- Heroes should be **wide, naturally integrated, cinematic compositions**, with sufficient negative space for headline and CTA. Prefer real crews, authentic locations, natural daylight and plausible working activity. Avoid isolated product shots, staged line-ups and AI-looking crowds.
- The hero should read as **one coherent banner image**; do not create two disconnected side-by-side boxes where the approved homepage uses integrated imagery.
- Crop intentionally across desktop/tablet/mobile. Use `object-fit: cover`, focal-point controls and art-directed mobile crops where necessary; never obscure important subjects or text.
- For process and benefits sections, align titles, icons and supporting text on a consistent baseline/grid. Icons are permitted when meaningful and visually coherent, not as filler.
- Asset provenance: distinguish existing licensed/owned Pathway images from new AI-generated concepts. AI images must be reviewed and approved before production publication.

## 6. Content, links, and video
- Preserve the meaning of the 29 drafted pages; no invented case studies, clients, metrics, awards, testimonials or video durations.
- Inventory the existing public site, WordPress export when available, and the user's YouTube channel. Verify **each** video URL before placing it. Record `source_url`, `video_url`, title, thumbnail, page, and verification status.
- If no verified video exists, use a clearly labelled pending link in the internal review build, not a fake playable button.
- Make CTAs contextual. Maintain navigational consistency and functional internal links.

## 7. Page archetypes: reusable language, different compositions
- Film / Creative Production: wide on-set hero; portfolio video strip; cinematic image-led editorial sections.
- Corporate Films: credible workplace/location imagery; project-led evidence; clarity and trust.
- Crew & Equipment: larger real crew at work, logistics and practical production capability; avoid repetitive cameras.
- Digital Advertising / Amazon: relevant marketplace and audience context, campaign thinking; no unrelated film imagery.
- Marketing Intelligence: analysis, decision-making, team collaboration and legible data visualization; no generic fake dashboard metrics.
- Contact: approachable, restrained imagery; accessible and functional form; no decorative clutter.
- Remaining pages: classify based on content and design deliberately; do not force one of these six layouts onto every page.

## 8. Performance-first implementation
- Use a maintainable component system and shared design tokens; avoid embedding large base64 photographs in production HTML.
- Export final approved images to responsive AVIF/WebP (with fallbacks where necessary), with explicit width/height, appropriate `srcset`/`sizes`, and compression. Keep source masters separately.
- Prioritise the hero/LCP image, preload only if warranted, and lazy-load below-the-fold images and video embeds. Use click-to-load video thumbnails instead of loading every YouTube iframe immediately.
- Minimise JavaScript, third-party tags, font weights and CSS bloat. Cache static assets; use code splitting where appropriate.
- Set performance acceptance targets: **LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1** at the 75th percentile of real-user data, where measurable. Lab Lighthouse mobile ≥ 90 is an aspirational quality gate, not a guarantee.
- Ensure semantic HTML, keyboard navigation, visible focus, descriptive alt text, valid forms, heading hierarchy and responsive layouts.
- Carry over useful SEO: title/meta, canonical, OG tags, sitemap, robots, structured data and old-to-new URL redirects; validate against existing WordPress/SEO inventory before migration.

## 9. Review / acceptance gates
1. Inventory all 29 source pages and map old URLs; mark unknowns.
2. Preserve the approved homepage unchanged as the visual reference.
3. Build one representative non-homepage page and compare it side-by-side against V3; obtain design approval before scaling.
4. Rebuild all 29 pages in an isolated review branch/repository, with working navigation and responsive design.
5. Deliver a **clickable HTML preview** or deployable private staging URL plus a ZIP of static review files. Include page inventory, image manifest, video link manifest, unresolved issues and performance report.
6. Do not overwrite the live site or merge to main until approved.

## 10. Quality-control checklist
- [ ] Unique, context-specific imagery on every page; no repeated camera visual
- [ ] Wide integrated hero, purposeful subject placement and mobile crop
- [ ] Blue headline emphasis visible but restrained
- [ ] No adjacent visually indistinguishable sections
- [ ] Icons meaningful, aligned and consistent
- [ ] Text/image sections fully readable with no clipping or accidental overlap
- [ ] All 29 pages accessible from preview; no dead internal links
- [ ] Every video destination verified or flagged pending
- [ ] Page metadata, semantic structure and redirect plan reviewed
- [ ] Mobile, tablet and desktop QA; performance budget checked
