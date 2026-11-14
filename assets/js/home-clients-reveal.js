/* Home page only: two-stage reveal between "By the numbers" and "Our
   clients". The "Meet Our Clients" button stays invisible — not just
   faded, not in the tab order — until the curtain above it has actually
   been raised, and the whole "Our clients" section stays collapsed to
   nothing until that button is clicked. Deliberately kept separate from
   main.js's generic [data-reveal-trigger] loop rather than extending it:
   this is a one-off two-stage, whole-section interaction specific to
   this page, not a pattern reused elsewhere on the site.

   No-JS fallback: without this script, #clients-open-btn stays hidden
   (it inherits the site-wide .pi-reveal-btn{display:none} rule, same as
   every other reveal trigger, and only ever gets enhanced into view by
   script), and the "Our clients" section is never collapsed in the
   first place — a no-JS visitor just sees it as a normal section. */
(function () {
  var curtainAnswer = document.getElementById('stats-curtain');
  var unlockRow = document.querySelector('.clients-unlock-row');
  var openBtn = document.getElementById('clients-open-btn');
  var clientsSection = document.getElementById('clients');
  var clientsGrid = document.getElementById('clients-reveal');
  if (!curtainAnswer || !unlockRow || !openBtn || !clientsSection || !clientsGrid) return;

  var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var label = openBtn.querySelector('[data-label]');

  openBtn.classList.add('is-enhanced');
  unlockRow.inert = true;

  // Collapse the clients section the moment JS is enhancing the page.
  clientsSection.classList.add('clients-collapsed');
  clientsSection.setAttribute('aria-hidden', 'true');
  clientsSection.inert = true;

  var expanded = false;
  var unlockTimer = null;

  function setLabel() {
    if (!label) return;
    label.textContent = expanded
      ? (openBtn.dataset.labelOn || 'Take a Bow')
      : (openBtn.dataset.labelOff || 'Meet Our Clients');
  }

  // Instantly resets everything to closed, no transition — used when the
  // curtain itself closes and takes "Meet Our Clients" away with it while
  // the clients section happens to be open. A direct click on the button
  // still gets the full animated close in the click handler below; this is
  // only for the secondary case where the button disappears out from under
  // an open section.
  function snapClosed() {
    clientsSection.removeEventListener('transitionend', onOpenEnd);
    clientsSection.removeEventListener('transitionend', onCloseEnd);
    clientsSection.classList.remove('clients-open', 'clients-expanding', 'clients-collapsing');
    clientsSection.classList.add('clients-collapsed');
    clientsSection.style.maxHeight = '';
    clientsSection.setAttribute('aria-hidden', 'true');
    clientsSection.inert = true;
    clientsGrid.setAttribute('data-state', 'hidden');
    expanded = false;
    openBtn.setAttribute('aria-expanded', 'false');
    setLabel();
  }

  // The "Meet Our Clients" button tracks the curtain both ways — it
  // appears once the curtain reports itself open, and disappears again the
  // moment the curtain closes, watched via data-state rather than hooking
  // the curtain button's own click handler, so this stays decoupled from
  // main.js. If the clients section happened to be open when the curtain
  // closes, it closes right along with the button that controls it.
  function syncUnlock() {
    var isUp = curtainAnswer.getAttribute('data-state') === 'revealed';
    if (isUp) {
      if (unlockRow.classList.contains('is-unlocked') || unlockTimer) return;
      // Let the curtain's own open animation and count-up settle first,
      // so the button arrives after the milestones have actually landed.
      unlockTimer = setTimeout(function () {
        unlockRow.classList.add('is-unlocked');
        unlockRow.inert = false;
        unlockTimer = null;
      }, reduced ? 0 : 850);
    } else {
      if (unlockTimer) { clearTimeout(unlockTimer); unlockTimer = null; }
      unlockRow.classList.remove('is-unlocked');
      unlockRow.inert = true;
      if (expanded) snapClosed();
    }
  }
  syncUnlock();
  new MutationObserver(syncUnlock).observe(curtainAnswer, {
    attributes: true,
    attributeFilter: ['data-state']
  });

  function onOpenEnd(e) {
    if (e.target !== clientsSection || e.propertyName !== 'max-height') return;
    clientsSection.removeEventListener('transitionend', onOpenEnd);
    clientsSection.style.maxHeight = 'none';
    clientsSection.classList.remove('clients-expanding');
    clientsSection.classList.add('clients-open');
    clientsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function onCloseEnd(e) {
    if (e.target !== clientsSection || e.propertyName !== 'max-height') return;
    clientsSection.removeEventListener('transitionend', onCloseEnd);
    clientsSection.classList.remove('clients-collapsing');
    clientsSection.classList.add('clients-collapsed');
    clientsSection.setAttribute('aria-hidden', 'true');
    clientsSection.inert = true;
  }

  openBtn.addEventListener('click', function () {
    expanded = !expanded;
    openBtn.setAttribute('aria-expanded', String(expanded));
    setLabel();

    if (expanded) {
      clientsSection.removeAttribute('aria-hidden');
      clientsSection.inert = false;
      clientsGrid.setAttribute('data-state', 'revealed');

      if (reduced) {
        clientsSection.classList.remove('clients-collapsed');
        clientsSection.classList.add('clients-open');
        return;
      }
      // scrollHeight ignores the overflow:hidden clipping, so this reads
      // the section's true full content height while it's still
      // collapsed — no need to remove .clients-collapsed first to
      // measure it. Then pin the starting point at an explicit 0px and
      // force a reflow before setting the target: removing the class and
      // setting the target height in the same tick, with nothing forcing
      // the browser to commit the "0" state first, collapses into one
      // style recalc and the max-height jumps straight to its target
      // with no transition (and so no transitionend ever fires) — this
      // is what the collapse branch below already does correctly.
      var openTarget = clientsSection.scrollHeight;
      clientsSection.style.maxHeight = '0px';
      clientsSection.classList.remove('clients-collapsed');
      clientsSection.classList.add('clients-expanding');
      void clientsSection.offsetHeight; // force reflow before expanding
      clientsSection.style.maxHeight = openTarget + 'px';
      clientsSection.addEventListener('transitionend', onOpenEnd);
    } else {
      clientsGrid.setAttribute('data-state', 'hidden');
      clientsSection.classList.remove('clients-open');

      if (reduced) {
        clientsSection.classList.add('clients-collapsed');
        clientsSection.setAttribute('aria-hidden', 'true');
        clientsSection.inert = true;
        return;
      }
      var closeStart = clientsSection.scrollHeight;
      clientsSection.style.maxHeight = closeStart + 'px';
      void clientsSection.offsetHeight; // force reflow before collapsing
      clientsSection.classList.add('clients-collapsing');
      clientsSection.style.maxHeight = '0px';
      clientsSection.addEventListener('transitionend', onCloseEnd);
    }
  });
})();
