/*
Scripts globaux pour gestion du scroll avec Lenis + variables globales
Ce code configure le comportement de défilement smooth et les effets de parallaxe
*/

// 1. Définition de l'easing personnalisé
let globalEase = CustomEase.create(
  "globalEase",
  "M0,0 C0.504,0 0.1,1 1,1" // Courbe de Bézier personnalisée
);

// 2. Configuration du smooth scroll avec Lenis
const lenis = new Lenis({
  lerp: 0.1, // Facteur de lissage (linear interpolation)
  wheelMultiplier: 1, // Multiplicateur de la vitesse de la molette
});

// 3. Configuration de la boucle d'animation (RAF - Request Animation Frame)
function raf(time) {
  lenis.raf(time); // Met à jour Lenis à chaque frame
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf); // Démarre la boucle d'animation

// 4. Configuration du parallaxe GSAP
// Sélectionne tous les éléments avec l'attribut data-speed
gsap.utils.toArray("[data-speed]").forEach((el) => {
  gsap.to(el, {
    // Calcul dynamique du déplacement vertical
    y: function () {
      return (
        // Formule : (1 - vitesse) * (scroll maximum - position de départ)
        (1 - parseFloat(el.getAttribute("data-speed"))) *
        (ScrollTrigger.maxScroll(window) -
          (this.scrollTrigger ? this.scrollTrigger.start : 0))
      );
    },
    ease: "none", // Pas d'easing pour un effet parallaxe fluide
    scrollTrigger: {
      trigger: el, // Élément déclencheur
      start: "top bottom", // Début quand le haut de l'élément atteint le bas de la fenêtre
      end: "top top", // Fin quand le haut de l'élément atteint le haut de la fenêtre
      invalidateOnRefresh: true, // Recalcul lors du redimensionnement
      scrub: true, // Effet smooth au scroll
    },
  });
});
