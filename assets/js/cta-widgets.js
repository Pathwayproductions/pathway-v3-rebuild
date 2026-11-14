/**
 * Pathway Productions — Lead-capture widgets (WhatsApp, sticky form, chat)
 *
 * What this implements (see docs/CTA_WIDGETS.md for the full rationale):
 *   WEB-003 — sticky form bar and HubSpot chat don't compete for attention:
 *             the sticky bar yields (hides) while chat is open.
 *   WEB-004 — the sticky form carries a hidden "service interest" field,
 *             pre-set per page, mapped to the same HubSpot "Service Required"
 *             property the chatbot now saves to.
 *   WEB-005 — the sticky bar's trigger delay is longer on blog pages than on
 *             service pages, so it doesn't interrupt someone mid-read.
 *
 * No per-page config file is needed: global constants live in GLOBAL below,
 * and each page's service-interest / page-type is resolved from its URL
 * path via SERVICE_BY_PATH / BLOG_PATHS, so adding the two includes below is
 * the only per-page change required:
 *   <link rel="stylesheet" href="assets/css/cta-widgets.css">
 *   <script src="assets/js/cta-widgets.js" defer></script>
 * (adjust the relative path depth to match the page, same as main.js)
 *
 * A page can still override anything by setting window.CTAW_CONFIG before
 * this script runs — useful for a one-off page that needs a different
 * WhatsApp message, etc. Whatever it sets wins over the computed defaults.
 */
