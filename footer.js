/*
Animation composant [footer] - Animation du logo dans le footer au scroll
*/

// Sélection des éléments du DOM
let footer = document.querySelector(".global-footer"); // Conteneur du footer
let footerLight = document.querySelector(".footer_logo"); // Logo du footer

// Configuration de l'animation GSAP avec ScrollTrigger
gsap.from(footerLight, {
  opacity: 0.2, // État initial : logo presque transparent
  duration: 1, // Durée de l'animation : 1 seconde
  scrollTrigger: {
    trigger: footerLight, // Élément déclencheur : le logo du footer
    start: "20% 90%", // Démarrage quand 20% du logo est visible dans la fenêtre
    end: "20% 90%", // Fin au même point pour un effet instantané
    // toggleActions: "play reverse play reverse", // Comportement de l'animation au scroll
  },
});