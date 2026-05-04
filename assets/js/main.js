/* ============================================================
   LAP main.js — language toggle, sticky header, mobile nav,
   carousel, FAQ accordion, modal, contact form toast.
   No frameworks. Loaded with `defer`.
   ============================================================ */
(function () {
  'use strict';

  // ---------- 1. Language toggle ----------
  const STORAGE_KEY = 'lap.lang';

  function getLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'lo' || saved === 'en') return saved;
    } catch (_) {}
    return 'lo'; // Lao-first
  }

  function applyLang(lang) {
    document.documentElement.lang = lang;
    document.documentElement.setAttribute('data-lang', lang);

    // Swap textContent on every [data-lo][data-en] node.
    document.querySelectorAll('[data-lo][data-en]').forEach((el) => {
      const next = el.getAttribute(lang === 'lo' ? 'data-lo' : 'data-en');
      if (next != null) el.textContent = next;
    });

    // Swap aria-label too where provided.
    document.querySelectorAll('[data-lo-label][data-en-label]').forEach((el) => {
      const next = el.getAttribute(lang === 'lo' ? 'data-lo-label' : 'data-en-label');
      if (next != null) el.setAttribute('aria-label', next);
    });

    // Swap placeholder.
    document.querySelectorAll('[data-lo-placeholder][data-en-placeholder]').forEach((el) => {
      const next = el.getAttribute(lang === 'lo' ? 'data-lo-placeholder' : 'data-en-placeholder');
      if (next != null) el.setAttribute('placeholder', next);
    });

    // Update toggle pressed state.
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.langBtn === lang ? 'true' : 'false');
    });

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  }

  function initLang() {
    document.querySelectorAll('[data-lang-btn]').forEach((btn) => {
      btn.addEventListener('click', () => applyLang(btn.dataset.langBtn));
    });
    applyLang(getLang());
  }

  // ---------- 2. Sticky header scroll state ----------
  function initHeader() {
    const header = document.querySelector('.lap-header');
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // ---------- 3. Mobile nav drawer ----------
  function initMobileNav() {
    const trigger = document.querySelector('[data-mobile-nav-trigger]');
    const drawer = document.querySelector('[data-mobile-nav]');
    const overlay = document.querySelector('[data-mobile-nav-overlay]');
    const closeBtn = document.querySelector('[data-mobile-nav-close]');
    if (!trigger || !drawer) return;

    const open = () => {
      drawer.classList.add('is-open');
      if (overlay) overlay.classList.add('is-open');
      trigger.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    };
    const close = () => {
      drawer.classList.remove('is-open');
      if (overlay) overlay.classList.remove('is-open');
      trigger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    };
    trigger.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    if (overlay) overlay.addEventListener('click', close);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

    // Close drawer when a link inside it is clicked.
    drawer.querySelectorAll('a').forEach((a) => a.addEventListener('click', close));
  }

  // ---------- 4. Testimonials carousel (manual nav, no autoplay) ----------
  function initCarousel() {
    document.querySelectorAll('[data-carousel]').forEach((root) => {
      const track = root.querySelector('[data-carousel-track]');
      const slides = root.querySelectorAll('[data-carousel-slide]');
      const prev = root.querySelector('[data-carousel-prev]');
      const next = root.querySelector('[data-carousel-next]');
      const dots = root.querySelectorAll('[data-carousel-dot]');
      if (!track || slides.length === 0) return;
      let idx = 0;
      const go = (n) => {
        idx = (n + slides.length) % slides.length;
        track.style.transform = `translateX(-${idx * 100}%)`;
        dots.forEach((d, i) => d.setAttribute('aria-current', i === idx ? 'true' : 'false'));
        slides.forEach((s, i) => s.setAttribute('aria-hidden', i === idx ? 'false' : 'true'));
        // Announce
        root.setAttribute('aria-label', `Slide ${idx + 1} of ${slides.length}`);
      };
      if (prev) prev.addEventListener('click', () => go(idx - 1));
      if (next) next.addEventListener('click', () => go(idx + 1));
      dots.forEach((d, i) => d.addEventListener('click', () => go(i)));
      root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
        if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
      });
      go(0);
    });
  }

  // ---------- 4b. Hero image carousel (cross-fade, autoplay 5s) ----------
  function initHeroCarousel() {
    const root = document.querySelector('[data-hero-carousel]');
    if (!root) return;
    const slides = root.querySelectorAll('[data-hero-slide]');
    const dots = root.querySelectorAll('[data-hero-dot]');
    const prev = root.querySelector('[data-hero-prev]');
    const next = root.querySelector('[data-hero-next]');
    if (slides.length === 0) return;
    let idx = 0, timer;
    const go = (n) => {
      idx = (n + slides.length) % slides.length;
      slides.forEach((s, i) => {
        s.style.opacity = i === idx ? '1' : '0';
        s.style.zIndex = i === idx ? '1' : '0';
      });
      dots.forEach((d, i) => {
        if (i === idx) {
          d.classList.remove('w-1.5', 'bg-white/60');
          d.classList.add('w-6', 'bg-white');
        } else {
          d.classList.remove('w-6', 'bg-white');
          d.classList.add('w-1.5', 'bg-white/60');
        }
      });
    };
    const restart = () => {
      clearInterval(timer);
      // Honor reduced motion
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      timer = setInterval(() => go(idx + 1), 5000);
    };
    if (prev) prev.addEventListener('click', () => { go(idx - 1); restart(); });
    if (next) next.addEventListener('click', () => { go(idx + 1); restart(); });
    dots.forEach((d, i) => d.addEventListener('click', () => { go(i); restart(); }));
    root.addEventListener('mouseenter', () => clearInterval(timer));
    root.addEventListener('mouseleave', restart);
    go(0);
    restart();
  }

  // ---------- 5. FAQ accordion ----------
  function initAccordion() {
    document.querySelectorAll('[data-accordion-item]').forEach((item) => {
      const btn = item.querySelector('[data-accordion-trigger]');
      const panel = item.querySelector('[data-accordion-panel]');
      if (!btn || !panel) return;
      btn.setAttribute('aria-expanded', 'false');
      panel.hidden = true;
      btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', open ? 'false' : 'true');
        panel.hidden = open;
        item.classList.toggle('is-open', !open);
      });
    });
  }

  // ---------- 6. Board member modal ----------
  function initModal() {
    const modal = document.querySelector('[data-person-modal]');
    if (!modal) return;
    const titleEl = modal.querySelector('[data-modal-title]');
    const roleEl = modal.querySelector('[data-modal-role]');
    const bioEl = modal.querySelector('[data-modal-bio]');
    const initialsEl = modal.querySelector('[data-modal-initials]');
    const closeBtn = modal.querySelector('[data-modal-close]');

    const lang = () => document.documentElement.getAttribute('data-lang') || 'lo';

    const open = (card) => {
      const get = (k) => card.getAttribute(`data-${k}-${lang()}`) || card.getAttribute(`data-${k}-en`) || '';
      titleEl.textContent = get('name');
      roleEl.textContent = get('role');
      bioEl.textContent = get('bio');
      if (initialsEl) initialsEl.textContent = card.getAttribute('data-initials') || '';
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      closeBtn.focus();
    };
    const close = () => {
      modal.classList.remove('is-open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-person-card]').forEach((card) => {
      card.addEventListener('click', () => open(card));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(card); }
      });
    });
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
  }

  // ---------- 7. Contact form toast ----------
  function initContactForm() {
    const form = document.querySelector('[data-contact-form]');
    if (!form) return;
    const toast = document.querySelector('[data-toast]');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // TODO: wire to backend endpoint
      form.reset();
      if (toast) {
        toast.classList.add('is-visible');
        setTimeout(() => toast.classList.remove('is-visible'), 3500);
      }
    });
  }

  // ---------- 8. Login form ----------
  function initLogin() {
    const form = document.querySelector('[data-login-form]');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // No auth — demo only.
      window.location.href = '../index.html';
    });
  }

  // ---------- 9. Smooth in-page anchor scroll ----------
  function initAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  // ---------- Bootstrap ----------
  function ready(fn) {
    if (document.readyState !== 'loading') fn();
    else document.addEventListener('DOMContentLoaded', fn);
  }

  ready(() => {
    initLang();
    initHeader();
    initMobileNav();
    initCarousel();
    initHeroCarousel();
    initAccordion();
    initModal();
    initContactForm();
    initLogin();
    // initAnchors();  // Disabled — system prompt warns against scrollIntoView
  });
})();
