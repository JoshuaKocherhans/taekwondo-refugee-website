/* ============================================================
   SWISS TAEKWONDO – UHP TEAM
   script.js
   ============================================================ */


/* ============================================================
   1. HAMBURGER-MENÜ
   ============================================================ */
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.header__nav-haupt');

navToggle.addEventListener('click', function () {
  const istOffen = mainNav.classList.toggle('header__nav-haupt--offen');
  navToggle.setAttribute('aria-expanded', istOffen);
  navToggle.setAttribute('aria-label', istOffen ? 'Navigation schliessen' : 'Navigation öffnen');
});


/* ============================================================
   2. MENÜ SCHLIESSEN BEI LINK-KLICK
   ============================================================ */
const navLinks = document.querySelectorAll('.header__nav-haupt-link');

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    mainNav.classList.remove('header__nav-haupt--offen');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Navigation öffnen');
  });
});


/* ============================================================
   3. AKTIVEN NAVIGATIONSPUNKT MARKIEREN
   ============================================================ */
const sektionen = document.querySelectorAll('section[id]');

window.addEventListener('scroll', function () {
  const scrollY = window.scrollY + 90;

  sektionen.forEach(function (sektion) {
    const oben  = sektion.offsetTop;
    const hoehe = sektion.offsetHeight;
    const id    = sektion.getAttribute('id');
    const link  = document.querySelector('.header__nav-haupt-link[href="#' + id + '"]');

    if (link) {
      if (scrollY >= oben && scrollY < oben + hoehe) {
        link.classList.add('header__nav-haupt-link--aktiv');
      } else {
        link.classList.remove('header__nav-haupt-link--aktiv');
      }
    }
  });
}, { passive: true });


/* ============================================================
   4. SPRACHAUSWAHL DROPDOWN
   ============================================================ */
const sprachDropdown = document.getElementById('sprache-dropdown');

if (sprachDropdown) {
  const toggle  = sprachDropdown.querySelector('.sprache-dropdown__toggle');
  const optionen = sprachDropdown.querySelectorAll('.sprache-dropdown__option');

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const istOffen = sprachDropdown.classList.toggle('sprache-dropdown--offen');
    toggle.setAttribute('aria-expanded', istOffen);
  });

  // Option wählen
  optionen.forEach(function (option) {
    option.addEventListener('click', function (e) {
      e.preventDefault();
      const kuerzel = option.querySelector('.sprache-dropdown__kuerzel').textContent;

      // Aktiv-Klasse aktualisieren
      optionen.forEach(o => o.classList.remove('sprache-dropdown__option--aktiv'));
      option.classList.add('sprache-dropdown__option--aktiv');

      // Toggle-Text aktualisieren
      sprachDropdown.querySelector('.sprache-dropdown__aktiv').textContent = kuerzel;

      // Dropdown schliessen
      sprachDropdown.classList.remove('sprache-dropdown--offen');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Schliessen bei Klick ausserhalb
  document.addEventListener('click', function (e) {
    if (!sprachDropdown.contains(e.target)) {
      sprachDropdown.classList.remove('sprache-dropdown--offen');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Schliessen mit Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      sprachDropdown.classList.remove('sprache-dropdown--offen');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ============================================================
   5. SCROLL-TO-TOP BUTTON
   ============================================================ */
const scrollTopBtn = document.getElementById('scroll-top');

if (scrollTopBtn) {
  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add('scroll-top--sichtbar');
    } else {
      scrollTopBtn.classList.remove('scroll-top--sichtbar');
    }
  }, { passive: true });

  scrollTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}