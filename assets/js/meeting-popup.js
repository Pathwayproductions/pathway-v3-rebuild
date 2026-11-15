/**
 * Pathway Productions — "Book a call" popup (homepage trial only)
 *
 * Replaces the sitewide sticky mini contact-form bar on this page (see
 * cta-widgets.js's disableStickyBar flag, set below in index.html) with a
 * proactive nudge toward booking a HubSpot Meetings slot — a different
 * alternate path than the enquiry forms on the page, not a duplicate of one.
 *
 * Behaviour:
 *   - Slides in bottom-left after a short delay, or earlier if the visitor
 *     scrolls halfway down the page — same dual-trigger pattern the old
 *     sticky bar used, since it already matched how people actually read
 *     this page.
 *   - "Book a call" opens the HubSpot Meetings scheduler in an on-page modal
 *     (the official embed snippet HubSpot generates for this meeting link),
 *     rather than sending the visitor away to a separate HubSpot page.
 *   - Dismissing it (the × or booking a call) remembers the choice in
 *     localStorage so it never nags a returning visitor again.
 *   - Yields to HubSpot's live chat widget if that's open, same courtesy
 *     cta-widgets.js already gives it.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'pw_meeting_popup_v1';
  var DELAY_MS = 18000;
  var SCROLL_PCT = 50;

  // From the embed code HubSpot generated for this meeting link.
  var MEETINGS_SRC = 'https://meetings-na2.hubspot.com/karthik-ravi?embed=true';
  var MEETINGS_SCRIPT = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js';

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
    return el;
  }

  var meetingsScriptLoaded = false;
  function ensureMeetingsScript() {
    if (meetingsScriptLoaded) return;
    meetingsScriptLoaded = true;
    var s = document.createElement('script');
    s.src = MEETINGS_SCRIPT;
    s.async = true;
    document.body.appendChild(s);
  }

  function init() {
    if (dismissedBefore()) return;

    var popup = buildPopup();
    var modal = null;

    function closePopup(remember) {
      popup.classList.remove('is-visible');
      if (remember) rememberDismissed();
      setTimeout(function () {
        if (popup.parentNode) popup.parentNode.removeChild(popup);
      }, 350);
    }

    function openModal() {
      if (!modal) modal = buildModal();
      ensureMeetingsScript();
      modal.classList.add('is-open');
      document.body.classList.add('meet-modal-open');
      closePopup(true);
    }

    popup.querySelector('.meet-popup-close').addEventListener('click', function () {
      closePopup(true);
    });
    popup.querySelector('.meet-popup-cta').addEventListener('click', openModal);

    document.addEventListener('click', function (e) {
      if (!modal || !modal.classList.contains('is-open')) return;
      if (e.target === modal.querySelector('.meet-modal-backdrop') ||
          e.target.closest('.meet-modal-close')) {
        modal.classList.remove('is-open');
        document.body.classList.remove('meet-modal-open');
      }
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

    // Same courtesy cta-widgets.js gives HubSpot's live chat: don't sit on
    // top of it if it's open.
    function wireChatEvents() {
      if (!window.HubSpotConversations || !window.HubSpotConversations.on) return;
      window.HubSpotConversations.on('widgetOpen', function () {
        popup.classList.add('is-chat-open');
      });
      window.HubSpotConversations.on('widgetClosed', function () {
        popup.classList.remove('is-chat-open');
      });
    }
    if (window.HubSpotConversations) {
      wireChatEvents();
    } else {
      window.hsConversationsOnReady = window.hsConversationsOnReady || [];
      window.hsConversationsOnReady.push(wireChatEvents);
    }
  }

  onReady(init);
})();
