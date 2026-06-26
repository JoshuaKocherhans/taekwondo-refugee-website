/* ============================================================
   SWISS TAEKWONDO – UHP TEAM | script.js
   ============================================================ */

/* ============================================================
   1. HAMBURGER-MENÜ
   ============================================================ */
const navToggle = document.getElementById('nav-toggle');
const mainNav   = document.getElementById('hauptnav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', function () {
    const offen = mainNav.classList.toggle('header__nav--offen');
    navToggle.setAttribute('aria-expanded', offen);
    navToggle.setAttribute('aria-label', offen ? 'Navigation schliessen' : 'Navigation öffnen');
    document.body.style.overflow = offen ? 'hidden' : '';
  });

  mainNav.querySelectorAll('.header__nav-link').forEach(function (link) {
    link.addEventListener('click', function () {
      mainNav.classList.remove('header__nav--offen');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Navigation öffnen');
      document.body.style.overflow = '';
    });
  });
}

/* ============================================================
   2. AKTIVER NAV-PUNKT BEIM SCROLLEN
   ============================================================ */
const sektionen = document.querySelectorAll('section[id]');

function updateNav() {
  const scrollY = window.scrollY + 100;
  sektionen.forEach(function (s) {
    const link = document.querySelector('.header__nav-link[href="#' + s.id + '"]');
    if (!link) return;
    if (scrollY >= s.offsetTop && scrollY < s.offsetTop + s.offsetHeight) {
      link.classList.add('header__nav-link--aktiv');
    } else {
      link.classList.remove('header__nav-link--aktiv');
    }
  });
}
window.addEventListener('scroll', updateNav, { passive: true });

/* ============================================================
   3. SPRACHAUSWAHL DROPDOWN
   ============================================================ */
const spracheEl = document.getElementById('sprache-el');

if (spracheEl) {
  const toggle   = spracheEl.querySelector('.sprache__toggle');
  const label    = spracheEl.querySelector('.sprache__text');
  const optionen = spracheEl.querySelectorAll('.sprache__option');

  function schliessenSprache() {
    spracheEl.classList.remove('sprache--offen');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const offen = spracheEl.classList.toggle('sprache--offen');
    toggle.setAttribute('aria-expanded', offen);
  });

  optionen.forEach(function (opt) {
    opt.addEventListener('click', function (e) {
      e.preventDefault();
      optionen.forEach(o => o.classList.remove('sprache__option--aktiv'));
      opt.classList.add('sprache__option--aktiv');
      label.textContent = opt.textContent.trim();
      schliessenSprache();
    });
  });

  document.addEventListener('click', schliessenSprache);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') schliessenSprache();
  });
}

/* ============================================================
   4. SCROLL-TO-TOP (floating)
   ============================================================ */
const scrollBtn = document.getElementById('scroll-top');

if (scrollBtn) {
  window.addEventListener('scroll', function () {
    scrollBtn.classList.toggle('scroll-top--vis', window.scrollY > 400);
  }, { passive: true });

  scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}