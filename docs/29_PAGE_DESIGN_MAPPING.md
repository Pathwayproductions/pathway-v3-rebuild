# 29-Page Design Mapping

Proposed section layouts, reference templates, backgrounds and asset requirements
for all 29 pages, per `docs/DESIGN_SOURCE_HIERARCHY.md`. This is a **proposal for
approval** — no HTML/CSS changes have been made on this branch yet.

Grounded in: the six approved templates' real section structure (read read-only
from `Pathwebsite`, `design-system/templates-approved/`), the old templates'
`README.md` (which assigns a template family to each 2026-10-30-approved batch),
and the real extracted copy of all 24 live routes already used to build Milestone 2.
Nothing below invents content — every section named is backed by real source text;
where a page has no real content for a section type, that section is omitted
rather than padded.

**Background key:** W = white `#FFFFFF` · P = paper/light-grey `#F1F3F5` ·
C = charcoal `#292D31` · CA = alternate charcoal `#30363B`

## Quick-reference table

| # | Page | Template family | Hero | Background rhythm |
|---|---|---|---|---|
| 1 | Home | — (V3 homepage itself) | image, light | W·P·C·W·P·C *(unchanged, approved)* |
| 2 | Ad Films | Phase-1 own structure | image, dark | C(hero)·W·P·W·CA |
| 3 | PPC | Phase-1 own structure | text, light | W(hero)·P·W·P·CA |
| 4 | Creative Productions | T1 *(approved by client — verify only)* | image, dark | C(hero)·P·C·W·CA |
| 5 | Corporate Films | T2 (approved rep) | image, dark | C(hero)·W·C·W·CA |
| 6 | Explainer Videos | — *(no content; proposed only)* | image, dark | C(hero)·W·CA |
| 7 | Music Video Production | — *(no content; proposed only)* | image, dark | C(hero)·W·CA |
| 8 | Production Services India | T1 family | image, dark | C(hero)·P·W·CA |
| 9 | Crew & Equipment | T3 (approved rep) | image, dark | C(hero)·W·P·CA |
| 10 | Film Production Management | T3 family | image, dark | C(hero)·W·P·CA |
| 11 | Film Marketing | T2/T4 hybrid | image, dark | C(hero)·P·W·CA |
| 12 | OTT Distribution | T2/T4 hybrid | image, dark | C(hero)·W·P·CA |
| 13 | Our Films | T2-portfolio, standalone | image, dark | C(hero)·W *(no CTA band — none in source)* |
| 14 | Digital Marketing (hub) | T1 family | text, light | W(hero)·P·C·P·CA |
| 15 | SEO & AI Search | T4 family | text, light | W(hero)·P·W·CA |
| 16 | Social Media | T4 family | text, light | W(hero)·P·W·CA |
| 17 | Qualified Leads | T4 family (richer) | text, light | W(hero)·W·P·W·CA |
| 18 | Amazon Advertising | T4 (approved rep) | text, light | W(hero)·P·W·CA |
| 19 | E-commerce | T4 family | text, light | W(hero)·P·W·CA |
| 20 | Industries | T4 family (lighter) | text, light | W(hero)·P·W·CA |
| 21 | Managed Services | T4 family | text, light | W(hero)·P·W·CA |
| 22 | Strategic Consulting | T4 family | text, light | W(hero)·P·W·CA |
| 23 | Marketing Intelligence | T5 (approved rep) | text, light | W(hero)·P·W·CA |
| 24 | Build–Operate–Transfer | T4 family (lighter) | text, light | W(hero)·P·W·CA |
| 25 | Our Work | T6/T2-portfolio blend | text, light | W(hero)·W·P·CA |
| 26 | About | T6 family *(already built — verify only)* | text, light | W(hero)·P·W·CA |
| 27 | Blog | T6 family | text, light | W(hero)·P·W *(no CTA band)* |
| 28 | Careers | T6 family | text, light | W(hero)·P·W *(no CTA band)* |
| 29 | Contact | T6 (approved rep) *(already built — verify only)* | text, light | W(hero)·P *(no CTA band — is the destination)* |

