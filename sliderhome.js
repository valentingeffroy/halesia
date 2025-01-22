/*
Animation gsap du slider catégories en bas de page /home - Version optimisée
*/

let mm = gsap.matchMedia();

// Configuration commune desktop et mobile
const setupProjectAnimations = (isMobile = false) => {
  // Configuration des points de déclenchement selon le device
  const triggerPoints = {
    image: isMobile ? "center center" : "top center",
    content: isMobile ? "center 60%" : "center center",
  };

  // Tableau des sections de projet
  const sections = [1, 2, 3, 4, 5, 6, 7];

  sections.forEach((index) => {
    // Sélection des éléments pour chaque section
    const elements = {
      img: document.querySelector(`.img_projects-${index}`),
      title: document.querySelector(`.project_item.${getNumberWord(index)}`),
      divider: document.querySelector(
        `.project_item.${getNumberWord(index)} .projects_divider.over`
      ),
    };

    // Ajout du contenu du titre
    elements.titleContent = elements.title.querySelectorAll("div");

    // Configuration initiale de l'image
    gsap.set(elements.img, {
      clipPath: "inset(100% 0 0 0 round 8px)",
      scale: 1.1,
    });

    // Animation de l'image
    gsap.to(elements.img, {
      clipPath: "inset(0 0 0 0 round 8px)",
      scale: 1,
      scrollTrigger: {
        trigger: `.project_item.${getNumberWord(index)}`,
        start: triggerPoints.image,
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation du titre
    gsap.to(elements.titleContent, {
      color: "#b4ff04",
      opacity: 1,
      scrollTrigger: {
        trigger: `.project_item.${getNumberWord(index)}`,
        start: triggerPoints.content,
        end: "bottom 40%",
        toggleActions: "play reverse play reverse",
      },
    });

    // Animation du séparateur
    gsap.to(elements.divider, {
      color: "#b4ff04",
      width: "100%",
      duration: 1,
      scrollTrigger: {
        trigger: `.project_item.${getNumberWord(index)}`,
        start: triggerPoints.content,
        end: "bottom 40%",
        toggleActions: "play reverse play reverse",
      },
    });
  });
};

// Fonction utilitaire pour convertir les nombres en mots
function getNumberWord(num) {
  const words = ["one", "two", "three", "four", "five", "six", "seven"];
  return words[num - 1];
}

// Application des animations selon le breakpoint
mm.add("(min-width: 800px)", () => {
  setupProjectAnimations(false); // Desktop
});

mm.add("(max-width: 799px)", () => {
  setupProjectAnimations(true); // Mobile
});
