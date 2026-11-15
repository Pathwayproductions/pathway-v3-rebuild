# Lead-capture widgets — WhatsApp, HubSpot chat

Added 2026-11-14. Implements, in code, the items from the CTA & Lead-Capture
Widget Plan that were blocked on WordPress admin access on the live site.
This is the new build (pathway-v3-rebuild); nothing here touches the live
pathwayproductions.in site.

## 2026-11-15 update: sticky mini contact-form bar removed sitewide

The original version of this file also built a sticky bar (bottom-left,
labelled "Let's have a chat") that expanded into a compact copy of the
enquiry form. Removed at Arun's request: it used the same bottom-corner
popup pattern and chat-style label as HubSpot's actual live-chat widget, so
it read as "the chat thing" rather than as its own feature — and
functionally it was just a smaller version of the enquiry form already on
every page, not a distinct alternative. `assets/js/cta-widgets.js` now only
builds the WhatsApp button; `assets/css/cta-widgets.css` was trimmed to
match. The sections below describe that original build for history —
**WEB-003, WEB-004 and WEB-005 are no longer implemented** now that the
sticky bar is gone.

The homepage separately replaced this same slot, a day earlier, with a
"book a call" popup linking to HubSpot Meetings — see
`assets/js/meeting-popup.js`. That change is unaffected by this one.

## What's included

- `assets/css/cta-widgets.css` — styling for the floating WhatsApp button.
- `assets/js/cta-widgets.js` — the WhatsApp button's behaviour. A page only
  needs the two includes below, no per-page config file.
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

## Behaviour implemented (original sticky-bar build — superseded, see above)

- **WEB-003 (don't compete with chat):** the sticky form bar listened for
  HubSpot's `widgetOpen` / `widgetClosed` conversations events and hid
  itself (`ctaw-yield-chat`) whenever the chat panel was open, reappearing
  when it closed.
- **WEB-004 (tag leads by service interest):** each page resolved a
  `serviceInterest` value from its URL path (`SERVICE_BY_PATH`), matched
  **exactly** to the HubSpot "Service Required" property's own picklist
  values (the same property the chatbot saves to), so chat and site-form
  leads landed in the CRM tagged the same way. Pages with no clean 1:1
  service mapping (About, Careers, Blogs, Contact, etc.) sent no value
  rather than a guessed one.
- **WEB-005 (blog delay):** pages under `/blogs/` used a 45-second reveal
  delay instead of the default 25 seconds, so the bar didn't interrupt
  someone mid-article. It also revealed early past 50% scroll.
- **WEB-007:** no popup was ported over — the "popup" flagged on the live
  site turned out to be its mobile nav menu, not a marketing popup.
- **OPS-1 (tracking hygiene):** no inline Bing UET tag exists anywhere in
  this codebase. Bing conversion tracking, like everything else, should be
  wired through the one GTM container (`GTM-NPQF6K8`, already on every page)
  rather than hardcoded again — avoids reintroducing the live site's
  duplicate-tag problem.

## Not yet done

- `whatsappNumber` is set to the number used on the live site
  (+91 80569 94433) — confirm this is still correct for the new site.
- No brochure/download CTA placement yet (PPC-3) — pending the actual
  brochure files.
