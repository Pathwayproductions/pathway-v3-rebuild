/**
 * Pathway Productions — sitewide "Book a call" modal
 *
 * Loaded on every page. Builds the HubSpot Meetings booking modal on demand
 * and wires it up to any trigger element marked [data-open-meeting] —
 * currently the header "Book a call" button (desktop) and its mobile-menu
 * equivalent. Exposes window.PathwayMeetings.open() so the homepage's
 * proactive popup (meeting-popup.js) can reuse the exact same modal instead
 * of building a second one.
 */
(function () {
  'use strict';

  // From the embed code HubSpot generated for this meeting link.
  var MEETINGS_SRC = 'https://meetings-na2.hubspot.com/karthik-ravi?embed=true';
  var MEETINGS_SCRIPT = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

  var modal = null;
  var meetingsScriptLoaded = false;

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
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

  function ensureMeetingsScript() {
    if (meetingsScriptLoaded) return;
    meetingsScriptLoaded = true;
    var s = document.createElement('script');
    s.src = MEETINGS_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }

  function openModal() {
    if (!modal) modal = buildModal();
    ensureMeetingsScript();
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

  onReady(wireTriggers);
})();
