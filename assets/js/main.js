(function(){
  var toggle = document.getElementById('toggle');
  var links = document.getElementById('links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Header dropdown (mega menu): click-to-open on every breakpoint, via the
  // chevron toggle button. Also closes any other open menu first, and
  // dismisses on outside click or Escape.
  var navdrops = document.querySelectorAll('.navdrop');
  navdrops.forEach(function (drop) {
    var btn = drop.querySelector('.navdrop-toggle');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var isOpen = drop.classList.contains('open');
      navdrops.forEach(function (d) {
        d.classList.remove('open');
        var b = d.querySelector('.navdrop-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        drop.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.addEventListener('click', function (e) {
    navdrops.forEach(function (d) {
      if (!d.contains(e.target)) {
        d.classList.remove('open');
        var b = d.querySelector('.navdrop-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      navdrops.forEach(function (d) {
        d.classList.remove('open');
        var b = d.querySelector('.navdrop-toggle');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Internal-review-build pending-link interception.
  // Any link marked data-pending points to a page/asset that does not exist
  // yet in this milestone. Intercept the click and show a dismissible note
  // instead of a broken navigation or a fake destination.
  var banner = document.querySelector('.pending-banner');
  function showBanner(label) {
    if (!banner) return;
    var text = banner.querySelector('[data-pending-text]');
    if (text) text.textContent = label || 'This link is not part of this review milestone yet.';
    banner.classList.add('show');
  }
  document.querySelectorAll('[data-pending]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      showBanner(el.getAttribute('data-pending') || undefined);
    });
  });
  var dismiss = document.querySelector('[data-dismiss-banner]');
  if (dismiss && banner) {
    dismiss.addEventListener('click', function () { banner.classList.remove('show'); });
  }
})();

/* Video portfolio navigation; native swipe/keyboard scrolling also supported. */
document.querySelectorAll('[data-video-carousel]').forEach(carousel=>{
  const track=carousel.querySelector('.video-carousel__track');
  const prev=carousel.querySelector('[data-video-prev]');
  const next=carousel.querySelector('[data-video-next]');
  if(!track||!prev||!next)return;
  const move=direction=>{const card=track.querySelector('.video-card');if(!card)return;const gap=parseFloat(getComputedStyle(track).columnGap)||0;track.scrollBy({left:direction*(card.getBoundingClientRect().width+gap),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});};
  prev.addEventListener('click',()=>move(-1));next.addEventListener('click',()=>move(1));
  const update=()=>{prev.disabled=track.scrollLeft<3;next.disabled=track.scrollLeft+track.clientWidth>=track.scrollWidth-3;};
  track.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
});

/* Review-only hero treatment: reuse a genuine page-local image where one exists.
   If a page has no real image of its own, the hero stays plain text — it must
   never borrow another page's photo (that reads as one reused placeholder
   camera across unrelated pages) and must never guess a relative path depth. */
(function(){
  const hero=document.querySelector('main > .hero-light');
  if(!hero)return;
  const images=[...document.querySelectorAll('main img[src]')].filter(img=>!img.closest('.hero-light')&&!/ytimg\.com|youtube\.com/.test(img.getAttribute('src')||''));
  const chosen=images.find(img=>/concept-previews|assets\/images/.test(img.getAttribute('src')||''))||images[0];
  if(!chosen)return;
  const src=chosen.getAttribute('src');
  if(!src)return;
  hero.style.setProperty('--review-hero-image','url("'+src.replace(/["\\]/g,'')+'")');
  hero.classList.add('hero-image-review');
  hero.setAttribute('data-hero-status','existing-page-asset');
})();
