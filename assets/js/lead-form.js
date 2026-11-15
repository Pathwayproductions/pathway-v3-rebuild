/* Shared, site-wide-capable enquiry form handler: submits a plain,
   self-hosted <form> straight to HubSpot's Forms API, instead of rendering
   HubSpot's own embedded widget (hbspt.forms.create). Markup, styling and
   validation are all ours; this script only turns a normal form submit
   into a JSON POST and shows the result in place.

   Used by: the homepage footer, the homepage's "Start a conversation"
   section, and the Contact page's own form. Any form on any page can opt
   in by adding data-lead-form plus data-portal-id/data-form-id.

   Why not the embedded widget: HubSpot's free/starter-tier embed carries
   a "Powered by HubSpot" credit baked into the widget itself. Posting
   straight to the Forms API from a form we build ourselves is HubSpot's
   own documented pattern for a custom-styled form — the submission lands
   in the same CRM, under the same portal/form ID, with nothing of theirs
   rendered on the page to begin with.

   Each field's name="" attribute must be the exact HubSpot contact
   property internal name (firstname, lastname, email, mobilephone,
   services, message, ...) — that's the only thing that has to match
   between the markup and HubSpot. A field with no name (the consent
   checkbox) is a plain client-side gate and is never sent.

   No-JS note: this feature needs JavaScript to work at all, same as the
   HubSpot embed it replaces did — so unlike the rest of this site's
   progressive-enhancement patterns, there's no regression here to guard
   against; a page with these forms simply required JS before this change
   too. */
(function () {
  function serialize(form) {
    var fields = [];
    Array.prototype.forEach.call(form.elements, function (el) {
      if (!el.name || el.disabled) return;
      if (el.type === 'submit' || el.type === 'button' || el.type === 'checkbox') return;
      fields.push({ name: el.name, value: (el.value || '').trim() });
    });
    return fields;
  }

  function setStatus(form, message, isError) {
    var status = form.querySelector('.lead-form-status');
    if (!status) return;
    status.textContent = message || '';
    status.hidden = !message;
    status.classList.toggle('is-error', !!isError);
  }

  document.querySelectorAll('form[data-lead-form]').forEach(function (form) {
    var portalId = form.dataset.portalId;
    var formId = form.dataset.formId;
    var pageName = form.dataset.pageName || document.title;
    var submitBtn = form.querySelector('button[type="submit"]');
    var submitLabel = submitBtn ? submitBtn.textContent : '';
    var successMessage = form.nextElementSibling;
    if (!successMessage || !successMessage.classList.contains('submitted-message')) {
      successMessage = null;
    }

    if (!portalId || !formId) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }
      setStatus(form, '', false);

      fetch('https://api.hsforms.com/submissions/v3/integration/submit/' + portalId + '/' + formId, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: serialize(form),
          context: {
            pageUri: window.location.href,
            pageName: pageName
          }
        })
      })
        .then(function (res) {
          if (!res.ok) throw new Error('HubSpot submission failed: ' + res.status);
          form.hidden = true;
          if (successMessage) successMessage.hidden = false;
        })
        .catch(function () {
          setStatus(form, "Something went wrong sending this — please try again, or email us directly.", true);
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = submitLabel;
          }
        });
    });
  });
})();
