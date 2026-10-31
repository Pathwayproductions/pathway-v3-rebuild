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
