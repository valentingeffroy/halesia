/*
Animation gsap des pages Gamme Performance et Architecture + effet parallax sur images
*/

// 1. Initialisation de base
let mm = gsap.matchMedia();
new Ukiyo(".ukiyo"); // Effet parallaxe global

// 2. Animations Desktop (> 800px)
mm.add("(min-width: 800px)", () => {
// 2.1 Animation de la galerie light
let galleryComp = document.querySelector(".gamme-gallery_component");
let galleryLight = document.querySelector(".pattern-bg.is-gallery");

gsap.from(galleryLight, {
  opacity: 0,
  duration: 0.5,
  scrollTrigger: {
    trigger: galleryComp,
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});

// 2.2 Animation des cartes historiques avec effet parallaxe
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
    scrub: 2, // Effet smooth au scroll
  },
});

gsap.from(historyCards[1], {
  y: 100, // Déplacement moyen
  scrollTrigger: {
    trigger: historySection,
start: "top center",
scrub: 2,
  },
});

gsap.from(historyCards[2], {
  y: 50, // Plus petit déplacement
  scrollTrigger: {
  trigger: historySection,
start: "top center",
scrub: 2,
  },
});

// 2.3 Animation de la sous-navigation au contact
let contactSection = document.querySelector(".section-global.is-contact");
let subNav = document.querySelector(".gamme-hero_subnav");

gsap.to(subNav, {
  y: 100,
  duration: 1,
  ease: "globalEase",
  scrollTrigger: {
    trigger: contactSection,
    start: "top center",
    toggleActions: "play reverse play reverse",
  },
});
});

// 3. Animation de la galerie d'images
const nextButton = document.querySelector("#gallery-btn");
const images = gsap.utils.toArray(document.querySelectorAll(".gallery_img"));
let currentIndex = 0;

// 3.1 Configuration initiale des images
gsap.set(images[0], {
clipPath: "inset(0 0 0 0 round 8px)",
scale: 1,
zIndex: 1,
});

images.forEach((img, index) => {
if (index !== 0) {
  gsap.set(img, {
    clipPath: "inset(12.5% 50% 12.5% 50% round 8px)",
    scale: 1,
    zIndex: 0,
  });
}
});

// 3.2 Fonction de transition entre les images
function showNext() {
const currentImage = images[currentIndex];
currentIndex = (currentIndex + 1) % images.length;
const nextImage = images[currentIndex];

const tl = gsap.timeline({
  defaults: {
    ease: "power2.out",
    duration: 0.8,
  },
});

// Configuration de la nouvelle image
gsap.set(nextImage, { zIndex: 2 });

// Animation de transition
tl.fromTo(
  nextImage,
  {
    clipPath: "inset(12.5% 50% 12.5% 50% round 8px)",
  },
  {
    clipPath: "inset(0% 0% 0% 0% round 8px)",
    duration: 0.8,
  }
);

// Animation de l'image actuelle
tl.to(
  currentImage,
  {
    scale: 1.05,
    duration: 0.8,
    onComplete: () => {
      currentImage.parentNode.appendChild(currentImage);
      gsap.set(currentImage, {
        clipPath: "inset(12.5% 50% 12.5% 50% round 8px)",
        scale: 1,
        zIndex: 0,
      });
    },
  },
  "-=0.8"
);
}

// Écouteur d'événement pour le bouton suivant
nextButton.addEventListener("click", showNext);
