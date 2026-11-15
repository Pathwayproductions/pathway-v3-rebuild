/**
 * Pathway Productions — WhatsApp floating button
 *
 * This file used to also build a sitewide sticky mini contact-form bar
 * labelled "Let's have a chat". Removed 2026-11-15 at Arun's request: it was
 * easy to mistake for HubSpot's actual live-chat widget (same bottom-corner
 * popup pattern, chat-style label), while it was really just a compact copy
 * of the enquiry form already on every page — duplicate coverage, not a
 * distinct option. See docs/CTA_WIDGETS.md for the full history.
 *
 * The homepage's old "book a call" replacement for that slot predates this
 * removal and is unaffected — see assets/js/meeting-popup.js.
 *
 * Only the WhatsApp button remains here. Per-page usage is unchanged:
 *   <link rel="stylesheet" href="assets/css/cta-widgets.css">
 *   <script src="assets/js/cta-widgets.js" defer></script>
 * (adjust the relative path depth to match the page, same as main.js)
 *
 * A page can still override the WhatsApp number/message by setting
 * window.CTAW_CONFIG = { whatsappNumber: '...', whatsappMessage: '...' }
 * before this script runs.
 */
(function () {
  'use strict';

  var GLOBAL = {
    whatsappNumber: '918056994433',
    whatsappMessage: "Hi, I'd like to know more about your services."
  };

  var cfg = {};
  var override = window.CTAW_CONFIG || {};
  [GLOBAL, override].forEach(function (src) {
    for (var k in src) { if (src[k] !== undefined) cfg[k] = src[k]; }
  });

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

  function init() {
    var waBtn = buildWhatsApp();
    if (waBtn) {
      document.body.appendChild(waBtn);
      requestAnimationFrame(function () { waBtn.classList.add('is-visible'); });
    }
  }

  onReady(init);
})();
