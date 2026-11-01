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

/* Review-only hero treatment: reuse a page-local image where available.
   Otherwise a shared temporary concept image is used until bespoke assets are approved. */
(function(){
  const hero=document.querySelector('main > .hero-light');
  if(!hero)return;
  const images=[...document.querySelectorAll('main img[src]')].filter(img=>!img.closest('.hero-light')&&!/ytimg\.com|youtube\.com/.test(img.getAttribute('src')||''));
  const chosen=images.find(img=>/concept-previews|assets\/images/.test(img.getAttribute('src')||''))||images[0];
  const src=chosen?chosen.getAttribute('src'):'../assets/concept-previews/batch2/02-film-crew-studio.webp';
  if(!src)return;
  hero.style.setProperty('--review-hero-image','url("'+src.replace(/["\\]/g,'')+'")');
  hero.classList.add('hero-image-review');
  hero.setAttribute('data-hero-status',chosen?'existing-page-asset':'temporary-shared-concept');
})();
