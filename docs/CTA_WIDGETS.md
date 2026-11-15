# Lead-capture widgets — WhatsApp, book-a-call

Added 2026-11-14. Implements, in code, the items from the CTA & Lead-Capture
Widget Plan that were blocked on WordPress admin access on the live site.
This is the new build (pathway-v3-rebuild); nothing here touches the live
pathwayproductions.in site.

## 2026-11-15 update: sitewide header/footer/form consistency pass

At Arun's request — the homepage had picked up header social icons, the
inline "Start a conversation" form and a simplified footer, but the other
34 pages hadn't caught up. Brought every page in line with the homepage:

- **Header social icons** (Facebook, Instagram, LinkedIn, YouTube) added to
  all 34 non-homepage pages, same markup and position as the homepage
  (between the nav and "Get in Touch"). Hidden on mobile everywhere, same
  as the homepage (`.header-social{display:none}` under 850px in
  `base.css`) — nothing new needed there.
- **Inline lead-capture form** replacing every banner-only "Begin a
  conversation" section: the 27 pages using `.close-cta`, plus three
  one-off variants (`digital-marketing/amazon-ads` `.cta-split`,
  `creative-productions` `.cp-final`, `corporate-video-productions`
  `.img-cta`) were all converted to the homepage's `.wrap.split` +
  `.contact-form-panel` form, keeping each page's own eyebrow/heading/blurb
  copy. `amazon-ads` and `corporate-video-productions` each dropped a
  supporting image from this section to make room for the form — both
  images are decorative repeats of imagery already used higher up their
  own page, so nothing is lost. Blogs, Careers and Films had no such
  section at all; each got a new one with fresh copy (Careers' is the same
  general enquiry form, not a job-application form — flag to Arun if a
  dedicated careers form is wanted later).
- **Footer simplified** on all 34 non-homepage pages to match the
  homepage's: the `.footer-contact` block (the "Get in touch" heading,
  phone numbers, social icons and the embedded HubSpot form in
  `#footer-hs-form`) is gone everywhere. That also removed the
  `hbspt.forms.create(...)` script block and the
  `js-na2.hsforms.net/forms/embed/v2.js` include on every page that had
  them — the `.contact-form-panel` custom forms (lead-form.js) do the same
  job without the second, differently-styled embed sitting in the footer.
- **Phone numbers, Contact page only:** removing `.footer-contact`
  sitewide would also have stripped the Contact page's only place showing
  the three phone numbers — the one page they're meant to stay on. Added
  them inline in the Contact page's main form section, next to the
  existing email line, so they're still visible there and nowhere else.
- `.contact-alt-email` ("Prefer email?") moved from `home.css` to the
  shared `footer-form.css` so every page's new form section can use it.

## 2026-11-15 update: HubSpot live chat removed sitewide

Dropped at Arun's request — its chatflow was set to auto-open on every page
load (so it reappeared on every refresh, not just real new visits), and with
WhatsApp already covering that same "pop and nudge the visitor" job, the
chat widget wasn't earning its upkeep (branding, needs active staffing to be
worth it). That's a HubSpot-account-side display-rule setting, not something
fixable from the site code, so the loader script is removed instead.

Removed the `<script id="hs-script-loader" ...>` tag
(`//js.hs-scripts.com/3873487.js`) from all 35 pages, and the dead
`window.HubSpotConversations` / `hsConversationsOnReady` "yield to chat"
wiring from `assets/js/meeting-popup.js` and `assets/css/meeting-popup.css`
(the homepage's "book a call" popup no longer needs to duck out of the way
of a chat panel that doesn't exist). The HubSpot forms embed on the Contact
page (`js-na2.hsforms.net/forms/embed/v2.js`, the separate footer form) is
unrelated and untouched — that's HubSpot Forms, not HubSpot Conversations.

## 2026-11-15 update: sitewide "Book a call" header CTA + mobile-only call button

Added a deliberate, always-available way to book a HubSpot Meetings slot,
separate from the homepage's proactive popup (which nudges people who
weren't necessarily looking to talk). Lives in the header on all 35 pages:

- **Desktop/tablet:** a second button next to "Get in Touch ↗", styled the
  same (`.outline`) — "Book a call". Opens the booking modal in place, no
  page navigation.
- **Mobile:** the same trigger appears as a link inside the hamburger menu
  (below "Contact"), since the header's `.outline` buttons are hidden at
  that width to avoid crowding.
- **Mobile-only tap-to-call icon** next to the Menu button (phone, `tel:`
  link) — not shown on desktop/tablet by request, since dialling is only a
  one-tap action on a phone. Uses the main number (+91 80569 94433); the
  Contact page keeps all three numbers as before.

The modal itself — building the HubSpot Meetings iframe, loading its embed
script, open/close handling — now lives in `assets/css/meeting-widget.css`
and `assets/js/meeting-widget.js`, loaded on every page. The homepage's
popup (`meeting-popup.css`/`.js`) was refactored to call
`window.PathwayMeetings.open()` instead of building its own copy of the
modal, so there's exactly one modal implementation sitewide.

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
- `assets/css/meeting-widget.css` / `assets/js/meeting-widget.js` — the
  sitewide "Book a call" header button and its HubSpot Meetings booking
  modal (see the update above).
- No HubSpot live chat anywhere on the site as of 2026-11-15 (see above).

Every one of the 35 built pages now includes, matching the page's existing
relative-path depth to `assets/`:
```html
<link rel="stylesheet" href="assets/css/cta-widgets.css">
<link rel="stylesheet" href="assets/css/meeting-widget.css">
...
<script src="assets/js/cta-widgets.js" defer></script>
<script src="assets/js/meeting-widget.js" defer></script>
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
