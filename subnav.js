/*
Animation du cta du menu fixed, page gamme Performance/Architecture.
Ce code gère l'animation au survol du bouton de navigation fixe
*/

// Sélection des éléments du bouton
let subNav = document.querySelector(".subnav_btn"); // Conteneur du bouton
let subDot = document.querySelector(".subbtn_point"); // Point/cercle d'animation
let subText = document.querySelector(".subbtn_text"); // Texte du bouton

// Création de la timeline d'animation
// paused: true signifie que l'animation ne démarre pas automatiquement
let subbtnTL = gsap.timeline({ paused: true });

// Configuration des animations simultanées (offset: 0)
subbtnTL.to(
  subDot,
  {
    scale: 50, // Agrandissement important du point
    duration: 1, // Durée de l'animation
    ease: "expo.inOut", // Type d'easing pour une animation fluide
  },
  0
);

subbtnTL.to(
  subText,
  {
    color: "black", // Changement de couleur du texte
    duration: 1, // Même durée que l'animation du point
    ease: "expo.inOut", // Même easing que l'animation du point
  },
  0
);

// Gestionnaire d'événement pour le survol de la souris
subNav.addEventListener("mouseenter", () => {
  subbtnTL.play(); // Joue l'animation au survol
});

// Gestionnaire d'événement pour la sortie de la souris
subNav.addEventListener("mouseleave", () => {
  subbtnTL.reverse(); // Inverse l'animation à la sortie
});
