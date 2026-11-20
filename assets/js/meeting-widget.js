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
 * Switched 2026-11-20 from the embedded HubSpot Meetings link
 * (meetings-na2.hubspot.com/karthik-ravi) to Karthik's Google Calendar
 * appointment-scheduling page, at Arun's request — the HubSpot meeting link
 * was generating an extra confirmation email via a HubSpot-side forwarding
 * address (karthik+2Eravi=pathwayproductions.in@hubspotfree.na2.hs-send.com)
 * on every booking. Google's scheduling page is a plain iframe embed with no
 * companion script, unlike HubSpot's, which needed MeetingsEmbedCode.js to
 * inject the iframe itself — see the removed MEETINGS_SCRIPT/
 * ensureMeetingsScript() below this comment in git history if that's ever
 * needed again.
 */
(function () {
  'use strict';

  // Karthik's Google Calendar appointment-scheduling page (the booking URL
  // from its own "Book an appointment" embed code), used directly as an
  // iframe src.
  var MEETINGS_SRC = 'https://calendar.google.com/calendar/appointments/AcZssZ3B8BFrWMxSdg3XB4nxTj-WbX8R7FZxxCVp7i4=?gv=true';

  var modal = null;

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
        '<div class="meetings-iframe-container">' +
          '<iframe src="' + MEETINGS_SRC + '" title="Book a call — Google Calendar scheduling" frameborder="0"></iframe>' +
        '</div>' +
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

  onReady(wireTriggers);
})();
