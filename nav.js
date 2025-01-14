let mmNav = gsap.matchMedia();

let menuOpen = document.querySelector(".menu-open_bg");
let navIco = document.querySelector(".ico_logo-main");
let menuBtn = document.querySelector(".menu-btn_wrap");
let main = document.querySelector(".blur-background");
let menuRightPanel = document.querySelector(".menu-open_right-col");
let menuRightItems = document.querySelectorAll(".menu-open_right-items");
let contactDiv = document.querySelector(".nav-contact_wrap");
let separatorDiv = document.querySelector(".separator");
let navItemsLeft = gsap.utils.toArray(document.querySelectorAll(".menu-left-col-item_wrap"));
let menuDivider = document.querySelector(".menu_divider");

let navTL = gsap.timeline({ paused: true });

mmNav.add("(min-width: 800px)", () => {

  navTL.to(menuOpen, {
    autoAlpha: 1,
    duration: 1,
    //ease: "back.out(1.7)",
  })

  navTL.to([contactDiv, separatorDiv], {
    autoAlpha: 0,
    duration: 1,
    color: "#14171A",
    //ease: "globalEase",
  }, 0)
  navTL.to(navIco, {
    duration: 1,
    color: "#14171A",
    //ease: "globalEase",
  }, 0)

  gsap.set(main, { filter: "blur(0px) brightness(100%)" });

  navTL.to(main, {
    autoAlpha: 1,
    filter: "blur(10px) brightness(70%)",
    duration: 0.5,
  }, 0)
  navTL.from(menuDivider, {
    scale: 0,
    autoAlpha: 0,
    duration: 1,
    //ease: "globalEase",
  }, 1)
  navTL.to(menuRightItems, {
    y: 0,
    autoAlpha: 1,
    duration: 0.5,
    stagger: 0.2,
    //ease: "globalEase",
  }, 0)
  navTL.from(navItemsLeft, {
    y: 25,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.1,
    //ease: "globalEase",
  }, 0);

  let isMenuOpen = false;

  function toggleMenu() {
    if (isMenuOpen) {
      navTL.reverse(1);
    } else {
      navTL.play();
    }
    isMenuOpen = !isMenuOpen;
  }

  menuBtn.addEventListener("click", toggleMenu);

  document.addEventListener('click', function (event) {
    if (isMenuOpen &&
      !menuOpen.contains(event.target) &&
      !menuBtn.contains(event.target)) {
      toggleMenu();
    }
  });

});

mmNav.add("(max-width: 799px)", () => {

  navTL.to(menuOpen, {
    autoAlpha: 1,
    duration: 1,
    ease: "back.out(1.7)",
  })

  navTL.to([contactDiv, separatorDiv], {
    autoAlpha: 0,
    duration: 1,
    color: "#14171A",
    // ease: "back.out(1.7)",
  }, 0)

  navTL.to(navIco, {
    duration: 1,
    color: "#fff",
    // ease: "back.out(1.7)",
  }, 0)

  gsap.set(main, { filter: "blur(0px) brightness(100%)" });

  navTL.to(main, {
    autoAlpha: 1,
    filter: "blur(10px) brightness(70%)",
    duration: 0.5,
  }, 0)

  navTL.from(menuDivider, {
    scale: 0,
    autoAlpha: 0,
    duration: 1,
    // ease: "back.out(1.7)",
  }, 1)

  navTL.to(menuRightItems, {
    y: 0,
    autoAlpha: 1,
    duration: 0.75,
    stagger: 0.2,
    // ease: "back.out(1.7)",
  }, 0)

  navTL.from(navItemsLeft, {
    y: 25,
    autoAlpha: 0,
    duration: 0.75,
    stagger: 0.1,
    // ease: "back.out(1.7)",
  }, 0);

  let isMenuOpen = false;

  function toggleMenu() {
    if (isMenuOpen) {
      navTL.reverse();
    } else {
      navTL.play();
    }
    isMenuOpen = !isMenuOpen;
  }

  menuBtn.addEventListener("click", toggleMenu);

});
