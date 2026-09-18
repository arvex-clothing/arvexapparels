// Arvex Apparels — shared behaviour across all pages

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- mobile nav toggle ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    // on mobile, tapping "Products" expands its submenu instead of navigating away
    var dropdownParent = document.querySelector('.has-dropdown');
    if (dropdownParent) {
      var dropdownLink = dropdownParent.querySelector(':scope > a');
      dropdownLink.addEventListener('click', function (e) {
        if (window.matchMedia('(max-width: 860px)').matches) {
          e.preventDefault();
          dropdownParent.classList.toggle('open');
        }
      });
    }
  }

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- contact / inquiry form ---------- */
  var form = document.getElementById('inquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var status = document.getElementById('form-status');
      // Formspree/Web3Forms both accept a plain POST + will redirect or
      // respond with JSON depending on how the endpoint is configured.
      // This handler just gives the user instant feedback; replace the
      // form's action="" in contact.html with your real endpoint.
      var action = form.getAttribute('action') || '';
      if (!action || action.indexOf('REPLACE_WITH') !== -1) {
        e.preventDefault();
        if (status) {
          status.textContent = 'Form endpoint not connected yet — see README.md to add your Formspree or Web3Forms URL.';
          status.classList.add('show');
        }
      } else if (status) {
        status.textContent = 'Sending your inquiry…';
        status.classList.add('show');
      }
    });
  }

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});
