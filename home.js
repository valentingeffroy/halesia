// ===== INITIALISATION =====
// Enregistrement du plugin ScrollTrigger, nécessaire pour les animations au scroll
gsap.registerPlugin(ScrollTrigger);

// ===== ANIMATION DU TITRE ALTERNANT =====
/**
 * Crée une animation de titre alternant entre deux textes
 * @param {Element} topTitle - Élément du titre supérieur
 * @param {Element} botTitle - Élément du titre inférieur
 * @returns {gsap.timeline} Timeline d'animation
 */
const createTitleAnimation = (topTitle, botTitle) => {
  // Configuration des positions initiales
  // Le titre du haut est à sa position normale (y: 0)
  gsap.set(topTitle, { y: 0 });
  // Le titre du bas est caché en dessous (y: 100%)
  gsap.set(botTitle, { y: "100%" });

  // Création d'une timeline infinie (repeat: -1)
  const titleLoop = gsap.timeline({ repeat: -1 });

  // Séquence d'animation :
  titleLoop
    // 1. Fait monter le titre supérieur hors de vue
    .to(topTitle, {
      y: "-100%",
      duration: 1.5,
      ease: "back.inOut(1.7)", // Animation avec effet de rebond
      delay: 1 // Pause avant de commencer
    })
    // 2. Simultanément, fait monter le titre inférieur en vue
    .to(botTitle, {
      y: 0,
      duration: 1.5,
      ease: "back.inOut(1.7)",
    }, "<") // "<" signifie "commence en même temps que l'animation précédente"
    // 3. Ramène le titre supérieur à sa position initiale
    .to(topTitle, {
      y: 0,
      duration: 1.5,
      ease: "back.inOut(1.7)",
      delay: 1
    })
    // 4. Simultanément, cache le titre inférieur
    .to(botTitle, {
      y: "100%",
      duration: 1.5,
      ease: "back.inOut(1.7)",
    }, "<");

  return titleLoop;
};

// Sélection et initialisation des éléments du titre
const topTitle = document.querySelector('.title-loop-t');
const botTitle = document.querySelector('.title-loop-b');
createTitleAnimation(topTitle, botTitle);

// ===== ANIMATION LUMIÈRE QUI SOMMES NOUS =====
// On crée un ScrollTrigger
gsap.to(".home_about-img.is-on", {
  scrollTrigger: {
    // On cible le wrapper comme élément déclencheur
    trigger: ".home_about-img-wrapper",
    // Point de départ : quand le centre du trigger atteint le centre de la viewport
    start: "center center",
    // Pour le debug (optionnel)
    markers: true
  },
  // Animation de l'opacité de 0 à 1
  opacity: 1,
  // Durée de l'animation
  duration: 0.5
});


// ===== ANIMATION DU TITRE PERSONNALISÉ =====
// Création d'une timeline pour l'animation du titre personnalisé
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".custom-title", // Élément déclencheur
    start: "center center", // Démarre quand le centre de l'élément atteint le centre de la vue
    once: true, // Ne s'exécute qu'une seule fois
  }
});

// Animation du titre personnalisé
tl.to(".custom-title__svg-top", {
  y: "-100%", // Déplace la partie supérieure vers le haut
  duration: 1
})
.to(".custom-title__svg-bottom", {
  y: "0%", // Fait apparaître la partie inférieure
  color: "#14171A",
  duration: 1
}, "<") // Simultanément avec l'animation précédente

// ===== ANIMATION DES PROJETS =====
// Sélection des éléments
const projects = document.querySelectorAll('.project_item');
const images = document.querySelectorAll('.img_projects');

/**
 * Active l'animation d'un projet
 * @param {number} index - Index du projet à activer
 */
function activateElement(index) {
  // Sélection des sous-éléments du projet
  const project = projects[index];
  const number = project.querySelector('.home_project-number');
  const title = project.querySelector('.heading-style-h1.is-xl');
  const divider = project.querySelector('.projects_divider.over');
  const image = images[index];

  // Animation vers l'état actif
  gsap.to(number, { color: '#B4FF04', duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
  gsap.to(title, { opacity: 1, duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
  gsap.to(divider, { width: '100%', backgroundColor: '#B4FF04', duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
  gsap.to(image, { clipPath: 'inset(0% 0 0 round 8px)', scale: 1, duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
}

/**
 * Désactive l'animation d'un projet
 * @param {number} index - Index du projet à désactiver
 */
function deactivateElement(index) {
  // Même structure que activateElement mais avec des valeurs inversées
  const project = projects[index];
  const number = project.querySelector('.home_project-number');
  const title = project.querySelector('.heading-style-h1.is-xl');
  const divider = project.querySelector('.projects_divider.over');
  const image = images[index];

  // Animation vers l'état inactif
  gsap.to(number, { color: '#FFFFFF', duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
  gsap.to(title, { opacity: 0.2, duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
  gsap.to(divider, { width: '0%', backgroundColor: '#FFFFFF', duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
  gsap.to(image, { clipPath: 'inset(100% 0 0 round 8px)', scale: 1.1, duration: 0.7, ease: 'cubic-bezier(0.4, 0, 0.2, 1)' });
}

// Configuration initiale des images
images.forEach((img, index) => {
  gsap.set(img, {
    zIndex: index, // Ordre d'empilement
    scale: 1.1, // Légèrement agrandie
    clipPath: 'inset(100% 0 0 round 8px)' // Masquée initialement
  });
});

// Active le premier projet au chargement
activateElement(0);

// ===== GESTION DU SCROLL =====
// Timeline principale pour la section des projets
const mainTimeline = ScrollTrigger.create({
  trigger: ".casestudies-project_wrap",
  start: "top center",
  end: "bottom center",
  onLeaveBack: () => {
    // Réinitialisation lors du retour en haut
    projects.forEach((_, index) => {
      if (index !== 0) deactivateElement(index);
    });
    activateElement(0);
  }
});

// Création des points de déclenchement pour chaque projet
projects.forEach((project, index) => {
  ScrollTrigger.create({
    trigger: project,
    start: "top center",
    end: "bottom center",
    onEnter: () => {
      // Active le projet actuel et désactive les autres
      projects.forEach((_, i) => {
        if (i !== index) deactivateElement(i);
      });
      activateElement(index);
    },
    onLeaveBack: () => {
      // Gestion du scroll vers le haut
      if (index > 0) {
        deactivateElement(index);
        activateElement(index - 1);
      }
    }
  });
});
