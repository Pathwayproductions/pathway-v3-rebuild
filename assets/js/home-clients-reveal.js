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

  // Reveal the "Meet Our Clients" button only once the curtain reports
  // itself open — watched via its data-state attribute rather than
  // hooking the curtain button's own click handler, so this stays
  // decoupled from main.js.
  var unlocked = false;
  function checkUnlock() {
    if (unlocked || curtainAnswer.getAttribute('data-state') !== 'revealed') return;
    unlocked = true;
    // Let the curtain's own open animation and count-up settle first,
    // so the button arrives after the milestones have actually landed.
    setTimeout(function () {
      unlockRow.classList.add('is-unlocked');
      unlockRow.inert = false;
    }, reduced ? 0 : 850);
  }
  checkUnlock();
  new MutationObserver(checkUnlock).observe(curtainAnswer, {
    attributes: true,
    attributeFilter: ['data-state']
  });

  var expanded = false;

  function setLabel() {
    if (!label) return;
    label.textContent = expanded
      ? (openBtn.dataset.labelOn || 'Take a Bow')
      : (openBtn.dataset.labelOff || 'Meet Our Clients');
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
      clientsSection.addEventListener('transitionend', function onOpen(e) {
        if (e.target !== clientsSection || e.propertyName !== 'max-height') return;
        clientsSection.removeEventListener('transitionend', onOpen);
        clientsSection.style.maxHeight = 'none';
        clientsSection.classList.remove('clients-expanding');
        clientsSection.classList.add('clients-open');
        clientsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
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
      clientsSection.addEventListener('transitionend', function onClose(e) {
        if (e.target !== clientsSection || e.propertyName !== 'max-height') return;
        clientsSection.removeEventListener('transitionend', onClose);
        clientsSection.classList.remove('clients-collapsing');
        clientsSection.classList.add('clients-collapsed');
        clientsSection.setAttribute('aria-hidden', 'true');
        clientsSection.inert = true;
      });
    }
  });
})();
