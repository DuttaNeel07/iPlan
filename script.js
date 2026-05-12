/* ============================================================
   ACM iPLAN – script.js
   ============================================================ */

(function () {
  'use strict';

  /* --- Mobile nav toggle ---------------------------------- */
  const toggle = document.getElementById('menu-toggle');
  const nav    = document.getElementById('topnav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
      const expanded = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (!toggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      }
    });
  }

  /* --- Active nav link ------------------------------------ */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('#topnav a');

  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --- Smooth scroll for anchor links -------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();