Note on rhythm: no page repeats the homepage's exact W·P·C·W·P·C sequence, and no
two adjacent sections on any page share a background, per §3 of the hierarchy doc.

---

## Phase 1 — own existing structure (not T1–T6)

### 1. Home
Reference: the approved V3 homepage itself — primary authority, unchanged.
Already built and approved (Milestone 1). No change proposed.

### 2. Ad Films
**Reference:** its own Phase-1 content/structure, V3-styled (not one of the six
templates — README marks Home/Ad Films/PPC as pre-existing Phase-1 pages).
**Hero:** dark, image-led — "You Have a Lot to Say. Your Audience Has Only a
Moment." + "View Selected Films" anchor.
**Sections, in order:**
1. Hero (C) — image.
2. "Stories We've Brought to Life" (W) — 3-item portfolio grid: We Box, Spice Hill,
   Fit & Flex.
3. "Different Stories, Different Formats" (P) — 3-col: Brand Films / Launch &
   Teaser Films / Short-Form Ads.
4. "From Brief to Final Cut" (W) — 4-step process: Discover / Develop / Produce /
   Finish.
5. Closing CTA (CA) — "Let's Begin with Your Story."
**Assets needed:** hero still/loop, 3 project stills (We Box, Spice Hill, Fit &
Flex) — all currently placeholder.
**Differs from others:** only page combining a portfolio grid, a format grid, and
a 4-step process — reflects its flagship Phase-1 status; richest structure on the
production side.

