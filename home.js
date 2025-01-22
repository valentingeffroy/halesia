/*
Animation gsap page /home - Gestion des animations de la page d'accueil
*/

// Initialisation de matchMedia pour la gestion responsive
const mmHome = gsap.matchMedia();

// Fonction utilitaire pour créer l'animation du titre
const createTitleAnimation = (topTitle, botTitle, yOffset) => {
  gsap.set(topTitle, {
    y: 0,
    autoAlpha: 1,
  });
  gsap.set(botTitle, {
    y: yOffset,
    autoAlpha: 0,
  });

  const titleLoop = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  titleLoop
    .fromTo(
      topTitle,
      {
        y: 0,
        autoAlpha: 1,
      },
      {
        y: -yOffset,
        autoAlpha: 0,
        duration: 1.5,
        ease: "expo.inOut",
      }
    )
    .fromTo(
      botTitle,
      {
        y: yOffset,
      },
      {
        y: 0,
        autoAlpha: 1,
        color: "black",
        duration: 1.5,
        ease: "expo.inOut",
      },
      0
    )
    .yoyo(true);

  return titleLoop;
};

// Fonction pour créer une animation au scroll
const createScrollAnimation = (element, yStart, trigger, startPosition, scrubValue = 2) => {
  return gsap.from(element, {
    y: yStart,
    scrollTrigger: {
      trigger,
      start: startPosition,
      scrub: scrubValue,
    },
  });
};

// Configuration des animations pour les écrans larges (desktop)
mmHome.add("(min-width: 800px)", () => {
  // Sélection des éléments
  const elements = {
    hero: {
      topTitle: document.querySelector(".title-loop-t"),
      botTitle: document.querySelector(".title-loop-b"),
    },
    history: {
      topTitle: document.querySelector(".history-title-loop-t"),
      botTitle: document.querySelector(".history-title-loop-b"),
      section: document.querySelector(".home-history_component"),
      cards: gsap.utils.toArray(document.querySelectorAll(".history-card")),
    },
    products: {
      section: document.querySelector(".home-product_component"),
      cards: gsap.utils.toArray(document.querySelectorAll(".product-card_wrap")),
    },
  };

  // Animation du titre principal
  createTitleAnimation(elements.hero.topTitle, elements.hero.botTitle, 80);

  // Animation du titre historique
  const historyTitleLoop = gsap.timeline({
    scrollTrigger: {
      trigger: elements.history.topTitle,
      start: "top 70%",
      toggleActions: "play none none none",
    },
  });

  historyTitleLoop
    .to(elements.history.topTitle, {
      y: "-100%",
      duration: 1.25,
      ease: "expo.inOut",
    })
    .to(
      elements.history.botTitle,
      {
        y: "-100%",
        color: "black",
        duration: 1.25,
        ease: "expo.inOut",
      },
      0
    );

  // Animation des cartes produits
  elements.products.cards.forEach((card, index) => {
    createScrollAnimation(
      card,
      (index + 1) * 200,
      elements.products.section,
      "top bottom"
    );
  });

  // Animation des cartes historiques
  const historyYOffsets = [200, 100, 50];
  elements.history.cards.forEach((card, index) => {
    createScrollAnimation(
      card,
      historyYOffsets[index],
      elements.history.section,
      "top center"
    );
  });
});

// Configuration des animations pour mobile
mmHome.add("(max-width: 799px)", () => {
  const elements = {
    hero: {
      topTitle: document.querySelector(".title-loop-t"),
      botTitle: document.querySelector(".title-loop-b"),
    },
  };

  // Animation du titre principal adaptée pour mobile
  createTitleAnimation(elements.hero.topTitle, elements.hero.botTitle, 50);
});
