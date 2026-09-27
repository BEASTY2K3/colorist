/**
 * The Colorist — Mobile Navigation & Shared Client Interactions
 */
(function() {
  function initColorist() {
    var menuBtn = document.querySelector('.menu-button');
    var navWrapper = document.querySelector('.nav-menu-wrapper');
    
    if (menuBtn && navWrapper) {
      menuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        var isOpen = navWrapper.classList.toggle('colorist-menu-open');
        menuBtn.classList.toggle('is-active', isOpen);
        if (isOpen) {
          navWrapper.style.display = 'flex';
          navWrapper.style.opacity = '1';
          navWrapper.style.visibility = 'visible';
          navWrapper.style.pointerEvents = 'auto';
          document.body.style.overflow = 'hidden';
        } else {
          navWrapper.style.display = 'none';
          navWrapper.style.opacity = '0';
          navWrapper.style.visibility = 'hidden';
          navWrapper.style.pointerEvents = 'none';
          document.body.style.overflow = '';
        }
      });

      // Close when clicking any nav link
      var navLinks = navWrapper.querySelectorAll('a');
      navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
          navWrapper.classList.remove('colorist-menu-open');
          menuBtn.classList.remove('is-active');
          navWrapper.style.display = 'none';
          navWrapper.style.opacity = '0';
          navWrapper.style.visibility = 'hidden';
          navWrapper.style.pointerEvents = 'none';
          document.body.style.overflow = '';
        });
      });

      // Close on Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navWrapper.classList.contains('colorist-menu-open')) {
          navWrapper.classList.remove('colorist-menu-open');
          menuBtn.classList.remove('is-active');
          navWrapper.style.display = 'none';
          navWrapper.style.opacity = '0';
          navWrapper.style.visibility = 'hidden';
          navWrapper.style.pointerEvents = 'none';
          document.body.style.overflow = '';
        }
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
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initColorist);
  } else {
    initColorist();
  }
})();
