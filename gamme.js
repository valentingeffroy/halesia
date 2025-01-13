let mm = gsap.matchMedia();
new Ukiyo(".ukiyo")

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
      toggleActions: 'play reverse play reverse',
    }
  })

  // JS Section History
  let historySection = document.querySelector(".home-history_component");
  let historyCards = gsap.utils.toArray(document.querySelectorAll(".history-card"));

  gsap.from(historyCards[0], {
    y: 200,
    scrollTrigger: {
      trigger: historySection,
      start: 'top center',
      scrub: 2,
    }
  })

  gsap.from(historyCards[1], {
    y: 100,
    scrollTrigger: {
      trigger: historySection,
      start: 'top center',
      scrub: 2,
    }
  })

  gsap.from(historyCards[2], {
    y: 50,
    scrollTrigger: {
      trigger: historySection,
      start: 'top center',
      scrub: 2,
    }
  })

  //
  let contactSection = document.querySelector(".section-global.is-contact");
  let subNav = document.querySelector(".gamme-hero_subnav");

  gsap.to(subNav, {
    y: 100,
    duration: 1,
    ease: "globalEase",
    scrollTrigger: {
      trigger: contactSection,
      start: 'top center',
      toggleActions: 'play reverse play reverse',
    }
  })

});

// Gallery

const nextButton = document.querySelector('#gallery-btn');
const images = gsap.utils.toArray(document.querySelectorAll(".gallery_img"));
let currentIndex = 0;

const galleryTl = gsap.timeline();

gsap.set(images[0], {
  clipPath: "inset(0 0 0 0 round 8px)",
  scale: 1
});

function showNext() {

  gsap.set(images[currentIndex], {
    clipPath: "inset(30% 50% 30% 50% round 8px)",
    scale: 0.9
  });

  currentIndex = (currentIndex + 1) % images.length;

  galleryTl.to(images[currentIndex],
  {
    scale: 1,
    clipPath: "inset(0 0 0 0 round 8px)",
    duration: 1,
    zIndex: 10,
    onComplete: () => {
      console.log("complete");
    },
  });

  galleryTl.play();
}

// Écouteur d'événement sur le bouton
nextButton.addEventListener('click', showNext);
