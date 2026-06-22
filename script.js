/* ============================================================
   SWISS TAEKWONDO – UHP TEAM
   script.js
   ============================================================ */


/* ============================================================
   1. HAMBURGER-MENÜ
   Öffnet und schliesst die mobile Navigation.
   ============================================================ */

/* Elemente aus dem HTML holen */
const navToggle = document.querySelector('.nav-toggle');
const mainNav   = document.querySelector('.header__nav-haupt');

/* Klick auf den Hamburger-Button */
navToggle.addEventListener('click', function () {

  /* Klasse toggling: fügt hinzu oder entfernt --offen */
  const istOffen = mainNav.classList.toggle('header__nav-haupt--offen');

  /* aria-expanded anpassen (Barrierefreiheit) */
  navToggle.setAttribute('aria-expanded', istOffen);

  /* aria-label anpassen je nach Zustand */
  if (istOffen) {
    navToggle.setAttribute('aria-label', 'Navigation schliessen');
  } else {
    navToggle.setAttribute('aria-label', 'Navigation öffnen');
  }

});


/* ============================================================
   2. MENÜ SCHLIESSEN BEI LINK-KLICK
   Wenn ein Navigationspunkt geklickt wird, schliesst
   sich das Menü automatisch wieder.
   ============================================================ */

/* Alle Links im Hauptmenü holen */
const navLinks = document.querySelectorAll('.header__nav-haupt-link');

/* Jeden Link mit einem Event Listener versehen */
navLinks.forEach(function (link) {
  link.addEventListener('click', function () {

    /* Menü schliessen */
    mainNav.classList.remove('header__nav-haupt--offen');

    /* Hamburger-Button zurücksetzen */
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Navigation öffnen');

  });
});


/* ============================================================
   3. AKTIVEN NAVIGATIONSPUNKT MARKIEREN
   Beim Scrollen wird der passende Menüpunkt rot markiert.
   ============================================================ */

/* Alle Sektionen mit einer ID holen */
const sektionen = document.querySelectorAll('section[id]');

/* Beim Scrollen prüfen welche Sektion sichtbar ist */
window.addEventListener('scroll', function () {

  /* Aktuelle Scrollposition + kleiner Puffer für den Header */
  const scrollY = window.scrollY + 80;

  sektionen.forEach(function (sektion) {

    const oben  = sektion.offsetTop;
    const hoehe = sektion.offsetHeight;
    const id    = sektion.getAttribute('id');

    /* Link der zu dieser Sektion gehört */
    const link = document.querySelector('.header__nav-haupt-link[href="#' + id + '"]');

    if (link) {
      if (scrollY >= oben && scrollY < oben + hoehe) {
        /* Sektion ist sichtbar: Link aktiv markieren */
        link.classList.add('header__nav-haupt-link--aktiv');
      } else {
        /* Sektion nicht sichtbar: Markierung entfernen */
        link.classList.remove('header__nav-haupt-link--aktiv');
      }
    }

  });

});