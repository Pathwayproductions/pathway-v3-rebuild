# Google Analytics 4 Audit — pathwayproductions.in

Audit date: 2026-10-31. **Strictly read-only.** No property settings, events, key
events, audiences, attribution settings, data streams or integrations were
changed. Access was via a direct, authenticated browser session
(`marketing@pathwayproductions.in`, the same account used for the earlier GSC
audit — see `GSC_SEARCH_PERFORMANCE_AUDIT.md`), which already had GA4 access
configured for this property; no password, OTP or recovery code was requested
or entered.

**GA4 property**: "Pathway Website" (property ID `256406920`, account ID
`109606936`, account "Pathway Productions L...").

This supersedes the "GA4 not obtainable" notes in `OFF_PAGE_SEO_REPORT.md` §1
and `EXECUTIVE_SUMMARY.md` §3/§9 — those were specific to Porter's connector
limits (account-slot cap, 30-day history cap) and no longer block this
property, since this audit used GA4's own UI directly.

---

## 0. Executive summary — read this first

1. **A large share of this property's reported traffic is very likely bot/automated, not real visitors — plausibly approaching half.** Singapore (24.5%) and China (23.1%) are the #2 and #3 countries by users over 16 months, ahead of a Chennai-based video-production agency's own realistic market, each with 1–4 second average engagement times (the GA4 "engaged session" definition requires no minimum dwell time if 2+ pageviews fire, so this is a known blind spot, not a contradiction). This changes how every other traffic number in this audit — and in any future reporting on the current or new site — should be read. See §2.4.
2. **The "contact" custom event (682 fires, 534 users, marked as a Key Event) is almost certainly a disguised pageview counter, not a lead/submission signal.** It tracks 1:1 with `/contact/` pageviews (677 views, 529 users). The real completion signal, `form_submit`, fired only **15 times from 11 users** in 16 months — and is *not* marked as a key event. This is the clearest single misconfiguration found in this audit. See §5.1.
3. **`page_view` itself is marked as a Key Event**, meaning every page load on the site is currently counted as a "conversion." Any historical "conversion rate" reported from this property should be treated as meaningless until this is corrected in the new build. See §5.1.
4. **Organic Search is the strongest-quality attributable channel**: 19% of 16-month sessions but the best substantive engagement (34s avg time, 6.31 events/session — more than triple Direct's), and disproportionately drives return visitors (15% of users, 52% of all returning users). See §2.2.
5. **Mobile is a smaller but higher-converting-attention audience than desktop, and this gap is sharper for organic search specifically** (organic mobile: 100% engagement rate vs. organic desktop: 82.6%). Combined with the GSC audit's confirmed "Poor" mobile Core Web Vitals on 100% of measured URLs, this is a strong, now-quantified case for treating mobile performance as launch-blocking QA, not a low-priority afterthought. See §2.3, §4.3.
6. **The homepage absorbs the overwhelming majority of all traffic and engagement** (46% of 16-month pageviews, 57% of organic-search sessions, 71% of Direct-channel users) — consistent with the earlier Semrush-based finding that the site's organic visibility is narrow and branded-search-dependent. Preserving the homepage's experience and URL through migration is the single highest-stakes continuity item in this entire audit.
7. **No distinct lead-generation events exist for phone, email or WhatsApp clicks.** All outbound-link interactions are folded into one generic `click` event (189 fires, 137 users over 16 months) with no way to isolate "called us" from "clicked through to an unrelated outbound link" in standard reporting. The brief's full requested inventory (contact form, telephone, email, WhatsApp, consultation-request events) does not exist as configured today. See §5.
8. **GA4 Explore on this property is capped to a short lookback window (empirically ~93 days or less)**, almost certainly because Admin → Data Settings → Data Retention is set to the short default rather than the extended 14-month option. This blocked a full 16-month landing-page-level and path-exploration analysis; those sections use a 1-month (October 2026) snapshot instead, clearly labelled. This is itself a property-configuration action item. See §8.

---

## 1. Access and authentication

- Logged in via the same Google account used for the GSC audit; GA4 access
  was already configured, so no new grant or credential entry was needed.
- Two data streams exist on this property:
  1. **"Pathway Website"** — `http://www.pathwayproductions.in`, Stream ID
     `2208942470`, Measurement ID `G-MYGCQ03XC4` — **active**, receiving
     traffic in the past 48 hours.
  2. **"MonsterInsights - https://www.pathwayproductions.in"** — Stream ID
     `3002852095` — **stale**, no data received in the past 48 hours. This is
     a leftover from a prior WordPress MonsterInsights plugin integration.
     Not harmful to current reporting (GA4 aggregates by property and the
     dead stream contributes nothing), but a cleanup item, and the new
     site's Measurement ID should be set explicitly to avoid any confusion
     with this old stream ID.
- Enhanced Measurement on the active stream has **all 7 types enabled**: Page
  views, Scrolls, Outbound clicks, Site search, Video engagement, File
  downloads, Form interactions.
- No property settings, events, key events, audiences, attribution settings,
  data streams or integrations were changed at any point.

---

## 2. Traffic acquisition analysis

All figures in this section use the full available 16-month window
(1 Jul 2025 – 30 Oct 2026) via GA4's standard Reports (not Explore, which has
a shorter retention-capped window — see §8). A true 3/6/12-month breakdown
and year-over-year comparison were not separately extracted this pass (see
§8 data gaps); the 16-month totals below are the authoritative baseline.

