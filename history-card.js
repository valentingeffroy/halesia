// Vérifie si l'écran est en mode desktop (largeur > 991px)
const isDesktop = window.matchMedia("(min-width: 1200px)").matches;

// Ne lance les animations que si on est sur desktop
if (isDesktop) {
  let historySection = document.querySelector(".home-history_component");
  let historyCards = gsap.utils.toArray(
    document.querySelectorAll(".history-card")
  );

  // Animation différenciée pour chaque carte
  gsap.from(historyCards[0], {
    y: 200,
    scrollTrigger: {
      trigger: historySection,
      start: "top center",
      end: "bottom 50%",
      scrub: 2,
    },
  });

  gsap.from(historyCards[1], {
    y: 100,
    scrollTrigger: {
      trigger: historySection,
      start: "top center", 
      end: "bottom 50%",
      scrub: 2,
    },
  });

  gsap.from(historyCards[2], {
    y: 50,
    scrollTrigger: {
      trigger: historySection,
      start: "top center",
      end: "bottom 50%",
      scrub: 2,
    },
  });
}
