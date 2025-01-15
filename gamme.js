let mm = gsap.matchMedia();
new Ukiyo(".ukiyo");

mm.add("(min-width: 800px)", () => {
  // Gallery light
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

  // JS Section History
  let historySection = document.querySelector(".home-history_component");
  let historyCards = gsap.utils.toArray(
    document.querySelectorAll(".history-card")
  );

  gsap.from(historyCards[0], {
    y: 200,
    scrollTrigger: {
      trigger: historySection,
      start: "top center",
      scrub: 2,
    },
  });

  gsap.from(historyCards[1], {
    y: 100,
    scrollTrigger: {
      trigger: historySection,
      start: "top center",
      scrub: 2,
    },
  });

  gsap.from(historyCards[2], {
    y: 50,
    scrollTrigger: {
      trigger: historySection,
      start: "top center",
      scrub: 2,
    },
  });

  //
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

// Gallery
const nextButton = document.querySelector("#gallery-btn");
const images = gsap.utils.toArray(document.querySelectorAll(".gallery_img"));
let currentIndex = 0;

// Configuration initiale
gsap.set(images[0], {
  clipPath: "inset(0 0 0 0 round 8px)",
  scale: 1,
  zIndex: 1,
});

// Configuration initiale des autres images
images.forEach((img, index) => {
  if (index !== 0) {
    gsap.set(img, {
      clipPath: "inset(12.5% 50% 12.5% 50% round 8px)",
      scale: 1,
      zIndex: 0,
    });
  }
});

function showNext() {
  const currentImage = images[currentIndex];
  currentIndex = (currentIndex + 1) % images.length;
  const nextImage = images[currentIndex];

  const tl = gsap.timeline({
    defaults: {
      ease: "power2.out",
      duration: 0.8,
    }
  });

  gsap.set(nextImage, {
    zIndex: 2,
  });

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

  tl.to(
    currentImage,
    {
      scale: 1.05,
      duration: 0.8,
      onComplete: () => {
        // Déplacer l'image à la fin du conteneur immédiatement après son animation
        currentImage.parentNode.appendChild(currentImage);
        // Reset l'image
        gsap.set(currentImage, {
          clipPath: "inset(12.5% 50% 12.5% 50% round 8px)",
          scale: 1,
          zIndex: 0,
        });
      }
    },
    "-=0.8"
  );
}

nextButton.addEventListener("click", showNext);