**Property-wide 16-month totals**: 9,164 sessions | 8,850 engaged sessions |
96.57% engagement rate | 16s avg engagement time/session | 4.56 events/session
| 7,911 total users | 7,820 new users | 370 returning users (4.68%)

### 2.1 Traffic by default channel group

| Channel | Sessions | % | Engaged sessions | Engagement rate | Avg engagement time/session | Events/session |
|---|---|---|---|---|---|---|
| Direct | 6,139 | 66.99% | 6,064 | 98.78% | 11s | 4.05 |
| Organic Search | 1,741 | 19.00% | 1,578 | 90.64% | 34s | 6.31 |
| Referral | 465 | 5.07% | 420 | 90.32% | 37s | 5.15 |
| Organic Social | 281 | 3.07% | 279 | 99.29% | 6s | 4.09 |
| Paid Social | 198 | 2.16% | 187 | 94.44% | 7s | 3.81 |
| Paid Search | 181 | 1.98% | 180 | 99.45% | 4s | 4.36 |
| Paid Other | 72 | 0.79% | 72 | 100% | 6s | 3.79 |
| AI Assistant | 62 | 0.68% | 57 | 91.94% | 24s | 5.77 |
| Unassigned | 60 | 0.65% | 24 | 40% | 11s | 2.65 |
| Organic Video | 8 | 0.09% | 7 | 87.5% | 39s | 5.38 |
| Cross-network / Display | 4 | 0.04% | 4 | 100% | ~10s | ~5 |

**Direct (67% of sessions) should not be read as organic or AI-referred
traffic, per the brief's explicit instruction.** Its near-perfect 98.78%
engagement rate paired with its shortest average time (11s) is the classic
signature of GA4's low bar for "engaged" (10s dwell OR 2+ pageviews OR a
conversion event) being satisfied trivially. Direct is most plausibly a mix
of dark-social shares (WhatsApp/Instagram DMs), bookmarks, typed-URL visits,
UTM-stripped email clients, and unclassified referrals — the single largest
true "unknown" in the channel mix.

**Organic Search (19%) is the real, substantively-engaged second channel** —
34s avg time and 6.31 events/session, both well above Direct and every paid
channel.

**"AI Assistant" is a small but real, separately-tracked channel** (62
sessions, 0.68%, 24s avg engagement — second-best engagement of any
meaningful-volume channel). Worth monitoring as this grows; the new site
should preserve this classification capability.

Paid channels (Paid Social + Paid Search + Paid Other = 4.9% of sessions) are
collectively modest, consistent with an occasionally-paid-campaign site
layered on a mostly organic/direct traffic base. **Google Ads activity is
real** (Paid Search: 181 sessions; `google / cpc` source/medium: 180
sessions) — this corrects the earlier Semrush-based `OFF_PAGE_SEO_REPORT.md`
claim of "0 paid Google Ads keywords," which was a third-party estimate; a
dedicated Ryze/Google Ads account pull would give the full paid-media
picture if needed.

### 2.2 Source/medium (top 10 of 82, by sessions)

| # | Source/medium | Sessions | % | Engagement rate | Avg engagement time/session | Events/session |
|---|---|---|---|---|---|---|
| 1 | (direct) / (none) | 6,139 | 66.99% | 98.78% | 11s | 4.05 |
| 2 | google / organic | 1,665 | 18.17% | 90.51% | 33s | 6.29 |
| 3 | google / cpc | 180 | 1.96% | 99.44% | 4s | 4.37 |
| 4 | facebook / paid | 132 | 1.44% | 99.24% | 6s | 3.61 |
| 5 | facebook.com / referral | 127 | 1.39% | 100% | 2s | 3.65 |
| 6 | movie.carmeniselvam.in / referral | 112 | 1.22% | 83.04% | 12s | 3.54 |
| 7 | naukri.com / referral | 97 | 1.06% | 91.75% | **1m 11s** | 5.11 |
| 8 | m.facebook.com / referral | 89 | 0.97% | 100% | 0s | 3.06 |
| 9 | app.hubspot.com / referral | 66 | 0.72% | 92.42% | 31s | 3.76 |
| 10 | ig / paid | 62 | 0.68% | 83.87% | 10s | 4.19 |

