let historySection = document.querySelector(".home-history_component");
let historyCards = gsap.utils.toArray(
  document.querySelectorAll(".history-card")
);

// Animation différenciée pour chaque carte
gsap.from(historyCards[0], {
  y: 200, // Plus grand déplacement
  scrollTrigger: {
    trigger: historySection,
    start: "top center",
    end: "bottom 50%", // Termine l'animation à 50% du bottom
    scrub: 2, // Effet smooth au scroll
  },
});

gsap.from(historyCards[1], {
  y: 100, // Déplacement moyen
  scrollTrigger: {
    trigger: historySection,
    start: "top center",
    end: "bottom 50%", // Termine l'animation à 50% du bottom
    scrub: 2,
  },
});

gsap.from(historyCards[2], {
  y: 50, // Plus petit déplacement
  scrollTrigger: {
    trigger: historySection,
    start: "top center",
    end: "bottom 50%", // Termine l'animation à 50% du bottom
    scrub: 2,
  },
});
