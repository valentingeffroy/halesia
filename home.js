/*
Animation gsap page /home
*/

let mmHome = gsap.matchMedia();

mmHome.add("(min-width: 800px)", () => {

  // Hero loop
  let heroLoopWrap = document.querySelector('.loop_wrap');
  let heroTopTitle = document.querySelector('.title-loop-t');
  let heroBotTitle = document.querySelector('.title-loop-b');

  // Set initial states to prevent loading glitch
  gsap.set(heroTopTitle, {
    y: 0,
    autoAlpha: 1,
  });
  gsap.set(heroBotTitle, {
    y: 80,
    autoAlpha: 0, // Assumed, since no opacity is set later for heroBotTitle
  });

  let heroTitleLoop = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  heroTitleLoop.fromTo(heroTopTitle, {
    y: 0,
    autoAlpha: 1,
  }, {
    y: -80,
    autoAlpha: 0,
    duration: 1.5,
    ease: "expo.inOut",
  })

  heroTitleLoop.fromTo(heroBotTitle, {
    y: 80,
  }, {
    autoAlpha: 1,
    y: 0,
    color: "black",
    duration: 1.5,
    ease: "expo.inOut",
  }, 0)

  heroTitleLoop.yoyo(true);

  // History loop
  let historyTopTitle = document.querySelector('.history-title-loop-t');
  let historyBotTitle = document.querySelector('.history-title-loop-b');

  let historyTitleLoop = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

  historyTitleLoop.to(historyTopTitle, {
    y: -80,
    duration: 1.25,
    ease: "expo.inOut",
  })

  historyTitleLoop.to(historyBotTitle, {
    y: -60,
    color: "black",
    duration: 1.25,
    ease: "expo.inOut",
  }, 0)

  historyTitleLoop.yoyo(true);

  // JS Section Product
  let productSection = document.querySelector(".home-product_component");
  let productCards = gsap.utils.toArray(document.querySelectorAll(".product-card_wrap"));

  gsap.from(productCards[0], {
    y: 200,
    scrollTrigger: {
      trigger: productSection,
      start: 'top bottom',
      scrub: 2,
    }
  })
  gsap.from(productCards[1], {
    y: 400,
    scrollTrigger: {
      trigger: productSection,
      start: 'top bottom',
      scrub: 2,
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

  // JS Section Case Studies
  let projectItem = gsap.utils.toArray(document.querySelectorAll(".project_item"));
  let projectSection = document.querySelector(".home-casestudies_component");
  let projectsImg = gsap.utils.toArray(document.querySelectorAll(".img_projects"));

  // Light Animation
  let homeIntro = document.querySelector(".home-intro_component");
  let introLight = document.querySelector(".intro-light");

})

mmHome.add("(max-width: 799px)", () => {

  // Hero loop
  let heroLoopWrap = document.querySelector('.loop_wrap');
  let heroTopTitle = document.querySelector('.title-loop-t');
  let heroBotTitle = document.querySelector('.title-loop-b');

  gsap.set(heroTopTitle, {
    y: 0,
    autoAlpha: 1,
  });
  gsap.set(heroBotTitle, {
    y: 50,
    autoAlpha: 0, 
  });

  let heroTitleLoop = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  heroTitleLoop.fromTo(heroTopTitle, {
    y: 0,
    autoAlpha: 1,
  }, {
    y: -50,
    autoAlpha: 0,
    duration: 1.5,
    ease: "expo.inOut",
  })

  heroTitleLoop.fromTo(heroBotTitle, {
    y: 50,
  }, {
    y: 0,
    autoAlpha: 1,
    color: "black",
    duration: 1.5,
    ease: "expo.inOut",
  }, 0)

  heroTitleLoop.yoyo(true);
})
