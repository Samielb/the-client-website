// stap 1: zoek de menu-button op en sla die op in een variabele
var deButton = document.querySelector("header button");

// Maak de knop zichtbaar zodra JavaScript beschikbaar is.
deButton.hidden = false;
deButton.setAttribute("aria-controls", "hoofdmenu");
deButton.setAttribute("aria-expanded", "false");
deButton.setAttribute("aria-label", "Menu openen");
document.querySelector("header nav").classList.add("menu-interactief");

// stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
deButton.onclick = toggleMenu;

// stap 3: voeg in de functie een class toe aan de nav
function toggleMenu() {
  var deNav = document.querySelector("header nav");
  deNav.classList.toggle("is-open");
  var isOpen = deNav.classList.contains("is-open");
  deButton.setAttribute("aria-expanded", String(isOpen));
  deButton.setAttribute("aria-label", isOpen ? "Menu sluiten" : "Menu openen");
}

