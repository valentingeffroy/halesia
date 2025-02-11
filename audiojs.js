// Premièrement, on importe GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// On utilise Split Type pour diviser le texte en mots
const text = new SplitType(".about-audio_text", { types: "words" });

// On définit d'abord l'opacité initiale de tous les mots à 0.2
gsap.set(text.words, {
  opacity: 0.2,
});

// On crée l'animation au scroll
gsap.to(text.words, {
  opacity: 1, // Opacité finale à 100%
  duration: 0.5,
  stagger: 0.05, // Petit délai entre chaque mot
  scrollTrigger: {
    trigger: ".about-audio_text",
    start: "top 80%", // Commence l'animation quand le haut du texte atteint 80% de la fenêtre
    end: "bottom 20%", // Termine quand le bas du texte atteint 20% de la fenêtre
    scrub: true, // Animation liée au scroll
    markers: false, // Mettre à true pour le debugging
    toggleActions: "play none none reverse",
  },
});
