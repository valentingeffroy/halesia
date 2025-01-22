/*
Animation des customs tabs de la section "Expertises et services"
Ce code gère le comportement et l'animation des onglets personnalisés
*/

// Vérifier si Anchor Positioning est supporté
const supportsAnchorPositioning = CSS.supports("anchor-name: --tab");

// Sélectionner les éléments nécessaires
const tabsContainer = document.querySelector(".tabs-navigation");
const homeTabs = document.querySelectorAll(".home_tab");
const tabContents = document.querySelectorAll(".tab-content");
const tabSelector = document.querySelector(".tab-selector");

// État du dropdown
let isDropdownOpen = false;

// Si Anchor Positioning n'est pas supporté, on affiche le tab-selector
if (!supportsAnchorPositioning) {
  tabSelector.style.display = "block";

  // Fonction pour mettre à jour les dimensions du sélecteur
  function updateTabSelectorDimensions(targetTab) {
    const tabRect = targetTab.getBoundingClientRect();

    // Mettre à jour les dimensions
    tabSelector.style.height = `${tabRect.height}px`;
    tabSelector.style.width = `${tabRect.width}px`;

    // Calculer la position en prenant en compte le padding du conteneur
    const computedStyle = window.getComputedStyle(tabsContainer);
    const paddingTop = parseFloat(computedStyle.paddingTop);
    const paddingLeft = parseFloat(computedStyle.paddingLeft);

    // Position relative par rapport au conteneur sans le padding
    const relativeTop =
      tabRect.top - tabsContainer.getBoundingClientRect().top - paddingTop;
    const relativeLeft =
      tabRect.left - tabsContainer.getBoundingClientRect().left - paddingLeft;

    // Appliquer la transformation
    tabSelector.style.transform = `translate(${relativeLeft}px, ${relativeTop}px)`;
  }
}

// Fonction pour gérer le clic sur les tabs
function handleTabClick(e) {
  const clickedTab = e.currentTarget;

  // En mobile/tablet
  if (window.innerWidth <= 991) {
    // Si on clique sur la tab active, on toggle le dropdown
    if (clickedTab.classList.contains("is-active")) {
      isDropdownOpen = !isDropdownOpen;
      tabsContainer.classList.toggle("is-open");
      return;
    }
  }

  const tabNumber = clickedTab.getAttribute("tab");

  // Si Anchor Positioning n'est pas supporté, on anime le sélecteur
  if (!supportsAnchorPositioning) {
    tabSelector.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
    updateTabSelectorDimensions(clickedTab);
  }

  // Enlever la classe active de toutes les tabs
  homeTabs.forEach((tab) => {
    tab.classList.remove("is-active");
  });

  // Ajouter la classe active à la tab cliquée
  clickedTab.classList.add("is-active");

  // Gérer les contenus
  tabContents.forEach((content) => {
    const contentNumber = content.getAttribute("tab-content");

    if (contentNumber === tabNumber) {
      content.classList.add("is-active");
    } else {
      content.classList.remove("is-active");
    }
  });

  // Fermer le dropdown en mobile/tablet après la sélection
  if (window.innerWidth <= 991) {
    isDropdownOpen = false;
    tabsContainer.classList.remove("is-open");
  }
}

// Ajouter les écouteurs d'événements
homeTabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
});

// Fermer le dropdown si on clique en dehors
document.addEventListener("click", (e) => {
  if (
    window.innerWidth <= 991 &&
    isDropdownOpen &&
    !tabsContainer.contains(e.target)
  ) {
    isDropdownOpen = false;
    tabsContainer.classList.remove("is-open");
  }
});

// Gérer le redimensionnement
window.addEventListener("resize", () => {
  if (window.innerWidth > 991) {
    // Réinitialiser l'état du dropdown en desktop
    isDropdownOpen = false;
    tabsContainer.classList.remove("is-open");
  }

  // Si Anchor Positioning n'est pas supporté, mettre à jour le sélecteur
  if (!supportsAnchorPositioning) {
    const activeTab = document.querySelector(".home_tab.is-active");
    if (activeTab) {
      updateTabSelectorDimensions(activeTab);
    }
  }
});

// Initialiser si Anchor Positioning n'est pas supporté
if (!supportsAnchorPositioning) {
  function initialize() {
    const activeTab = document.querySelector(".home_tab.is-active");
    if (activeTab) {
      tabSelector.style.transition = "none";
      updateTabSelectorDimensions(activeTab);
      setTimeout(() => {
        tabSelector.style.transition = "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)";
      }, 100);
    }
  }

  // Initialiser au chargement
  window.addEventListener("load", initialize);
}
