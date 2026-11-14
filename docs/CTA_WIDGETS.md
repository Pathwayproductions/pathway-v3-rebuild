# Lead-capture widgets — WhatsApp, sticky form, HubSpot chat

Added 2026-11-14. Implements, in code, the items from the CTA & Lead-Capture
Widget Plan that were blocked on WordPress admin access on the live site.
This is the new build (pathway-v3-rebuild); nothing here touches the live
pathwayproductions.in site.

## What's included

- `assets/css/cta-widgets.css` — styling for the floating WhatsApp button and
  the sticky mini contact-form bar.
- `assets/js/cta-widgets.js` — all the behaviour. Self-contained; a page only
  needs two includes (see below), no per-page config file.
- HubSpot's chat loader (`//js.hs-scripts.com/3873487.js`) is included on
  every page. It carries over the live portal's chat settings automatically
  — including the 25-second trigger delay already fixed there — because that
  config lives in the HubSpot account, not in site code.

Every one of the 35 built pages now includes, matching the page's existing
relative-path depth to `assets/`:
```html
<link rel="stylesheet" href="assets/css/cta-widgets.css">
...
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3873487.js"></script>
<script src="assets/js/cta-widgets.js" defer></script>
```

## Behaviour implemented

- **WEB-003 (don't compete with chat):** the sticky form bar listens for
  HubSpot's `widgetOpen` / `widgetClosed` conversations events and hides
  itself (`ctaw-yield-chat`) whenever the chat panel is open, reappearing
  when it closes.
- **WEB-004 (tag leads by service interest):** each page resolves a
  `serviceInterest` value from its URL path (see `SERVICE_BY_PATH` in
  `cta-widgets.js`), matched **exactly** to the HubSpot "Service Required"
  property's own picklist values (the same property the chatbot now saves
  to), so chat and site-form leads land in the CRM tagged the same way.
  Pages with no clean 1:1 service mapping (About, Careers, Blogs, Contact,
  etc.) send no value rather than a guessed one.
- **WEB-005 (blog delay):** pages under `/blogs/` use a 45-second reveal
  delay instead of the default 25 seconds (`DELAY_MS.blog`), so the bar
  doesn't interrupt someone mid-article. The bar also reveals early if the
  visitor scrolls past 50% of the page, whichever comes first.
- **WEB-007:** no popup was ported over — the "popup" flagged on the live
  site turned out to be its mobile nav menu, not a marketing popup.
- **OPS-1 (tracking hygiene):** no inline Bing UET tag exists anywhere in
  this codebase. Bing conversion tracking, like everything else, should be
  wired through the one GTM container (`GTM-NPQF6K8`, already on every page)
  rather than hardcoded again — avoids reintroducing the live site's
  duplicate-tag problem.

## Open gap — needs a HubSpot form ID

The sticky form currently has nowhere to submit to. `GLOBAL.hubspotFormId`
in `cta-widgets.js` is `null` on purpose: the widget renders normally, but
submission shows "This form isn't connected yet — please call or WhatsApp
us instead." rather than failing silently or inventing an endpoint.

To wire it up: create (or reuse) a HubSpot form with fields `firstname`,
`phone`, `email`, `message`, and a `service_required` property (mapped to
the same "Service Required" picklist), then drop its form GUID into
`GLOBAL.hubspotFormId`. The portal ID (`3873487`) is already set.

## Not yet done

- `whatsappNumber` is set to the number used on the live site
  (+91 80569 94433) — confirm this is still correct for the new site.
- No brochure/download CTA placement yet (PPC-3) — pending the actual
  brochure files.
