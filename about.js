/*
Animation gsap page /about - Animations multiples pour la page About
*/

// 1. Animation du compteur et des données
// Sélection des éléments pour l'animation des chiffres
let counterWrap = document.querySelector(".datas-card_wrap"); // Conteneur principal des données
let countNumb = gsap.utils.toArray(document.querySelectorAll(".title-data")); // Tous les chiffres
let lastNumb = document.querySelectorAll(".title-data.is-green"); // Chiffres qui deviendront verts

// Animation de déplacement vertical des chiffres
gsap.to(countNumb, {
  y: "-200%", // Déplacement vers le haut
  duration: 1,
  ease: "globalEase",
  stagger: 0.05, // Effet cascade avec délai de 0.05s entre chaque élément
  scrollTrigger: {
    trigger: counterWrap, // Élément déclencheur
    start: "top center", // Démarrage quand le haut de counterWrap atteint le centre de l'écran
  },
});

// Animation de changement de couleur pour certains chiffres
gsap.to(lastNumb, {
  color: "#B4FF04CC", // Couleur verte semi-transparente
  delay: 0.5, // Délai avant le début de l'animation
  duration: 1,
  ease: "globalEase",
  scrollTrigger: {
    trigger: counterWrap,
    start: "top center",
  },
});

// 2. Animation du texte audio
// Utilisation de SplitType pour diviser le texte en différentes parties
let typeSplit = new SplitType("#audio-text", {
  types: "lines, words, chars", // Division en lignes, mots et caractères
  tagName: "span", // Utilisation de spans pour le découpage
});

// Animation de fade-in des mots
gsap.from("#audio-text .word", {
  opacity: 0.1, // Départ presque transparent
  duration: 1.5, // Durée de l'animation
  stagger: 0.25, // Délai entre chaque mot
});

// 3. Effet de parallaxe
// Initialisation de l'effet parallaxe sur les éléments avec la classe .ukiyo
new Ukiyo(".ukiyo"); // Première instance
new Ukiyo(".ukiyo"); // Deuxième instance (potentiellement redondante)