### 3. PPC
**Reference:** its own Phase-1 structure, V3-styled.
**Hero:** light, text-only — "Every Click Has a Cost. What Happens Next Matters
More."
**Sections:**
1. Hero (W).
2. "Where We Advertise" (P) — 3-col: Google Ads / Meta Advertising / Amazon Ads.
3. "What We Pay Attention To" (W) — 3-col: Audience / Experience / Lead Quality.
4. "Marketing in Practice" (P) — results-placeholder editorial block ("Verified
   campaign examples... will be added here").
5. Closing CTA (CA) — "Let's Look Beyond the Click."
**Assets needed:** none (icon-led, no photography implied).
**Differs:** the only page whose third section is explicitly a pending-evidence
block rather than a grid or process row.

---

## Batch A1 — Creative Productions, Corporate Films, Explainer Videos, Music Video Production

### 4. Creative Productions — T1 (approved representative)
**Status:** already built and approved by the client (Milestone 1). Recommend
**verify, don't rebuild** — re-check only against the refined blue/background
rules in this document once they're approved, since it predates this brief.
**Current structure (for reference):** Hero (C, image) → "Bringing Ideas to Life"
4-card service grid (P) → "Stories We've Brought to Life" portfolio (C) →
"Beyond Filmmaking" link-list (W) → Closing CTA (CA).

### 5. Corporate Films — T2 (approved representative)
**Hero:** dark, wide film-led image — "Every Organisation Has a Story Beyond What
It Does."
**Sections:**
1. Hero (C) — image.
2. "What Your Corporate Film Can Show" (W) — editorial split, 3 formats.
3. "Stories We've Helped Tell" (C) — portfolio/work strip.
4. "From Your Brief to a Finished Film" (W) — process timeline.
5. Closing CTA (CA) — "Your Organisation Has a Story."
**Assets needed:** hero still, 2+ project stills for the portfolio strip.
**Differs from Creative Productions (T1):** single-column narrative intro instead
of a 4-card grid; process section sits after the portfolio, not interleaved with
services — T1 is a *hub*, T2 is a *narrative*.

### 6. Explainer Videos — no suitable template, no source content
**Flag:** no live page and no draft template exist anywhere for this page — only
its name appears as a link. Per your decision in Milestone 2, this page was
skipped rather than invented.
**Proposed structure** (analogy only, from the closest content family — T2
film-format storytelling, since it's a production/video-format offering like
Corporate Films and Ad Films): dark image hero → format/benefit explanation
section → examples section (pending) → closing CTA. **This cannot be finalized
or built until real source copy or a brief is supplied** — listed here only so a
composition exists once content arrives.

### 7. Music Video Production — no suitable template, no source content
Same flag as Explainer Videos. Proposed analog: T2 family, likely a more
visually energetic dark hero given the subject, structure otherwise mirroring
Explainer Videos' placeholder shape above. **Pending brief/content before any
build.**

---

## Batch A2 — Production Services India, Crew & Equipment, Production Management, Film Marketing, OTT Distribution, Our Films

### 8. Production Services India (hub) — T1 family
**Hero:** dark, image — "Your Production in India. Our People on the Ground."
**Sections:**
1. Hero (C) — image.
2. "Different Productions, Different Requirements" (P) — 2-card signpost: Crew &
   Equipment Support / Film Production Management.
3. "Supporting Your Production Journey" (W) — 3-step: Share the brief / Define
   support / Coordinate locally.
4. Closing CTA (CA) — "Let's Plan Your Shoot in India."
**Assets needed:** hero still.
**Differs from Creative Productions (also T1):** only 2 signposts, not 4 (content
has 2 sub-services, not 4) — no portfolio section, since the source has none.

### 9. Crew & Equipment Support — T3 (approved representative)
**Hero:** dark, image — "Bring Your Vision. Find the Right Support Here."
**Sections:**
1. Hero (C) — image.
2. "The Resources Your Shoot Requires" (W) — operational resource list/grid.
3. "You Bring the Brief. We Define the Support." (P) — editorial split.
4. Closing CTA (CA) — "Tell Us About Your Shoot."
**Assets needed:** hero still (equipment/crew on-set).

### 10. Film Production Management — T3 family
**Hero:** dark, image — "Your Vision. Our Collaborative Approach."
**Sections:**
1. Hero (C) — image.
2. "From Script to Screen" (W) — 3-col: Creative Pre-Production / Planning &
   Management / Transparency & Communication.
3. "More Than Production Coordination" (P) — 3-col: Explore / Manage / Report.
4. Closing CTA (CA) — "Let's Bring Your Vision to Life in India."
**Assets needed:** hero still (planning/script context, distinct subject from
Crew & Equipment's hero so the two T3 pages don't read as the same photo).
**Differs from Crew & Equipment:** same family rhythm by design (README groups
them together), distinguished by content and hero subject, not by structure.

### 11. Film Marketing — T2/T4 hybrid
Content is promotion/reach-oriented (T4: Marketing & Outcomes), but the subject
is film-adjacent, so the dark cinematic hero is kept rather than switching to the
light/text hero used by pure digital-marketing pages. Flagged as a deliberate
hybrid, not a misclassification.
**Hero:** dark, image — "A Film Needs an Audience Beyond the Screen."
**Sections:**
1. Hero (C) — image.
2. "Every Film Has a Different Audience" (P) — 3-col: Story & Genre / Language &
   Geography / Timing & Format.
3. "From Trailer to Audience" (W) — 4-col: Trailer & Video Promotion / Social
   Media Advertising / Release Awareness / Campaign Measurement.
4. Closing CTA (CA) — "Let's Find Your Film's Audience."
**Assets needed:** hero still (trailer/promo context).

### 12. OTT Distribution Facilitation — T2/T4 hybrid
**Hero:** dark, image — "Your Film Is Ready. Let's Explore Its Next
Possibilities."
**Sections:**
1. Hero (C) — image, with an "illustrative eligibility check" disclaimer line.
2. "How We May Assist" (W) — 4-col process: Initial Eligibility Review /
   Submission Coordination / Delivery Preparation / Communication & Follow-Up.
3. "Submission Is Not Acceptance" (P) — **plain editorial text block, not a
   grid** — the disclaimer content reads as prose, not a list.
4. Closing CTA (CA) — "Exploring OTT Options for Your Film?"
**Assets needed:** hero still.
**Differs:** the only page in this family using a plain-editorial disclaimer
section instead of a card grid — direct application of the anti-repetition rule.

### 13. Our Films — standalone, no exact template match
Content is literally two film entries with no services, process, or CTA section
in the source — the sparsest page on the site. No invented sections.
**Hero:** dark, image — "Stories We Choose to Tell."
**Sections:**
1. Hero (C) — image.
2. Large horizontal showcase, two entries side by side or stacked (W) — Carmeni
   Selvam and Kurai Ondrum Illai, each with a still, synopsis, and "Film
   details ↗ / Trailer ↗" links marked pending ("links will be activated when
   film-approved materials are available").
3. **No closing CTA band** — none exists in the source; adding one would be
   inventing content.
**Assets needed:** 2 film stills, trailer links (both pending real assets).
**Differs:** shortest, most atypical page on the site — intentionally sparse
rather than padded to match other pages' length.

---

## Batch B1 — Digital Marketing, SEO/AI Search, Social, Qualified Leads, Amazon Advertising

### 14. Digital Marketing (hub) — T1 family
**Hero:** light, text-only — "Reaching People Is One Thing. Reaching the Right
People Is Another."
**Sections:**
1. Hero (W).
2. "Different Goals, the Right Marketing Approach" (P) — 4-col signpost: PPC &
   Paid Advertising / SEO & AI Search / Social Media Management / Qualified Lead
   Generation.
3. "Beyond Clicks and Impressions" (C) — asymmetric editorial split.
4. "Different Businesses, Different Engagements" (P) — 4-col signpost: Managed
   Marketing / Strategic Consulting / Marketing Intelligence / Build–Operate–
   Transfer, plus an E-commerce link-out line.
5. Closing CTA (CA) — "Let's Understand Your Marketing Challenge."
**Assets needed:** none (text-led hub, no photography implied by this content).
**Differs from Creative Productions (also T1):** text-only hero, two separate
signpost grids instead of one, a charcoal asymmetric split in the middle instead
of a portfolio strip.

### 15. SEO & AI Search — T4 family
**Hero:** light, text — "Be Easier to Find When People Are Looking."
**Sections:**
1. Hero (W).
2. "Make Your Website Worth Discovering" (P) — 4-col: Technical SEO / Content &
   Search Intent / AI Search Readiness / Measurement & Improvement.
3. "Visibility Begins with Relevance" (W) — 3-col editorial: What People Need /
   What Your Site Offers / What Matters.
4. Closing CTA (CA) — "Let's Improve How People Find You."
**Assets needed:** none.

### 16. Social Media — T4 family
**Hero:** light, text — "Being Present Is Easy. Being Relevant Takes Thought."
**Sections:**
1. Hero (W).
2. "Give Every Post a Purpose" (P) — 4-col: Content Strategy & Planning /
   Creative Development / Publishing & Management / Performance Review.
3. "From Idea to Insight" (W) — **plain editorial paragraph, not a grid** (source
   is a single reflective point, not a list).
4. Closing CTA (CA) — "Let's Make Your Social Presence More Meaningful."
**Assets needed:** none.
**Differs:** plain-editorial second section instead of a grid.

### 17. Qualified Lead Generation — T4 family, richer (3 content sections)
**Hero:** light, text — "More Leads Don't Always Mean Better Business
Opportunities."
**Sections:**
1. Hero (W).
2. "What Makes a Lead Valuable?" (W) — 4-up (H4-level): Right Audience / Genuine
   Interest / Trackable Enquiry / Sales Perspective.
3. "From Enquiries to Insights" (P) — 4-step funnel row: Reach / Enquiry / Qualify
   / Improve.
4. "Proof Comes from Real Campaigns" (W) — results-placeholder editorial (same
   pattern as PPC's).
5. Closing CTA (CA) — "Let's Talk About Lead Quality."
**Assets needed:** none.
**Differs:** three content sections instead of the usual two for this family —
richest Digital Marketing sub-page, justified by its real content depth.

### 18. Amazon Advertising — T4 (approved representative)
**Hero:** light, text — "Reach People Across Amazon's Wider Ecosystem."
**Sections:**
1. Hero (W).
2. "Three Ways to Reach an Audience" (P) — 3-col: Amazon-Owned & Operated /
   Third-Party Publishers / Delivery & Packaging.
3. "Go Beyond a Basic Demographic" (W) — asymmetric split + a review-note callout
   flagging the copy as provisional pending the client's Amazon presentation.
4. Closing CTA (CA) — "Build Around the Audience."
**Assets needed:** none. **Copy gate:** per the old README, final offering copy
is pending the client's Amazon presentation — keep the review-note until that's
supplied.

---

## Batch B2 — E-commerce, Industries, Managed Services, Consulting, Marketing Intelligence, Build–Operate–Transfer

### 19. E-commerce Marketing — T4 family
**Hero:** light, text — "From Product Discovery to Purchase."
**Sections:**
1. Hero (W).
2. "One Customer Journey, Four Areas of Focus" (P) — 4-col: Customer Acquisition
   / Product & Brand Visibility / Remarketing / Performance Measurement.
3. "A Strategy Shaped by Your Store" (W) — short editorial + cross-link to Amazon
   Advertising.
4. Closing CTA (CA) — "Every Product Has a Different Buying Journey."
**Assets needed:** none.

### 20. Industries We Serve — T4 family, lighter
**Hero:** light, text — "Different Industries. Different Conversations."
**Sections:**
1. Hero (W).
2. "Understand the Decision Before the Channel" (P) — 3-col (not 4 — content has
   3 verticals): Education / Property / Products.
3. "Every Brief Is Considered on Its Own Terms" (W) — plain editorial.
4. Closing CTA (CA) — "Tell Us About Your Market."
**Assets needed:** case-study imagery explicitly deferred per source note ("only
where publication permission and verified details are available") — none for now.
**Differs:** 3-col not 4-col, plain-editorial close instead of a grid.

### 21. Managed Marketing Services — T4 family
**Hero:** light, text — "Your Marketing Objectives. Our Shared Responsibility."
**Sections:**
1. Hero (W).
2. "From Planning to Performance" (P) — 4-col: Strategy & Planning / Campaign
   Execution / Monitoring & Optimisation / Transparent Reporting.
3. "Part of the Conversation, Not Apart from It" (W) — editorial + cross-link to
   Strategic Consulting.
4. Closing CTA (CA) — "A Model Built Around Your Needs."
**Assets needed:** none.

### 22. Strategic Consulting — T4 family
**Hero:** light, text — "Your Team. A Broader Marketing Perspective."
**Sections:**
1. Hero (W).
2. "Fresh Perspectives, Practical Direction" (P) — 4-col: Marketing Strategy
   Review / Campaign & Channel Advisory / Performance Analysis / Ongoing
   Strategic Guidance.
3. "Your Team Stays at the Centre" (W) — short editorial.
4. Closing CTA (CA) — "A Second Perspective Can Help."
**Assets needed:** none.

### 23. Marketing Intelligence — T5 (approved representative)
**Hero:** light, text — "Bring the Data Together. Make the Next Move Clearer."
**Sections:**
1. Hero (W).
2. "Information Should Lead to Action" (P) — 4-col process: Connect / Understand
   / Recommend / Coordinate.
3. "One View. Several Questions Answered." (W) — editorial + explicit
   platform-status note ("proprietary intelligence platform is still under
   development... not a live software-product demonstration").
4. Closing CTA (CA) — "Make Data More Useful."
**Assets needed:** none. **Copy gate:** keep the under-development disclaimer —
no product screenshots or UI mockups until the platform exists.

### 24. Build–Operate–Transfer — T4 family, lighter
**Hero:** light, text — "Build Your Marketing Team. Without Building It Alone."
**Sections:**
1. Hero (W).
2. "A Structured Approach to Building Capability" (P) — 3-col: Build / Operate /
   Transfer.
3. "Built Around Your Business" (W) — short editorial.
4. Closing CTA (CA) — "Explore the Right Team Structure."
**Assets needed:** none. Shortest Digital Marketing sub-page.

---

## Batch C — Our Work, About, Blog, Careers, Contact

### 25. Our Work — T6/T2-portfolio blend
No single template matches a portfolio-index page exactly; composition is built
from T2's portfolio-section logic plus T6's editorial tone.
**Hero:** light, text — "Selected Work."
**Sections:**
1. Hero (W).
2. "Stories We've Brought to Life" + "Selected Marketing Case Studies" (W) — two
   large link-out blocks (to Ad Films, to Digital Marketing), not small cards.
3. "Discover Our Areas of Work" (P) — 5-item link-list: Ad Films, Corporate
   Films, Explainer Videos *(pending)*, Music Videos *(pending)*, Marketing
   Cases.
4. Closing CTA (CA) — "Have a Story to Tell?"
**Assets needed:** portfolio visuals explicitly deferred per source note ("only
from verified, approved project assets and evidence") — none for now.

### 26. About — T6 family
**Status:** already built (Milestone 2), matches this family well. Recommend
**verify, don't rebuild.**
**Current structure:** Hero (W, text) → "Two Specialist Businesses, One Shared
Philosophy" split (P) → "Understand. Choose. Create." 3-step (W) → Closing CTA
(CA).

### 27. Blog — T6 family variant
**Hero:** light, text — "Blog."
**Sections:**
1. Hero (W).
2. "Browse Recent Articles" (P) — 4 placeholder article cards, explicitly sourced
   from the existing WordPress blog at migration time, not invented.
3. "Useful Ways to Explore" (W) — proposed category placeholder.
4. **No closing CTA band** — none in source; the page's purpose is browsing, not
   enquiry.
**Assets needed:** article thumbnails, titles, dates, excerpts — all pending
WordPress migration.

### 28. Careers — T6 family variant
**Hero:** light, text — "Good Work Begins with People Who Care About It."
**Sections:**
1. Hero (W).
2. "Open Positions at Pathway" (P) — placeholder listing block, explicitly "no
   vacancy advertised until confirmed."
3. "Don't See a Suitable Opening?" (W) — editorial close (CV/application note,
   pending secure-upload capability). Functions as the page's close — no separate
   CTA band.
**Assets needed:** none now; secure application flow is a backend dependency, not
a design asset.

### 29. Contact — T6 (approved representative)
**Status:** already built (Milestone 2), matches this family. Recommend
**verify, don't rebuild.**
**Current structure:** Hero (W, text) → "What Would You Like to Discuss? / Tell
Us About Your Requirement" (P) with mailto + review-note. No closing CTA band —
Contact is the destination, not a page that hands off elsewhere.

---

## Pages flagged as needing real assets before they can be finished

- **Explainer Videos, Music Video Production** — no source content at all;
  structure proposed above is analogy-only and cannot be built until a brief or
  copy is supplied.
- **Amazon Advertising** — copy is provisional pending the client's Amazon
  presentation (per the old README's editorial gate).
- **Marketing Intelligence** — must keep the "platform not yet launched"
  disclaimer; no product UI to show yet.
- **Our Films, Our Work, Industries** — portfolio/case imagery explicitly
  deferred in the source copy itself until verified, approved assets exist.
- **Blog** — depends on a WordPress migration audit for real article data.
- **Careers** — depends on a verified openings list and a secure application
  flow before any listing goes live.

## What happens after approval

Per the design-source-hierarchy doc, implementation begins with six
representative pages once this mapping is approved: **Creative Productions**
(verify against refined rules), **Corporate Films**, **Amazon Advertising**,
**Marketing Intelligence**, **Contact** (verify), plus one more to be agreed —
with desktop and mobile previews delivered before the remaining pages proceed.
`main`, `Pathwebsite`, and the live site stay untouched until then.