- **naukri.com (job portal) referral traffic shows the single highest
  engagement time of any meaningful source** (1m 11s) — this is job-seeker
  research traffic, not commercial lead generation, and should be excluded
  from any "top referrer" business-development narrative (it corroborates
  the `/careers/` page's own 44s avg engagement time — see §6).
- **app.hubspot.com referral traffic (66 sessions) is very likely internal
  staff traffic** (marketing team clicking links from inside the HubSpot
  CRM), not external visitors.
- `movie.carmeniselvam.in` confirms the known Carmeni Selvam feature-film
  campaign page is still actively referring real traffic to the main site.

### 2.3 Device category

| Device | Sessions | % | Engagement rate | Avg engagement time/session |
|---|---|---|---|---|
| Desktop | — (users: 5,970) | 75.52% of users | 96.06% | — |
| Mobile | — (users: 1,838) | 23.25% of users | **99.17%** | — |
| Tablet | — (users: 9) | 0.11% of users | 100% | — |

Desktop dominates at ~75–76% of users/sessions, consistent with a B2B
video-production-agency site browsed mostly by decision-makers doing
considered research at work. **Mobile, while smaller, converts attention
more reliably** (99.17% vs. 96.06% engagement rate) — and this gap widens
further for organic search specifically (§4.3). Given the GSC audit's
confirmed "Poor" mobile Core Web Vitals on 100% of measured URLs, poor
mobile performance is likely suppressing what could be an even
stronger-converting segment, not a low-stakes corner to deprioritize for the
new build.

### 2.4 Geography — critical bot-traffic finding

**Top 10 of 95 countries by active users (16-month):**

| # | Country | Active users | % | Avg engagement time/user |
|---|---|---|---|---|
| 1 | India | 2,783 | 35.21% | 45s |
| 2 | Singapore | 1,940 | 24.54% | 4s |
| 3 | China | 1,825 | 23.09% | 1s |
| 4 | United States | 1,100 | 13.92% | 7s |
| 5 | Germany | 277 | 3.5% | 9s |
| 6 | United Kingdom | 107 | 1.35% | 12s |
| 7 | Netherlands | 71 | 0.9% | 5s |
| 8 | Brazil | 55 | 0.7% | 1s |
| 9 | Ireland | 51 | 0.65% | 1s |
| 10 | Sweden | 45 | 0.57% | 2s |

Pathway Productions is a Chennai-based video/ad-film production company
whose realistic addressable market is overwhelmingly India (with perhaps a
trickle of diaspora/NRI or occasional international-client interest). Yet:

- **India is only 35% of all users — a minority of the property's reported
  traffic.**
- **Singapore (24.5%) and China (23.1%) combined are 47.6% of all users** —
  nearly half the property's total reported traffic, from two countries with
  no plausible organic business reason to be the #2 and #3 traffic source
  for a Chennai ad-film company.
- The 1–4 second average engagement times for Singapore and China are a
  textbook automated-traffic signature: GA4 counts a session as "engaged" if
  it fires 2+ pageviews, with **no minimum dwell time required** on that
  path — a bot/crawler loading 2 pages in 1 second and leaving satisfies
  "engaged" while contributing a fully-counted session with ~0 seconds of
  real human attention.
- This same 1–9 second pattern recurs for nearly every country outside India
  (US 7s, Germany 9s, Netherlands 5s, Brazil 1s, Ireland 1s, Sweden 2s) —
  only India (45s) and, marginally, the UK (12s), look like plausible real
  human browsing.
- This corroborates an earlier (28-day) Explore-based city-level pass that
  showed "Boardman" (Oregon — a well-known Google/AWS/cloud-datacenter
  location) and "Singapore" as the #2 and #3 cities by session volume, both
  **100% desktop / 0% mobile** — a pattern consistent with datacenter-hosted
  bots/scrapers, not real visitors.

**Implication for the whole audit**: a large share — plausibly approaching
half — of this property's reported totals may not represent real human
visitors. Every top-line number above (Direct's dominance especially) should
be read as potentially inflated by non-human traffic, not purely as
marketing/SEO performance.

**Recommended action items** (flag to Arun for the new site's analytics
setup):
1. Confirm GA4's "Exclude all hits from known bots and spiders" setting is
   active (on by default, but worth verifying) on the new property.
2. Consider IP-based or geo-based filtering/segmentation for known
   datacenter ranges.
3. Make geography/engagement-time anomaly monitoring a standing data-hygiene
   check on the new site, not a one-time audit footnote.
4. Run any future conversion-rate or engagement-rate calculation on an
   India-filtered (or min-engagement-time-filtered) segment where migration
   decisions are at stake, to avoid understating true performance.

---

## 3. Landing-page performance

**Data-window caveat**: GA4 Explore on this property enforces a hard lookback
cap (an explicit "Invalid date range" error consistently appears for ranges
longer than roughly 90 days), and GA4's standard "Pages and screens" report
does not expose "Landing page" as a primary dimension. The table below is
therefore a **1-month snapshot (1–31 October 2026)**, not the 16-month
window used elsewhere in this audit — see §8 for the recommended fix. Where a
16-month equivalent exists (via the "Pages and screens" report, keyed on
page path rather than landing page), it is cited for cross-reference.

**1-month totals (all landing pages)**: 993 sessions | 941 engaged sessions |
826 active users | 815 new users | 94.76% engagement rate | 15s avg
engagement time/session | 1,568 key events

| # | Landing page | Sessions | Active users | New users | Engagement rate | Avg engagement time/session | Key events* |
|---|---|---|---|---|---|---|---|
| 1 | `/` (homepage) | 705 | 627 | 618 | 99.86% | 14s | 1,218 |
| 2 | *(not set)* | 51 | 23 | 0 | **1.96%** | 13s | 0 |
| 3 | `/careers` | 45 | 44 | 42 | 100% | **50s** | 57 |
| 4 | `/best-digital-marketing-agency-in-chennai` | 13 | 7 | 6 | 100% | 10s | 28 |
| 5 | `/blogs` | 12 | 6 | 3 | 100% | **57s** | 50 |
| 6 | `/music-album-production-company-what-they-do` | 12 | 12 | 12 | 100% | 2s | 12 |
| 7 | `/corporate-video-productions` | 10 | 10 | 8 | 100% | 11s | 19 |
| 8 | `/movie-video-production-digital-marketing` | 9 | 9 | 9 | 100% | 29s | 11 |
| 9 | `/video-production-services` | 9 | 8 | 5 | 100% | 41s | 16 |
| 10 | `/corporate-video-services` | 8 | 8 | 8 | 100% | 0s | 9 |
| 11 | `/video-production-company-in-chennai` | 8 | 8 | 5 | 100% | 8s | 9 |
| 13 | `/how-to-generate-b2b-leads-2026` | 6 | 6 | 6 | 100% | 2s | 6 |
| 14 | `/ad-film-vs-corporate-video` | 5 | 5 | 5 | 100% | 8s | 5 |
| 15 | `/contact` | 5 | 5 | 5 | 100% | 1s | 10 |
| 16 | `/creative-video-productions` | 5 | 5 | 5 | 100% | 1s | 5 |
| 17 | `/team` | 5 | 5 | 5 | 100% | 20s | 6 |
| 18 | `/ad-films` | 4 | 4 | 2 | 100% | 10s | 5 |
| 19 | `/digital-marketing-solutions` | 4 | 3 | 3 | 100% | 8s | 4 |
| 20 | `/seo-vs-ppc-which-should-you-invest-in-first` | 4 | 4 | 4 | 100% | 0s | 4 |
| 21 | `/success-stories` | 4 | 4 | 4 | 100% | 2s | 4 |
| 22 | `/thank-you` | 4 | 3 | 1 | 100% | 5s | 10 |
| 23 | `/the-role-of-editing-in-ad-films` | 4 | 3 | 3 | 100% | 0s | 5 |
| 24 | `/2d-animation-services` | 3 | 3 | 3 | 100% | 43s | 9 |

\* "Key events" here is inflated by `page_view` being marked as a key event
on this property (see §5) — treat these as pageview-adjacent counts, **not**
verified conversions.

### Findings

- **Homepage dominance**: 71% of 1-month sessions, 78% of key-event counts —
  confirmed by the 16-month "Pages and screens" data (46% of all 16-month
  pageviews, 5,882 views). The single highest-stakes URL/experience to
  preserve through migration.
- **`/careers` is the #2 landing page with by far the strongest genuine
  engagement** (50s avg time, >3x the homepage) — corroborated by the
  16-month `/careers/` page data (817 views, 44s avg engagement, #2 page
  site-wide) and the naukri.com referral finding in §2.2. This is
  job-seeker traffic, not commercial lead generation — label it as such in
  any "top-performing pages" summary.
- **`(not set)` (51 sessions, 1.96% engagement rate, 0 key events)** is a
  bot/broken-tracking signature consistent with §2.4's geography finding —
  exclude it from any "real" landing-page ranking.
- **Genuine content engagement**: `/blogs` (57s avg time, best in this
  table), `/video-production-services` (41s — the orphan/sitemap-excluded
  page flagged throughout the SEO audits, still earning real engaged
  traffic directly), `/movie-video-production-digital-marketing` (29s),
  `/2d-animation-services` (43s, one of the "no mapped destination" pages
  per `EXECUTIVE_SUMMARY.md` §9.4).
- **`/contact` and `/thank-you` show meaningful key-event counts relative to
  volume** (10 each on 5 and 4 sessions) — see §5 for why `/thank-you`
  landings are a more credible signal of real form completions than the
  `contact` event itself (you only reach a thank-you page after submitting).
- Several of the 29 planned new-site pages already show real, if modest,
  direct traffic this month: `/ad-films`, `/digital-marketing-solutions`,
  `/success-stories`, `/team`, `/2d-animation-services`,
  `/corporate-video-productions` — useful corroboration for migration
  priority.

### Migration priority (data-driven, landing-page view)

**Tier 1 — preserve exactly, highest stakes**: `/` (homepage), `/contact`
(and ensure a real `/thank-you` equivalent exists and is trackable).

**Tier 2 — preserve with purpose, real engagement confirmed**:
`/video-production-services` (orphan page, still earning organic +
engaged direct traffic — needs the keep/restore decision flagged in
`EXECUTIVE_SUMMARY.md` §9.2), `/blogs` (needs the article-template decision
flagged in §9.1), service pages (`/corporate-video-productions`,
`/digital-marketing-solutions`, `/ad-films`, `/2d-animation-services`,
`/creative-video-productions`), `/team`, `/success-stories`.

**Tier 3 — preserve for a specific audience, not commercial lead gen**:
`/careers` (job-seeker traffic — keep for employer branding, don't count
toward business-development KPIs).

**Tier 4 — monitor, low current volume**: the remaining long-tail blog/SEO
landing pages (`/how-to-generate-b2b-leads-2026`,
`/seo-vs-ppc-which-should-you-invest-in-first`,
`/the-role-of-editing-in-ad-films`, `/ad-film-vs-corporate-video`) — real
but small organic entry points worth preserving if the blog-migration
decision in §9.1 of the Executive Summary goes forward.

---

## 4. Organic search and SEO intelligence (from GA4)

Per the brief, this section covers GA4's own organic-traffic behavior —
keyword/query-level performance belongs to Google Search Console
(`GSC_SEARCH_PERFORMANCE_AUDIT.md`), not GA4, and is not duplicated here.

### 4.1 Organic Search channel, 16-month summary (from §2.1)

1,741 sessions (19.00% of total) | 90.64% engagement rate | 34s avg
engagement time/session | 6.31 events/session — the best substantive
engagement of any channel with meaningful volume.

First-user view (§2.2 of `ga4_user_acquisition_16mo.txt`): Organic Search
drives only 15.28% of total users but **51.62% of all returning users** —
more than half of everyone who ever comes back to the site arrived
originally via organic search, versus Direct's 71% of users contributing
only 36.76% of returning users. **Organic-search-acquired visitors are
meaningfully more likely to become repeat visitors** — organic quality, not
just volume, should be protected and invested in through the migration.

### 4.2 Organic-only landing pages (1-month snapshot, same Explore-window caveat as §3)

**Totals**: 206 sessions | 176 engaged sessions | 113 active users | 108 new
users | 85.44% engagement rate | 34s avg engagement time/session | 492 key
events. (206 of 993 all-channel sessions this month = ~20.7%, closely
matching the 19% 16-month channel share — a good consistency check.)

| # | Landing page | Sessions | Engagement rate | Avg engagement time/session | Key events* |
|---|---|---|---|---|---|
| 1 | `/` (homepage) | 117 | 100% | 40s | 370 |
| 2 | *(not set)* | 31 | 3.23% | 20s | 0 |
| 3 | `/best-digital-marketing-agency-in-chennai` | 11 | 100% | 12s | 26 |
| 4 | `/blogs` | 6 | 100% | **1m 22s** | 34 |
| 5 | `/movie-video-production-digital-marketing` | 6 | 100% | 44s | 8 |
| 6 | `/video-production-services` | 4 | 100% | 12s | 4 |
| 7 | `/team` | 3 | 100% | 33s | 4 |
| 8 | `/the-role-of-editing-in-ad-films` | 3 | 100% | 0s | 4 |
| 9 | `/ad-film-vs-corporate-video` | 2 | 100% | 20s | 2 |

\* same `page_view`-as-key-event caveat as §3.

- **57% of organic sessions land on the homepage** — consistent with the
  Semrush-based finding (`OFF_PAGE_SEO_REPORT.md`) that ~208 of ~239
  estimated monthly organic visits are driven by the single branded keyword
  "pathway productions." First-party GA4 data corroborates branded-search
  dominance.
- The same `(not set)` bot/tracking anomaly reappears here (31 organic
  sessions, 3.23% engagement, 0 key events) — exclude from real-opportunity
  sizing.
- **`/best-digital-marketing-agency-in-chennai` is the clearest non-branded,
  service-intent organic entry point** (11 sessions, 100% engagement) —
  matches a plausible SEO target and should be prioritized per the brief's
  instruction to identify service pages deserving priority.
- **`/blogs` shows the single strongest organic engagement signal in this
  audit** (1m 22s avg time) — direct, first-party corroboration of the
  "41 blog posts with no destination" risk already flagged as the #1 item in
  `EXECUTIVE_SUMMARY.md`.
- `/video-production-services` (the orphan/sitemap-excluded page) earns real
  organic sessions directly, with 100% engagement — adds a first-party GA4
  data point to the keep/restore decision already flagged in the SEO audit.
- Non-branded service pages are a small minority of organic sessions
  relative to homepage/blog (matching the "narrow, brand-dependent
  visibility" Semrush finding), but every one that does appear shows 100%
  engagement — the constraint is visibility/ranking (an SEO problem, per
  GSC), not content quality once a visitor arrives.

### 4.3 Mobile vs. desktop organic behavior (1-month snapshot)

| Device | Sessions | % | Engagement rate | Avg engagement time/session | Key events |
|---|---|---|---|---|---|
| Desktop | 172 | 83.5% | 82.56% | 35s | 419 |
| Mobile | 34 | 16.5% | **100%** | 30s | 73 |

Organic search skews **even more desktop-heavy** than the site overall
(83.5%/16.5% vs. the property-wide 75.5%/23.2% split in §2.3) — but organic
**mobile sessions show a perfect 100% engagement rate** vs. desktop's
82.56%. Every mobile organic visitor who arrives engages; roughly 1 in 6
desktop organic sessions does not. Combined with the GSC audit's confirmed
"Poor" mobile Core Web Vitals on 100% of measured URLs, this is the
strongest single data point in this audit for treating mobile performance
as a launch-blocking QA priority: organic-search mobile visitors are the
most reliably-engaged segment measured anywhere in this analysis, and poor
mobile UX is the most likely thing suppressing that segment's growth.

---

## 5. Conversion and lead-generation event audit

**All 15 events registered on this property, 16-month totals:**

| # | Event name | Count | Users | Key Event? | Notes |
|---|---|---|---|---|---|
| 1 | `page_view` | 12,775 | 7,882 (99.6%) | **Yes** | Standard/automatic — fires on every page load |
| 2 | `session_start` | 9,134 | 7,881 (99.6%) | No | Standard |
| 3 | `first_visit` | 7,820 | 7,861 (99.4%) | No | Standard |
| 4 | `user_engagement` | 7,166 | 3,700 (46.8%) | No | Standard |
| 5 | `scroll` | 2,669 | 1,889 (23.9%) | No | Enhanced Measurement (90% scroll depth) |
| 6 | `contact` | 682 | 534 (6.75%) | **Yes** | Custom — see finding below |
| 7 | `form_start` | 549 | 417 (5.27%) | No | Enhanced Measurement |
| 8 | `blog` | 289 | 145 (1.83%) | **Yes** | Custom — pageview-pattern, see below |
| 9 | `video_progress` | 280 | 67 (0.85%) | No | Enhanced Measurement |
| 10 | `click` | 189 | 137 (1.73%) | No | Enhanced Measurement (outbound link) |
| 11 | `video_start` | 158 | 78 (0.99%) | No | Enhanced Measurement |
| 12 | `video_complete` | 44 | 28 (0.35%) | No | Enhanced Measurement |
| 13 | `form_submit` | **15** | **11 (0.14%)** | **No** | Enhanced Measurement — see finding below |
| 14 | `portfolio` | 5 | 5 (0.06%) | **Yes** | Custom — negligible volume |
| 15 | `about_us` | 2 | 2 (0.03%) | No | Essentially dead/stale |

No e-commerce or purchase tracking exists (₹0.00 total revenue throughout),
consistent with this being a lead-generation, not transactional, site.

### 5.1 Critical finding: `contact` is a pageview counter, not a lead signal

- `contact` fires 682 times across 534 users (1.28 events/user — close to
  1:1, i.e. "visited once").
- `/contact/` as a page received **677 views from 529 users** over the same
  16-month window (§6) — within rounding noise of the `contact` event's 682
  fires / 534 users. The event tracks the page view, not a submission.
- The real Enhanced Measurement completion signal, `form_submit`, fired only
  **15 times from 11 distinct users** in 16 months — the plausible,
  defensible number of actual contact-form submissions for a small B2B
  agency site. **This is not marked as a key event.**
- `contact`'s geographic breakdown (440 India, 71 US, 57 Netherlands, 27
  Germany, 21 China, 14 Singapore, 9 Russia) shows meaningful volume from
  the same China/Singapore bot-traffic countries flagged in §2.4 — further
  evidence it is firing on pageview/bot traffic, not genuine inquiries.
- `blog` (289 fires) and `portfolio` (5 fires) share the same
  page-category-pageview naming pattern and are also marked as key events —
  most likely auto-fired by the legacy MonsterInsights plugin stream (§1)
  rather than representing deliberate conversion actions.

**Net effect**: of the four events currently marked as Key Events
(`page_view`, `contact`, `blog`, `portfolio`), **none reliably represents a
verified lead or conversion.** Any historical "key event" or "conversion"
total from this property should not be used to judge marketing performance.

### 5.2 Per-brief event inventory

| Requested signal | Exists on this property? | Detail |
|---|---|---|
| Contact form submissions | Partially — `form_submit` (15/16mo) is the real signal but unflagged; `contact` (682/16mo) is mislabeled as one | Needs redesign |
| Inquiry submissions | Not distinctly tracked | — |
| Telephone clicks | **No** | Folded into generic `click` if tracked at all |
| Email clicks | **No** | Folded into generic `click` if tracked at all |
| WhatsApp clicks | **No** | Folded into generic `click` if tracked at all |
| Consultation requests | Not distinctly tracked | — |
| CTA clicks | Not distinctly tracked | Generic `click` only |
| Video engagement | **Yes** | `video_start` / `video_progress` / `video_complete` — correctly configured, not over-counted as conversions |
| Other | `form_start` (549/16mo, intent signal, correctly not a key event); `scroll` (depth signal) | Reasonably configured |

### 5.3 Duplicate / ambiguous event names (per brief's explicit instruction)

1. **`contact` vs. `form_submit` vs. `form_start`** — three different events
   plausibly touching the same user action, with wildly different volumes
   (682 / 15 / 549) and no naming hierarchy to explain the difference. This
   is the single most important data-quality issue for lead-generation
   reporting on this property.
2. **`blog` / `portfolio` / `about_us`** are page-category pageview events
   sitting alongside real pageview tracking (`page_view`) with no clear
   differentiation in name from a genuine engagement or conversion action —
   a stakeholder glancing at "Key events: blog, contact, page_view,
   portfolio" would reasonably (and incorrectly) read these as real
   conversions.

### 5.4 Recommendation for the new site

Design explicit, action-named events for each real conversion:
`contact_form_submit` (fired only on successful submission — replacing the
ambiguous `contact`/`form_submit` pair), `phone_click`, `email_click`,
`whatsapp_click`, `consultation_request` — each marked as its own Key Event.
Keep page-category pageview tracking (blog views, portfolio views) as
ordinary non-key custom dimensions for content-performance reporting, not
conversions. **This is a design recommendation for the new build — no
changes were made to the current property**, per the brief's read-only
constraint.

No test submissions or production conversion events were triggered during
this audit.

---

## 6. Website behavior analysis

Uses the full 16-month window via the standard "Pages and screens" report
(not subject to the Explore retention cap).

**Totals**: 12,775 page views | 7,905 active users | 1.62 views/active user
| 19s avg engagement time/active user | 41,777 total events.

### 6.1 Top 10 pages by views (16-month)

| # | Page path | Views | % | Active users | Avg engagement time/user | Event count |
|---|---|---|---|---|---|---|
| 1 | `/` (homepage) | 5,882 | 46.04% | 4,123 | 12s | 19,103 (45.73%) |
| 2 | `/careers/` | 817 | 6.4% | 662 | **44s** | 3,024 (7.24%) |
| 3 | `/contact/` | 677 | 5.3% | 529 | 17s | 2,395 (5.73%) |
| 4 | `/feature-films/` | 454 | 3.55% | 335 | 31s | 1,247 (2.98%) |
| 5 | `/explainer-video-company/` | 306 | 2.4% | 261 | 10s | 960 (2.3%) |
| 6 | `/creative-video-productions/` | 295 | 2.31% | 190 | 16s | 692 (1.66%) |
| 7 | `/digital-marketing-solutions/` | 248 | 1.94% | 165 | 15s | 628 (1.5%) |
| 8 | `/success-stories/` | 238 | 1.86% | 185 | 20s | 625 (1.5%) |
| 9 | `/ad-films/` | 230 | 1.8% | 176 | 27s | 799 (1.91%) |
| 10 | `/blogs/` | 230 | 1.8% | 114 | 30s | 781 (1.87%) |

A GA4-generated (AI, unverified) anomaly note on this report flagged: "On
October 28, 2026, views for page path `/` reached 150, significantly higher
than the expected value of 8," attributed to an "India traffic surge" (4→149
week-over-week) and "Apple device traffic increase" (2→22 week-over-week).
Treated here as a single-day spike inside the 16-month total — likely a
campaign, PR mention or social share — not a new steady-state traffic level.

**`/contact/`'s 677 views / 529 users sits within rounding noise of the
`contact` event's 682 fires / 534 users** — the direct confirmation closing
the loop on §5.1's finding.

The orphan `/video-production-services/` page and most of the "pages with no
mapped destination" (per `EXECUTIVE_SUMMARY.md` §9.4) do not appear in this
top-10 list — confirming they are lower-traffic, niche pages, consistent
with treating them as consolidate/keep/drop decisions rather than
high-traffic pages needing urgent preservation.

### 6.2 Scroll, outbound clicks, downloads, video

- **Scroll depth**: 2,669 events, 1,889 users (23.9% of all users scrolled
  past 90% of a page) — a moderate signal, consistent with generally short
  page-level engagement outside `/careers/`, `/feature-films/`, `/blogs/`.
- **Outbound clicks**: 189 events, 137 users (1.73%) — real but not broken
  out by destination (see §5.2 — no distinct call/email/WhatsApp events).
- **File downloads: zero `file_download` events in 16 months**, despite
  Enhanced Measurement's "File downloads" toggle confirmed ON at the
  property level. Either the site has no downloadable files (plausible —
  no PDFs/brochures/case-study downloads observed), or download links exist
  but don't use a recognized file extension. Flagged as a data gap, not a
  "users don't download" finding.
- **Video engagement is real and meaningfully sized**: `video_progress`
  (280 fires) is the 9th-largest event on the whole property, ahead of
  generic `click`. Given this is a video-production company whose site
  embeds extensive client work (56 YouTube video IDs catalogued in
  `YOUTUBE_VIDEO_INVENTORY.csv`), this is a channel worth expanding
  tracking on in the new site — e.g., per-video engagement tied to which
  case-study/portfolio videos retain viewers longest.

### 6.3 User journeys / navigation paths / entry-exit patterns

**Not completed this pass** — GA4's Path Exploration technique was not run
due to time constraints and the same Explore retention-window limitation
documented in §3/§8. Flagged as a follow-up: a dedicated Path exploration
starting from the homepage node (on the "This month" in-bounds preset) would
show the most common next-page click patterns (homepage → service pages →
contact), directly useful for the 29-page rebuild's information
architecture. See §8.

---

## 7. Cross-reference with the earlier SEO/GSC/Semrush audits

| Prior finding | GA4 status |
|---|---|
| "GA4 not obtainable" (Porter plan limits) | **Resolved** — direct browser access used instead |
| "0 paid Google Ads keywords" (Semrush) | **Corrected** — GA4 shows real `google / cpc` traffic (180 sessions, 16mo) and a "Paid Search" channel (181 sessions) |
| Branded-search dominance (~208 of 239 monthly organic visits via "pathway productions") | **Corroborated** — 57% of organic-search sessions land on the homepage this month |
| 41 blog posts with no destination = biggest migration risk | **Corroborated and strengthened** — `/blogs` shows the strongest organic engagement signal measured in this audit (1m 22s avg time) |
| `/video-production-services` orphan page, ~50 backlinks, GSC-confirmed indexed & earning clicks | **Corroborated** — earns real organic sessions directly (100% engagement) in GA4 too |
| Mobile Core Web Vitals "Poor" on 100% of measured URLs (GSC) | **Quantified** — mobile is a smaller but higher-engaging audience overall, and organic mobile shows a perfect 100% engagement rate vs. desktop's 82.6% — the performance problem is likely suppressing a strong-converting segment |
| `/careers` not previously analyzed | **New finding** — #2 page/landing page by volume and engagement, driven by naukri.com job-portal referrals; recruitment, not commercial, traffic |

---

## 8. Data gaps / follow-ups

1. **GA4 Explore's lookback cap** (empirically ~93 days or less on this
   property) blocked a full 16-month landing-page table, organic
   mobile/desktop trend-over-time, and Path Exploration. Likely cause:
   Admin → Data Settings → Data Retention is set to the short default (2
   months) rather than the extended 14-month option. **Recommended action**:
   increase Data Retention in Admin (a configuration change requiring
   explicit approval, not performed in this read-only audit), then re-run
   Explore-based analyses for the full window.
