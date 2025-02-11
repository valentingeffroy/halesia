gsap.registerPlugin(ScrollTrigger);

// Sélectionner tous les mots
const words = gsap.utils.toArray(".word");

// Créer l'animation de scroll
gsap.set(words, { opacity: 0 }); // Initialiser tous les mots avec une opacité de 0

gsap.to(words, {
  opacity: 1,
  duration: 1,
  stagger: 0.05, // Délai entre chaque mot
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".about-audio_text",
    start: "top center", // Commence quand le haut de la section atteint le centre de l'écran
    end: "bottom center", // Termine quand le bas de la section atteint le centre de l'écran
    scrub: true, // Animation liée au scroll
    markers: false, // Mettre true pour le debugging
    toggleActions: "play none none reverse",
  },
});
