/*
Configuration de l'effet parallaxe responsive avec GSAP et Ukiyo
*/

// Création d'une instance matchMedia GSAP pour gérer le responsive
let mm = gsap.matchMedia();

// Application de l'effet parallaxe uniquement sur desktop (> 800px)
mm.add("(min-width: 800px)", () => {
  // Initialisation de l'effet parallaxe Ukiyo
  // sur tous les éléments ayant la classe .ukiyo
  new Ukiyo(".ukiyo");
});
