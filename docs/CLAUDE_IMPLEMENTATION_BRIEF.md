# Claude — Implementation Assignment

You are rebuilding the Pathway Productions 29-page website for **design review**, not deploying it.

## Inputs
1. `reference/APPROVED_HOMEPAGE_V3.html`: locked, user-approved homepage. Do not redesign it.
2. `docs/DESIGN_SYSTEM.md`: binding art-direction, colour, typography, image and performance requirements.
3. Existing source repository: `Pathwayproductions/Pathwebsite`, branch `design/chatgpt-full-website` (29-page draft inventory to verify).
4. `assets/` and `docs/ASSET_AND_VIDEO_MANIFEST.csv`: image/video assets will arrive incrementally from ChatGPT and user. Do not fabricate missing assets or URLs.

## Required workflow
1. Create or work in a **new separate GitHub repository** once the user has created/granted access to it. Do not alter or deploy the old repository.
2. Clone/import the existing 29-page drafts; enumerate routes and page titles. Confirm the actual count and flag missing pages.
3. Integrate the approved homepage exactly; preserve a copy of the original standalone HTML for visual comparison. If adapting it to components, test for visual parity and preserve all copy and section order.
4. Extract reusable typography, palette, spacing, buttons, navigation, footer and content patterns; design each page individually using its content and appropriate colour alternation.
5. First complete one representative page, Creative Productions, for review. Do not mass-produce the remaining 28 until its direction is approved.
6. For remaining pages, use distinct hero compositions and service-specific section treatments. Do not repeat the same camera image or generic card layout.
7. Wire only **verified** YouTube/Vimeo URLs; track missing links in manifest. Use click-to-load video embeds.
8. Build for fast delivery, accessible responsive behaviour, technical SEO and maintainability as specified in the design system.
9. Generate an HTML review build with working links, and provide a ZIP plus (if approved) a private staging URL. Include screenshots for desktop/mobile, an audit report and outstanding issues.

## Acceptance criteria
- Homepage matches locked reference, including six-section background sequence.
- Design system followed; selective blue headline emphasis is plainly visible.
- Every page uses purposeful images; wide, integrated hero compositions.
- Adjacent sections contrast, without arbitrary repeated charcoal blocks.
- No clipped/overlapping text; consistent grid alignment and meaningful icons.
- All 29 source pages accounted for; every link tested or clearly flagged.
- Video links are verified, never invented.
- No production deployment or merging without explicit user approval.

## First response to user
Present (a) source page inventory, (b) proposed implementation stack and performance budget, (c) how homepage visual parity will be verified, (d) image/video gaps, and (e) the first Creative Productions HTML review milestone. Then proceed within the approved review workflow.
