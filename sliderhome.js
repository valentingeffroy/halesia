gsap.registerPlugin(ScrollTrigger);

const setupProjectAnimations = (isMobile = false) => {
  const triggerPoints = {
    image: isMobile ? "center center" : "top center",
    content: isMobile ? "center 60%" : "center center",
  };

  const sections = [1, 2, 3, 4, 5, 6, 7];

  // Réinitialisation initiale
  sections.forEach((index) => {
    const section = document.querySelector(`.project_item.${getNumberWord(index)}`);
    if (!section) return;

    // Initialiser l'opacité du heading-project à 0.2
    gsap.set(section.querySelector('.heading-project'), {
      opacity: 0.2
    });
    
    // Initialiser la couleur du numéro en blanc
    gsap.set(section.querySelector('.home_project-number'), {
      color: "#FFFFFF"
    });

    // Initialiser la ligne
    gsap.set(section.querySelector('.projects_divider.over'), {
      width: "0%",
      backgroundColor: "#FFFFFF"
    });
  });

  sections.forEach((index) => {
    const section = document.querySelector(`.project_item.${getNumberWord(index)}`);
    if (!section) return;

    const elements = {
      img: document.querySelector(`.img_projects-${index}`),
      heading: section.querySelector('.heading-project'),
      number: section.querySelector('.home_project-number'),
      divider: section.querySelector('.projects_divider.over')
    };

    if (!elements.img || !elements.heading || !elements.number || !elements.divider) return;

    // Animation de l'image
    gsap.set(elements.img, {
      clipPath: "inset(100% 0 0 0 round 8px)",
      scale: 1.1
    });

    gsap.to(elements.img, {
      clipPath: "inset(0% 0 0 0 round 8px)",
      scale: 1,
      duration: 0.6,
      scrollTrigger: {
        trigger: section,
        start: triggerPoints.image,
        toggleActions: "play reverse play reverse"
      }
    });

    // Animation du titre, du numéro et de la ligne
    ScrollTrigger.create({
      trigger: section,
      start: triggerPoints.content,
      end: "bottom 40%",
      onEnter: () => {
        gsap.to(elements.heading, {
          opacity: 1,
          duration: 0.4
        });
        gsap.to(elements.number, {
          color: "#b4ff04",
          duration: 0.4
        });
        gsap.to(elements.divider, {
          width: "100%",
          backgroundColor: "#b4ff04",
          duration: 0.4
        });
      },
      onLeave: () => {
        gsap.to(elements.heading, {
          opacity: 0.2,
          duration: 0.4
        });
        gsap.to(elements.number, {
          color: "#FFFFFF",
          duration: 0.4
        });
        gsap.to(elements.divider, {
          width: "0%",
          backgroundColor: "#FFFFFF",
          duration: 0.4
        });
      },
      onEnterBack: () => {
        gsap.to(elements.heading, {
          opacity: 1,
          duration: 0.4
        });
        gsap.to(elements.number, {
          color: "#b4ff04",
          duration: 0.4
        });
        gsap.to(elements.divider, {
          width: "100%",
          backgroundColor: "#b4ff04",
          duration: 0.4
        });
      },
      onLeaveBack: () => {
        gsap.to(elements.heading, {
          opacity: 0.2,
          duration: 0.4
        });
        gsap.to(elements.number, {
          color: "#FFFFFF",
          duration: 0.4
        });
        gsap.to(elements.divider, {
          width: "0%",
          backgroundColor: "#FFFFFF",
          duration: 0.4
        });
      }
    });
  });
};

let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {
  setupProjectAnimations(false);
});

mm.add("(max-width: 799px)", () => {
  setupProjectAnimations(true);
});

function getNumberWord(num) {
  const words = ["one", "two", "three", "four", "five", "six", "seven"];
  return words[num - 1];
}
