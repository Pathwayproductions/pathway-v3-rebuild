/**
 * Pathway Productions — "Book a call" popup (homepage only)
 *
 * A proactive nudge toward booking a HubSpot Meetings slot — a different
 * alternate path than the enquiry forms on the page, not a duplicate of one.
 * Opens the same booking modal as the sitewide header "Book a call" button,
 * via window.PathwayMeetings.open() (assets/js/meeting-widget.js, which must
 * be loaded on this page before this file).
 *
 * Behaviour:
 *   - Slides in bottom-left after a short delay, or earlier if the visitor
 *     scrolls halfway down the page — same dual-trigger pattern the old
 *     sticky bar used, since it already matched how people actually read
 *     this page.
 *   - "Book a call" opens the shared booking modal rather than sending the
 *     visitor away to a separate HubSpot page.
 *   - Dismissing it (the × or booking a call) remembers the choice in
 *     localStorage so it never nags a returning visitor again.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'pw_meeting_popup_v1';
  var DELAY_MS = 18000;
  var SCROLL_PCT = 50;

  function dismissedBefore() {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1';
    } catch (e) {
      return false; // storage unavailable — fail open, just show it
    }
  }

  function rememberDismissed() {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {
      /* private mode / blocked storage — popup will just reappear next
         visit, no worse than it not persisting at all. */
    }
  }

  function onReady(fn) {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', fn);
    } else {
      fn();
    }
  }

  function buildPopup() {
    var el = document.createElement('div');
    el.className = 'meet-popup';
    el.setAttribute('role', 'complementary');
    el.setAttribute('aria-label', 'Book a call with Pathway Productions');
    el.innerHTML =
      '<button type="button" class="meet-popup-close" aria-label="Dismiss">&times;</button>' +
      '<div class="meet-popup-icon">' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2a1 1 0 0 1 1 1v1h8V3a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V3a1 1 0 0 1 1-1Zm13 8H4v10h16V10ZM7 13h3v3H7v-3Z"/></svg>' +
      '</div>' +
      '<p class="meet-popup-title">Rather talk than type?</p>' +
      '<p class="meet-popup-text">Book a free 15-minute call with our team — pick a time that works for you.</p>' +
      '<button type="button" class="meet-popup-cta">Book a call</button>';
    document.body.appendChild(el);
    return el;
  }

  function init() {
    if (dismissedBefore()) return;
    if (!window.PathwayMeetings) return; // meeting-widget.js failed to load — fail quiet, no broken popup

    var popup = buildPopup();

    function closePopup(remember) {
      popup.classList.remove('is-visible');
      if (remember) rememberDismissed();
      setTimeout(function () {
        if (popup.parentNode) popup.parentNode.removeChild(popup);
      }, 350);
    }

    popup.querySelector('.meet-popup-close').addEventListener('click', function () {
      closePopup(true);
    });
    popup.querySelector('.meet-popup-cta').addEventListener('click', function () {
      window.PathwayMeetings.open();
      closePopup(true);
    });

    var revealed = false;
    function reveal() {
      if (revealed) return;
      revealed = true;
      popup.classList.add('is-visible');
    }
    var timer = setTimeout(reveal, DELAY_MS);

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
  }

  onReady(init);
})();