(function () {
  'use strict';

  var GLOBAL = {
    hubspotPortalId: '3873487',
    // HubSpot form GUID the sticky form submits to — the portal's existing
    // "Contact Us" form, reused rather than creating a new one. See
    // docs/CTA_WIDGETS.md for the field-name assumption this relies on.
    hubspotFormId: '37061c22-4d48-4a76-80de-fc8b6425c50d',
    // The portal's forms are served from the na2 region (js-na2.hsforms.net
    // in the form's own embed snippet) — the submission endpoint has to
    // match that region, not the default global one.
    hubspotRegion: 'na2',
    whatsappNumber: '918056994433',
    whatsappMessage: "Hi, I'd like to know more about your services."
  };

  // Path prefix -> HubSpot "Service Required" picklist value (exact match
  // to the property's own options, so chat and site forms tag leads the
  // same way). Longest/most-specific prefix wins; unmatched pages get null.
  var SERVICE_BY_PATH = [
    ['/digital-marketing/ppc/', 'Pay Per Click (PPC)'],
    ['/digital-marketing/seo-ai-search/', 'Search Engine Optimization (SEO)'],
    ['/digital-marketing/social-media/', 'Social Media Marketing (SMM)'],
    ['/digital-marketing/web-development/', 'Website Development'],
    ['/explainer-video-company/2d-animation/', '2D Animations'],
    ['/explainer-video-company/live-action-explainers/', 'Explainer Videos'],
    ['/explainer-video-company/ai-video-production/', 'Explainer Videos'],
    ['/explainer-video-company/', 'Explainer Videos'],
    ['/ad-films/', 'Ad Films'],
    ['/corporate-video-productions/', 'Corporate Videos']
  ];
  var BLOG_PATH_PREFIX = '/blogs/';

  function resolvePageDefaults() {
    var path = window.location.pathname;
    var service = null;
    var bestLen = 0;
    for (var i = 0; i < SERVICE_BY_PATH.length; i++) {
      var prefix = SERVICE_BY_PATH[i][0];
      if (path.indexOf(prefix) !== -1 && prefix.length > bestLen) {
        service = SERVICE_BY_PATH[i][1];
        bestLen = prefix.length;
      }
    }
    return {
      serviceInterest: service,
      pageType: path.indexOf(BLOG_PATH_PREFIX) !== -1 ? 'blog' : 'default'
    };
  }

  var cfg = {};
  var defaults = resolvePageDefaults();
  var override = window.CTAW_CONFIG || {};
  [GLOBAL, defaults, override].forEach(function (src) {
    for (var k in src) { if (src[k] !== undefined) cfg[k] = src[k]; }
  });

  var DELAY_MS = {
    default: 25000, // matches the HubSpot chat trigger delay already tuned live
    blog: 45000     // WEB-005: longer delay on blog posts
  };
  var SCROLL_PCT = 50; // show after 50% scroll, OR the time delay, whichever first

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function buildWhatsApp() {
    if (!cfg.whatsappNumber) return null;
    var a = document.createElement('a');
    a.className = 'ctaw-whatsapp';
    a.target = '_blank';
    a.rel = 'noopener';
    a.setAttribute('aria-label', 'Chat with us on WhatsApp');
    var msg = encodeURIComponent(cfg.whatsappMessage || "Hi, I'd like to know more about your services.");
    a.href = 'https://wa.me/' + cfg.whatsappNumber + '?text=' + msg;
    a.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.001 3C9.096 3 3.5 8.597 3.5 15.5c0 2.41.676 4.66 1.85 6.576L3 29l7.1-2.303a12.43 12.43 0 0 0 5.9 1.502h.005c6.904 0 12.5-5.597 12.5-12.5S22.905 3 16.001 3Zm0 22.7c-1.86 0-3.605-.5-5.108-1.37l-.366-.217-4.21 1.366 1.384-4.106-.238-.38a10.17 10.17 0 0 1-1.562-5.493c0-5.63 4.58-10.21 10.21-10.21s10.21 4.58 10.21 10.21-4.58 10.21-10.21 10.21Zm5.6-7.65c-.306-.153-1.81-.893-2.09-.995-.28-.102-.484-.153-.688.153-.204.306-.79.995-.969 1.199-.178.204-.357.23-.663.077-.306-.153-1.293-.477-2.463-1.52-.91-.812-1.525-1.814-1.704-2.12-.178-.306-.019-.47.134-.623.138-.137.306-.357.459-.535.153-.178.204-.306.306-.51.102-.204.051-.383-.026-.536-.077-.153-.688-1.657-.943-2.27-.248-.596-.5-.516-.688-.526l-.586-.01c-.204 0-.535.077-.815.383-.28.306-1.069 1.044-1.069 2.547s1.094 2.955 1.246 3.159c.153.204 2.154 3.29 5.221 4.613.73.315 1.3.503 1.744.644.733.233 1.4.2 1.928.121.588-.088 1.81-.74 2.065-1.454.255-.714.255-1.326.178-1.454-.076-.128-.28-.204-.586-.357Z"/></svg>';
    return a;
  }

  function buildStickyBar() {
    var wrap = document.createElement('div');
    wrap.className = 'ctaw-sticky';

    var bar = document.createElement('div');
    bar.className = 'ctaw-sticky-bar';
    bar.setAttribute('role', 'button');
    bar.setAttribute('tabindex', '0');
    bar.setAttribute('aria-expanded', 'false');
    bar.innerHTML =
      '<span class="ctaw-sticky-bar-label">Let’s have a chat</span>' +
      '<svg class="ctaw-sticky-bar-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
      '<path d="M5 7.5l5 5 5-5" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

    var body = document.createElement('div');
    body.className = 'ctaw-sticky-body';

    var form = document.createElement('form');
    form.className = 'ctaw-sticky-form';
    form.noValidate = true;
    form.innerHTML =
      '<input type="text" name="firstname" placeholder="Name" required autocomplete="name">' +
      '<input type="tel" name="phone" placeholder="Phone" required autocomplete="tel">' +
      '<input type="email" name="email" placeholder="Email" required autocomplete="email">' +
      '<textarea name="message" placeholder="How can we help?" rows="2"></textarea>' +
      '<button type="submit">Send</button>' +
      '<div class="ctaw-sticky-status" aria-live="polite"></div>';

    body.appendChild(form);
    wrap.appendChild(bar);
    wrap.appendChild(body);

    function toggle() {
      var open = wrap.classList.toggle('is-open');
      bar.setAttribute('aria-expanded', String(open));
    }
    bar.addEventListener('click', toggle);
    bar.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle(); }
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      submitStickyForm(form);
    });

    return wrap;
  }

  function submitStickyForm(form) {
    var statusEl = form.querySelector('.ctaw-sticky-status');
    var btn = form.querySelector('button');

    if (!cfg.hubspotFormId || !cfg.hubspotPortalId) {
      statusEl.textContent = "This form isn't connected yet — please call or WhatsApp us instead.";
      statusEl.className = 'ctaw-sticky-status is-error';
      return;
    }

    var fields = [
      { name: 'firstname', value: form.firstname.value.trim() },
      { name: 'phone', value: form.phone.value.trim() },
      { name: 'email', value: form.email.value.trim() },
      { name: 'message', value: form.message.value.trim() }
    ];
    if (cfg.serviceInterest) {
      fields.push({ name: 'service_required', value: cfg.serviceInterest });
    }

    btn.disabled = true;
    statusEl.textContent = 'Sending…';
    statusEl.className = 'ctaw-sticky-status';

    var apiHost = cfg.hubspotRegion ? 'api-' + cfg.hubspotRegion + '.hsforms.com' : 'api.hsforms.com';
    var endpoint = 'https://' + apiHost + '/submissions/v3/integration/submit/' +
      encodeURIComponent(cfg.hubspotPortalId) + '/' + encodeURIComponent(cfg.hubspotFormId);

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fields: fields,
        context: {
          pageUri: window.location.href,
          pageName: document.title
        }
      })
    })
      .then(function (res) {
        if (!res.ok) throw new Error('submit_failed');
        statusEl.textContent = "Thanks — we'll be in touch shortly.";
        statusEl.className = 'ctaw-sticky-status is-success';
        form.reset();
        btn.disabled = false;
      })
      .catch(function () {
        statusEl.textContent = "Something went wrong — please call or WhatsApp us instead.";
        statusEl.className = 'ctaw-sticky-status is-error';
        btn.disabled = false;
      });
  }

  function init() {
    var waBtn = buildWhatsApp();
    if (waBtn) {
      document.body.appendChild(waBtn);
      // WhatsApp is a small, expected, always-there control — unlike the
      // sticky form it has no reveal delay, it's just visible right away.
      requestAnimationFrame(function () { waBtn.classList.add('is-visible'); });
    }

    var sticky = buildStickyBar();
    document.body.appendChild(sticky);

    var delay = DELAY_MS[cfg.pageType] || DELAY_MS.default;
    var revealed = false;

    function reveal() {
      if (revealed) return;
      revealed = true;
      sticky.classList.add('is-visible');
      if (waBtn) waBtn.classList.add('ctaw-yield-bar');
    }

    var timer = setTimeout(reveal, delay);

    function onScroll() {
      var scrolled = window.scrollY || window.pageYOffset;
      var max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && (scrolled / max) * 100 >= SCROLL_PCT) {
        clearTimeout(timer);
        reveal();
        window.removeEventListener('scroll', onScroll);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });

    // WEB-003: yield to HubSpot chat when it opens, come back when it closes.
    if (window.HubSpotConversations) {
      wireChatEvents();
    } else {
      window.hsConversationsOnReady = window.hsConversationsOnReady || [];
      window.hsConversationsOnReady.push(wireChatEvents);
    }

    function wireChatEvents() {
      if (!window.HubSpotConversations || !window.HubSpotConversations.on) return;
      window.HubSpotConversations.on('widgetOpen', function () {
        sticky.classList.add('ctaw-yield-chat');
        if (waBtn) waBtn.classList.remove('ctaw-yield-bar');
      });
      window.HubSpotConversations.on('widgetClosed', function () {
        sticky.classList.remove('ctaw-yield-chat');
        if (waBtn && sticky.classList.contains('is-visible')) waBtn.classList.add('ctaw-yield-bar');
      });
    }
  }

  onReady(init);
})();
