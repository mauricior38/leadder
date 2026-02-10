/**
 * Leadder — Premium Website Interactivity
 * Handles: scroll animations, mobile menu, feature tabs,
 * header state, contact form, and parallax effects.
 */

(function () {
  'use strict';

  // ───────── DOM REFERENCES ─────────
  const header = document.getElementById('header');
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');
  const desktopNav = document.getElementById('desktopNav');
  const contactForm = document.getElementById('contactForm');
  const featureTabs = document.querySelectorAll('.features__tab');
  const featurePanels = document.querySelectorAll('.features__panel');

  // ───────── HEADER SCROLL STATE ─────────
  let lastScroll = 0;

  function handleHeaderScroll() {
    const scrollY = window.scrollY;
    if (scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = scrollY;
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });

  // ───────── MOBILE MENU ─────────
  function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
  }

  menuToggle.addEventListener('click', toggleMobileMenu);

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a[data-close-menu]').forEach(function (link) {
    link.addEventListener('click', function () {
      menuToggle.classList.remove('active');
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // ───────── SMOOTH SCROLL ─────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerHeight = header.offsetHeight;
        var targetPos = target.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });

  // ───────── SCROLL ANIMATIONS (Intersection Observer) ─────────
  var animatedElements = document.querySelectorAll(
    '.animate-on-scroll, .animate-left, .animate-right, .animate-scale'
  );

  var observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  var scrollObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(function (el) {
    scrollObserver.observe(el);
  });

  // ───────── FEATURE TABS ─────────
  featureTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var tabIndex = this.getAttribute('data-tab');

      // Update active tab
      featureTabs.forEach(function (t) { t.classList.remove('active'); });
      this.classList.add('active');

      // Update active panel
      featurePanels.forEach(function (panel) {
        panel.classList.remove('active');
        // Reset animations inside panel
        panel.querySelectorAll('.animate-left, .animate-right').forEach(function (el) {
          el.classList.remove('visible');
        });
      });

      var activePanel = document.querySelector('[data-panel="' + tabIndex + '"]');
      if (activePanel) {
        activePanel.classList.add('active');
        // Trigger animations after a tiny delay for transition effect
        setTimeout(function () {
          activePanel.querySelectorAll('.animate-left, .animate-right').forEach(function (el) {
            el.classList.add('visible');
          });
        }, 100);
      }
    });
  });

  // Trigger first panel animations
  var firstPanel = document.querySelector('.features__panel.active');
  if (firstPanel) {
    var panelObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          firstPanel.querySelectorAll('.animate-left, .animate-right').forEach(function (el) {
            el.classList.add('visible');
          });
          panelObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    panelObserver.observe(firstPanel);
  }

  // ───────── CONTACT FORM ─────────
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = document.getElementById('contactName').value.trim();
      var email = document.getElementById('contactEmail').value.trim();
      var message = document.getElementById('contactMessage').value.trim();

      if (!name || !email || !message) {
        showFormFeedback('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
      }

      if (!isValidEmail(email)) {
        showFormFeedback('Por favor, insira um e-mail válido.', 'error');
        return;
      }

      // Simulate send — in production, wire up to a backend / API
      var submitBtn = contactForm.querySelector('.form-submit');
      submitBtn.disabled = true;
      submitBtn.querySelector('span').textContent = 'Enviando...';

      setTimeout(function () {
        showFormFeedback('Mensagem enviada com sucesso! Entraremos em contato em breve.', 'success');
        contactForm.reset();
        submitBtn.disabled = false;
        submitBtn.querySelector('span').textContent = 'Enviar mensagem';
      }, 1500);
    });
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showFormFeedback(message, type) {
    // Remove existing feedback
    var existing = contactForm.querySelector('.form-feedback');
    if (existing) existing.remove();

    var feedback = document.createElement('div');
    feedback.className = 'form-feedback';
    feedback.textContent = message;
    feedback.style.cssText =
      'padding: 12px 16px; border-radius: 8px; font-size: 0.9rem; font-weight: 500; margin-top: -8px;' +
      'animation: fadeInUp 0.3s ease;' +
      (type === 'success'
        ? 'background: rgba(37, 211, 102, 0.1); color: #25d366; border: 1px solid rgba(37, 211, 102, 0.2);'
        : 'background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2);');

    var submitBtn = contactForm.querySelector('.form-submit');
    contactForm.insertBefore(feedback, submitBtn);

    setTimeout(function () {
      if (feedback.parentNode) feedback.remove();
    }, 5000);
  }

  // ───────── PARALLAX ON HERO ORBS ─────────
  var heroOrbs = document.querySelectorAll('.hero__orb');

  function handleParallax(e) {
    var mouseX = e.clientX / window.innerWidth - 0.5;
    var mouseY = e.clientY / window.innerHeight - 0.5;

    heroOrbs.forEach(function (orb, i) {
      var speed = (i + 1) * 15;
      var x = mouseX * speed;
      var y = mouseY * speed;
      orb.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
    });
  }

  // Only enable parallax on desktop for performance
  if (window.matchMedia('(min-width: 768px)').matches) {
    document.addEventListener('mousemove', handleParallax, { passive: true });
  }

  // ───────── COUNTER ANIMATION (WHY US CARDS) ─────────
  var whyusCards = document.querySelectorAll('.whyus-card');
  whyusCards.forEach(function (card) {
    card.addEventListener('mouseenter', function () {
      var icon = card.querySelector('.whyus-card__icon');
      icon.style.animation = 'pulse 0.6s ease';
      setTimeout(function () {
        icon.style.animation = '';
      }, 600);
    });
  });

  // ───────── ACTIVE NAV HIGHLIGHT ON SCROLL ─────────
  var sections = document.querySelectorAll('section[id]');
  var navLinks = desktopNav.querySelectorAll('a[href^="#"]');

  function highlightNav() {
    var scrollPos = window.scrollY + header.offsetHeight + 100;

    sections.forEach(function (section) {
      var top = section.offsetTop;
      var height = section.offsetHeight;
      var id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + id) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // ───────── PAGE LOAD ─────────
  handleHeaderScroll();
  highlightNav();

})();
