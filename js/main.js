/* ============================================
   狼ノ村 ─ Brand Site Script
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- LOADING SCREEN ---------- */
  const loading = document.getElementById('loading');
  const hero = document.querySelector('.hero');

  const hideLoading = () => {
    loading.classList.add('is-hidden');
    document.body.style.overflow = '';
    setTimeout(() => hero.classList.add('is-loaded'), 500);
  };

  document.body.style.overflow = 'hidden';

  const minDisplayTime = 5000;
  const startTime = Date.now();

  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);
    setTimeout(hideLoading, remaining);
  });

  // Fallback in case load event already fired
  setTimeout(hideLoading, minDisplayTime + 500);

  /* ---------- HEADER SCROLL ---------- */
  const header = document.getElementById('header');

  const handleScroll = () => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 80);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ---------- HAMBURGER ---------- */
  const menuBtn = document.getElementById('menuBtn');
  const headerNav = document.getElementById('headerNav');

  menuBtn.addEventListener('click', () => {
    const open = menuBtn.classList.toggle('is-active');
    headerNav.classList.toggle('is-open');
    document.body.style.overflow = open ? 'hidden' : '';
  });

  document.querySelectorAll('[data-nav]').forEach(link => {
    link.addEventListener('click', () => {
      menuBtn.classList.remove('is-active');
      headerNav.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  });

  /* ---------- SCROLL REVEAL (IntersectionObserver) ---------- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
  );

  revealEls.forEach(el => observer.observe(el));

  /* ---------- SMOOTH SCROLL ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href');
      if (id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 60;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- HERO PARALLAX ---------- */
  const heroBg = document.querySelector('.hero__bg-img');
  if (heroBg) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const y = window.scrollY;
          if (y < window.innerHeight * 1.2) {
            const scale = 1 + (y * 0.00008);
            heroBg.style.transform = `translateY(${y * 0.12}px) scale(${scale})`;
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ---------- IMAGE REVEAL ON SCROLL ---------- */
  const imgWraps = document.querySelectorAll('.event-card__img');
  const imgObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'scale(1)';
          imgObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  imgWraps.forEach(img => {
    img.style.transform = 'scale(1.08)';
    img.style.transition = 'transform 1.6s cubic-bezier(0.22, 1, 0.36, 1)';
    imgObserver.observe(img);
  });
});