2. **3/6/12-month individual windows and year-over-year comparison** were
   not separately extracted — only the 16-month cumulative totals and a
   1-month (October 2026) snapshot were pulled this pass, due to time
   constraints after the Explore-cap troubleshooting. A follow-up pass using
   the standard Reports' date-range picker (which does persist custom
   ranges, unlike Explore) could extract clean 3/6/12-month and YoY
   comparisons directly.
3. **Campaign-level traffic** (UTM campaign parameter) was not separately
   broken out.
4. **User journeys / navigation-path exploration** (§6.3) not completed.
5. **Event parameter-level breakdown** (e.g., what page/button triggered each
   `click` or `contact` event) was only partially explored; a full parameter
   audit would let `click` be split into call/email/WhatsApp/other outbound
   destinations without new tracking, if parameter data already exists.
6. **Bot-traffic quantification** (§2.4) is directional, based on geography
   and engagement-time patterns — not a precise bot percentage. A dedicated
   segment built on "India OR engagement time > 10s" vs. its complement
   would let every metric in this audit be re-run on a "real traffic only"
   basis.

---

## 9. Items requiring Arun's approval (GA4-specific, additive to `EXECUTIVE_SUMMARY.md` §9)

1. Whether to increase this property's Data Retention setting (Admin →
   Data Settings) to enable full-window Explore analysis going forward.
2. Whether to un-mark `page_view`, `contact`, `blog` and `portfolio` as Key
   Events on the current property (or leave as-is and only fix this in the
   new site's configuration from day one).
3. Whether to configure distinct phone/email/WhatsApp-click and
   consultation-request events on the new site, replacing the current
   undifferentiated `click` event, per §5.4.
4. Whether to set up bot/datacenter-traffic filtering (known-bot exclusion
   verification, geo/IP segmentation) on the new property before launch.
5. Confirm the new site's Measurement ID is set cleanly, independent of the
   stale "MonsterInsights" stream ID still present on this property.
