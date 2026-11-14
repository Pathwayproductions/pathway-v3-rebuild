/**
 * Cookie consent banner + Google Consent Mode v2 updater — Pathway Productions.
 *
 * Consent Mode v2 defaults (ad_storage, ad_user_data, ad_personalization,
 * analytics_storage all denied) are set in the <head> of every page, before
 * GTM loads. This script only handles the visible banner and pushes the
 * visitor's choice as a gtag('consent','update', ...) call once they decide,
 * which GTM and GA4 read from the same dataLayer.
 */
(function () {
  "use strict";

  var STORAGE_KEY = "pw_consent_v1";

  function getStoredConsent() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function storeConsent(choice) {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ choice: choice, ts: new Date().toISOString() })
      );
    } catch (e) {
      /* localStorage unavailable (private mode, blocked) — consent still
         applies for this page load via gtag update below, banner will just
         reappear next visit. */
    }
  }

  function updateConsent(granted) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    var state = granted ? "granted" : "denied";
    gtag("consent", "update", {
      ad_storage: state,
      ad_user_data: state,
      ad_personalization: state,
      analytics_storage: state,
    });
  }

  function hideBanner(el) {
    el.classList.remove("is-visible");
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 400);
  }

  function buildBanner() {
    var el = document.createElement("div");
    el.id = "pw-consent";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-live", "polite");
    el.setAttribute("aria-label", "Cookie consent");
    el.innerHTML =
      '<div id="pw-consent__inner">' +
      '<p id="pw-consent__text">We use cookies to run this site and, with your permission, ' +
      "to measure traffic and personalize ads (Google Analytics, Google Ads). " +
      '<strong>Essential cookies are always on.</strong> You can change this anytime.</p>' +
      '<div id="pw-consent__actions">' +
      '<button type="button" id="pw-consent__reject">Reject non-essential</button>' +
      '<button type="button" id="pw-consent__accept">Accept all</button>' +
      "</div>" +
      "</div>";
    return el;
  }

  function showBanner() {
    var el = buildBanner();
    document.body.appendChild(el);
    // allow the transition to run
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        el.classList.add("is-visible");
      });
    });

    el.querySelector("#pw-consent__accept").addEventListener("click", function () {
      updateConsent(true);
      storeConsent("accepted");
      hideBanner(el);
    });

    el.querySelector("#pw-consent__reject").addEventListener("click", function () {
      updateConsent(false);
      storeConsent("rejected");
      hideBanner(el);
    });
  }

  function init() {
    var stored = getStoredConsent();
    if (stored) {
      // Re-apply their earlier choice on every page load, since Consent Mode
      // defaults reset to denied on each fresh page unless re-granted.
      updateConsent(stored.choice === "accepted");
      return;
    }
    showBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  // Expose a tiny API so a future "Manage cookie preferences" link
  // (e.g. in the footer) can reopen the banner without a page reload.
  window.pwReopenConsentBanner = function () {
    var existing = document.getElementById("pw-consent");
    if (existing) return;
    showBanner();
  };
})();
