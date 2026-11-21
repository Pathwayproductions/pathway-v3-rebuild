/**
 * Pathway Productions — sitewide "Book a call" modal
 *
 * Loaded on every page. Builds the booking modal on demand and wires it up
 * to any trigger element marked [data-open-meeting] — currently the header
 * "Book a call" button (desktop) and its mobile-menu equivalent. Exposes
 * window.PathwayMeetings.open() so the homepage's proactive popup
 * (meeting-popup.js) can reuse the exact same modal instead of building a
 * second one.
 *
 * Switched back 2026-11-21 to the HubSpot Meetings embed, at Arun's
 * request — now pointed at the dedicated "pathway" meetings link
 * (meetings-na2.hubspot.com/pathway) rather than the earlier
 * meetings-na2.hubspot.com/karthik-ravi link. The karthik-ravi link was
 * swapped out on 2026-11-20 for a plain Google Calendar iframe because it
 * was generating a stray confirmation email on every booking — traced to
 * HubSpot syncing a non-natively-connected calendar. That's since been
 * fixed properly (a dedicated HubSpot user with native Calendar Sync
 * enabled — see docs/CTA_WIDGETS.md), so the HubSpot embed is back, using
 * that user's own meetings link.
 *
 * HubSpot's companion script (MeetingsEmbedCode.js) replaces the
 * .meetings-iframe-container[data-src] div with its own iframe — but it
 * only scans the page for that div once, right when it finishes loading;
 * it does not watch for one added later. The modal (and its container
 * div) is therefore built eagerly below, as soon as the page is ready and
 * hidden with CSS, *before* the script is requested — not lazily on first
 * click, which left the script with nothing to find and produced a blank
 * popup. openModal()/closeModal() just toggle visibility from here on.
 */
(function () {
  'use strict';

  // HubSpot's own "pathway" meetings link, used exactly as HubSpot's embed
  // code provides it.
  var MEETINGS_SRC = 'https://meetings-na2.hubspot.com/pathway?embed=true';
  var MEETINGS_SCRIPT = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

  var modal = null;
  var scriptRequested = false;

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function ensureMeetingsScript() {
    if (scriptRequested || document.querySelector('script[src="' + MEETINGS_SCRIPT + '"]')) return;
    scriptRequested = true;
    var s = document.createElement('script');
    s.src = MEETINGS_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }

  function buildModal() {
    var el = document.createElement('div');
    el.className = 'meet-modal';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Book a call with Pathway Productions');
    el.innerHTML =
      '<div class="meet-modal-backdrop"></div>' +
      '<div class="meet-modal-panel">' +
        '<button type="button" class="meet-modal-close" aria-label="Close">&times;</button>' +
        '<div class="meetings-iframe-container" data-src="' + MEETINGS_SRC + '"></div>' +
      '</div>';
    document.body.appendChild(el);

    el.querySelector('.meet-modal-close').addEventListener('click', closeModal);
    el.querySelector('.meet-modal-backdrop').addEventListener('click', closeModal);
    return el;
  }

  function openModal() {
    if (!modal) modal = buildModal();
    modal.classList.add('is-open');
    document.body.classList.add('meet-modal-open');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    document.body.classList.remove('meet-modal-open');
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  function wireTriggers() {
    var triggers = document.querySelectorAll('[data-open-meeting]');
    for (var i = 0; i < triggers.length; i++) {
      triggers[i].addEventListener('click', function (e) {
        e.preventDefault();
        openModal();
      });
    }
  }

  window.PathwayMeetings = { open: openModal, close: closeModal };

  onReady(function () {
    wireTriggers();
    modal = buildModal();
    ensureMeetingsScript();
  });
})();
