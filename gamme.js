/*
Animation gsap des pages Gamme Performance et Architecture + effet parallax sur images
*/

// 1. Initialisation de base
let mm = gsap.matchMedia();
const ukiyoElements = document.querySelectorAll(".ukiyo");
if (ukiyoElements.length > 0) {
  new Ukiyo(".ukiyo");
}

// 2. Animations Desktop (> 800px)
const triggers = []; // Pour le nettoyage des ScrollTriggers

// Animation du marquee
const sectionMarquee = document.querySelector(".marquee_gsap");
const marqueeWrap = document.querySelector(".espace-marquee_wrap");
if (marqueeWrap) {
  // Vérifie si on est sur mobile
  const isMobile = window.matchMedia("(max-width: 767px)").matches;
  
  triggers.push(
    ScrollTrigger.create({
      trigger: sectionMarquee,
      start: "top center",
      // Fin plus tôt sur mobile
      end: isMobile ? "bottom center" : "bottom top",
      scrub: 1,
      // markers: true,
      animation: gsap.fromTo(marqueeWrap,
        {
          xPercent: 80
        },
        {
          xPercent: -80,
          ease: "none"
        }
      )
    })
  );
}

// 2.1 Animation de la galerie light
let galleryComp = document.querySelector(".gamme-gallery_component");
let galleryLight = document.querySelector(".pattern-bg.is-gallery");

if (galleryComp && galleryLight) {
  triggers.push(
    ScrollTrigger.create({
      trigger: galleryComp,
      start: "top center",
      toggleActions: "play reverse play reverse",
      animation: gsap.from(galleryLight, {
        opacity: 0,
        duration: 0.5,
      }),
    })
  );
}

// 2.3 Animation de la sous-navigation au contact
let contactSection = document.querySelector(".section-global.is-contact");
let subNav = document.querySelector(".gamme-hero_subnav");

if (contactSection && subNav) {
  triggers.push(
    ScrollTrigger.create({
      trigger: contactSection,
      start: "top center",
      toggleActions: "play reverse play reverse",
      animation: gsap.to(subNav, {
        y: 100,
        duration: 1,
        ease: "power2.out",
      }),
    })
  );
}

// Fonction de nettoyage
const cleanup = () => {
  triggers.forEach((trigger) => trigger.kill());
};

// 3. Animation de la galerie d'images
const nextButton = document.querySelector("#gallery-btn");
const images = gsap.utils.toArray(document.querySelectorAll(".gallery_img"));
let currentIndex = 0;

// 3.1 Configuration initiale des images
if (images.length > 0) {
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
}

// 3.2 Fonction de transition entre les images
function showNext() {
  const currentImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = images[currentIndex];

  const galleryTl = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 0.8,
    },
  });

  // Configuration de la nouvelle image
  gsap.set(nextImage, { zIndex: 2 });

  // Animation de transition
  galleryTl.fromTo(
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
  galleryTl.to(
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
if (nextButton) {
  nextButton.addEventListener("click", showNext);
}

// Animation des éléments lumineux
const lightTl = gsap.timeline();

gsap.to(".light-on", {
  opacity: 1,
  duration: 3,
  ease: "none",
});

// On définit d'abord l'opacité initiale à 0 pour les deux images
gsap.set([".is-02", ".is-03"], {
  opacity: 0,
});

// On crée une timeline pour séquencer les animations
const sequenceTl = gsap.timeline({
  defaults: {
    duration: 2,
    ease: "none",
  },
});

// On ajoute les animations à la timeline
sequenceTl
  .to(".is-02", {
    opacity: 1,
  })
  .to(".is-03", {
    opacity: 1,
  });

// Animation du titre personnalisé
const titleTl = gsap.timeline({
  scrollTrigger: {
    trigger: ".custom-title",
    start: "center center",
    once: true,
  },
});

titleTl
  .to(".custom-title__svg-top", {
    y: "-100%",
    duration: 1,
  })
  .to(
    ".custom-title__svg-bottom",
    {
      y: "0%",
      color: "#14171A",
      duration: 1,
    },
    "<"
  );
