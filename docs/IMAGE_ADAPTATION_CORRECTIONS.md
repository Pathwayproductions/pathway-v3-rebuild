# Image Adaptation Corrections Register

Branch: `qa/full-responsive-audit`
Generated: 2026-10-31, as part of the full 29-page responsive QA & image adaptation audit.
Machine-readable version: [`docs/IMAGE_ADAPTATION_CORRECTIONS.csv`](./IMAGE_ADAPTATION_CORRECTIONS.csv) (32 rows, same data).

## How this register was built

Every image placed under `assets/concept-previews/batch2/` was opened and viewed directly as a raw file (not just as rendered on the page), and its actual pixel dimensions were read with Pillow. This is the `batch2` set delivered during the earlier 32-image integration work; its own `manifest.json` already labels every file `VISUAL_PREVIEW_ONLY_NOT_PRODUCTION_READY`, but 22 of the 32 are currently live in page HTML across 15 pages. This register documents exactly what's wrong with each and what a corrected replacement needs to look like.

## Headline finding (applies to all 22 batch2 images in use)

**Every `batch2/*.webp` file is only 378×122px (~0.05 megapixels).** That is a thumbnail, not a production image. These files are used full-bleed in `.hero-dark`/`.cp-hero` bands (10 pages) and as project/process tile images (12 placements), both via CSS `object-fit:cover`, which stretches them up to 1920px wide on large desktop — a 5×+ upscale. The result is visibly soft/blurred imagery at every width above small mobile. This is a **Critical, site-wide** issue, not a per-page cosmetic one.

## Two additional, more severe defects found on direct pixel inspection

1. **Contact-sheet bleed / two unrelated scenes merged into one file** — confirmed in **8 of the 22** images in use (`13`, `14`, `15`, `16`, `17`, `18`, `19`, `20`). Each of these files contains two completely unrelated photos stacked top/bottom in a single frame (e.g. `14-sunset-film-crew.webp` has a stadium crowd on top and a sunset film crew on the bottom). The site's CSS works around this with `object-position` overrides to crop toward the "correct" half, but that is a fragile mask over a broken source file, not a fix — it risks a visible seam or the wrong scene appearing at some of the 7 required breakpoints, and it halves the already-tiny usable resolution. **`18-animation-workstation.webp` (explainer-video-company) has no `object-position` override set at all**, so it is the single highest-risk placement in this group.
2. **Baked-in border/crop-line artifact** — confirmed in `24-cinema-camera.webp` (ad-films, "We Box" tile): a bright horizontal line is burned into the top edge of the image itself, visible on the rendered page at all three core widths tested (390/768/1440px). This is a pixel-level defect in the source file, not a CSS bug — no code fix can correct it.

Both defects trace back to the same root cause named in the batch2 manifest: these files were cropped out of an AI-generated contact sheet, and the crop was done loosely/incorrectly for roughly a third of the set.

## Priority summary

| Priority | Count | Meaning |
|---|---|---|
| Critical | 26 | Full-bleed hero/CTA placements (resolution issue, all), or a tile with a confirmed double-scene defect |
| High | 4 | Tile placement with resolution-only issue, or the confirmed border-artifact image |
| Medium | 3 (incl. duplicate) | Smaller/secondary tile placements, clean single-scene content, resolution-only |

(Totals: 32 CSV rows = 10 hero pages × 2 rows (desktop+mobile) + 12 tile placements.)

## Pages affected (15 of 29)

`creative-productions`, `ad-films`, `corporate-video-productions`, `explainer-video-company`, `film-marketing`, `films`, `music-album`, `ott-distribution`, `production-services-india`, `production-services-india/crew-equipment`, `production-services-india/production-management`.

No other pages in the 29-page set use `batch2` imagery — the remaining 14 pages (home, digital-marketing hub + 10 sub-pages, about, work, blogs, careers, contact) were unaffected by this finding.

## Full detail

See [`docs/IMAGE_ADAPTATION_CORRECTIONS.csv`](./IMAGE_ADAPTATION_CORRECTIONS.csv) for the per-asset table (Asset ID, Page, Section, Current file, Problem, Current/Required dimensions, Required aspect ratio, Device, Composition, Text-safe area, Correction type, Priority, Suggested prompt, Screenshot reference, Status). Every row's Correction type is `Regenerate` (`24-cinema-camera.webp` could in principle be salvaged with a very tight re-crop, but given it also shares the 378×122 resolution problem, regeneration is still the recommended path).

## What is NOT affected

- `assets/concept-previews/corporate-films/*` and `assets/concept-previews/amazon-advertising/*` — a different, earlier image set. Sampled resolutions (420×218 to 683×432px) are still modest but notably better than batch2, and no double-scene or border-artifact defect was found in a direct-pixel spot check of these files. Not included in this register; worth a lighter follow-up pass if time allows, but not urgent.
- The one remaining honest placeholder on `ad-films` ("Fit & Flex" — "PROJECT STILL · TO BE SUPPLIED") and the equivalent on `corporate-video-productions` ("LECS") are correctly left unfilled, not a defect.
- Site layout/CSS: zero overflow, console-error, or broken-link/image issues were found by the automated sweep across all 29 pages × 7 widths — see `docs/RESPONSIVE_QA_REPORT.md`. Everything in this register is an image-content problem, not a code problem, and nothing here should be "fixed" by cropping harder in CSS.
