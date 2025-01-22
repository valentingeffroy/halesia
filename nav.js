/*
Animation menu - Code optimisé avec GSAP
*/

// Classe pour gérer les animations du menu
class MenuAnimator {
  constructor() {
    this.elements = {
      menuOpen: document.querySelector(".menu-open_bg"),
      navIco: document.querySelector(".ico_logo-main"),
      menuBtn: document.querySelector(".menu-btn_wrap"),
      main: document.querySelector(".blur-background"),
      menuRightPanel: document.querySelector(".menu-open_right-col"),
      menuRightItems: document.querySelectorAll(".menu-open_right-items"),
      contactDiv: document.querySelector(".nav-contact_wrap"),
      separatorDiv: document.querySelector(".separator"),
      navItemsLeft: gsap.utils.toArray(document.querySelectorAll(".menu-left-col-item_wrap")),
      menuDivider: document.querySelector(".menu_divider")
    };

    this.isMenuOpen = false;
    this.timeline = gsap.timeline({ paused: true });
    this.mmNav = gsap.matchMedia();
    this.init();
  }

  createBaseAnimation(logoColor) {
    this.timeline
      .to(this.elements.menuOpen, {
        autoAlpha: 1,
        duration: 1
      })
      .to([this.elements.contactDiv, this.elements.separatorDiv], {
        autoAlpha: 0,
        duration: 1,
        color: "#14171A"
      }, 0)
      .to(this.elements.navIco, {
        duration: 1,
        color: logoColor
      }, 0)
      .to(this.elements.main, {
        autoAlpha: 1,
        filter: "blur(10px) brightness(70%)",
        duration: 0.5
      }, 0)
      .from(this.elements.menuDivider, {
        scale: 0,
        autoAlpha: 0,
        duration: 1
      }, 1)
      .to(this.elements.menuRightItems, {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.2
      }, 0)
      .from(this.elements.navItemsLeft, {
        y: 25,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.1
      }, 0);
  }

  toggleMenu = () => {
    if (this.isMenuOpen) {
      this.timeline.reverse(1);
    } else {
      this.timeline.play();
    }
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleOutsideClick = (event) => {
    if (
      this.isMenuOpen &&
      !this.elements.menuOpen.contains(event.target) &&
      !this.elements.menuBtn.contains(event.target)
    ) {
      this.toggleMenu();
    }
  }

  setupEventListeners() {
    this.elements.menuBtn.addEventListener("click", this.toggleMenu);
    document.addEventListener("click", this.handleOutsideClick);
  }

  init() {
    // Configuration initiale
    gsap.set(this.elements.main, { filter: "blur(0px) brightness(100%)" });

    // Configuration desktop
    this.mmNav.add("(min-width: 800px)", () => {
      this.timeline.clear();
      this.createBaseAnimation("#14171A");
      this.setupEventListeners();
    });

    // Configuration mobile
    this.mmNav.add("(max-width: 799px)", () => {
      this.timeline.clear();
      this.createBaseAnimation("#fff");
      this.setupEventListeners();
    });
  }

  // Méthode pour nettoyer les événements si nécessaire
  destroy() {
    this.elements.menuBtn.removeEventListener("click", this.toggleMenu);
    document.removeEventListener("click", this.handleOutsideClick);
    this.timeline.kill();
  }
}

// Initialisation
const menuAnimator = new MenuAnimator();
