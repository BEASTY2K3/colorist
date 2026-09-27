/**
 * The Colorist — Mobile Navigation & Shared Client Interactions
 */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-button');
    var navWrapper = document.querySelector('.nav-menu-wrapper');
    if (menuBtn && navWrapper) {
      menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = navWrapper.classList.toggle('colorist-menu-open');
        if (isOpen) {
          navWrapper.style.display = 'flex';
          navWrapper.style.opacity = '1';
        } else {
          navWrapper.style.display = 'none';
          navWrapper.style.opacity = '0';
        }
      });

      // Close when clicking any nav link
      var navLinks = navWrapper.querySelectorAll('a');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navWrapper.classList.remove('colorist-menu-open');
          navWrapper.style.display = 'none';
          navWrapper.style.opacity = '0';
        });
      });
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
      anchor.addEventListener('click', function(e) {
        var targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
          var targetElem = document.querySelector(targetId);
          if (targetElem) {
            e.preventDefault();
            targetElem.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  });
})();
