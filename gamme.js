/*
Animation gsap des pages Gamme Performance et Architecture + effet parallax sur images
*/

// 1. Initialisation de base
let mm = gsap.matchMedia();
new Ukiyo(".ukiyo"); // Effet parallaxe global

// 2. Animations Desktop (> 800px)
mm.add("(min-width: 800px)", () => {
  // Animation du marquee
  const marqueeWrap = document.querySelector(".espace-marquee_wrap");
  gsap.to(marqueeWrap, {
    xPercent: -50,
    ease: "none",
    scrollTrigger: {
      trigger: marqueeWrap,
      start: "top bottom",
      end: "bottom top",
      scrub: 1
    }
  });

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



gsap.to('.light-on', {
  opacity: 1,
  duration: 3,
  ease: 'none'
});


// On définit d'abord l'opacité initiale à 0 pour les deux images
gsap.set(['.is-02', '.is-03'], {
  opacity: 0
});

// On crée une timeline pour séquencer les animations
const tl = gsap.timeline({
  defaults: {
    duration: 3,
    ease: 'none'
  }
});

// On ajoute les animations à la timeline
tl.to('.is-02', {
    opacity: 1
  })
  .to('.is-03', {
    opacity: 1
  });
