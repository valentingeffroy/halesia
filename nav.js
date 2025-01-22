class MenuAnimator {
  constructor() {
    // Utilisation d'une promesse pour gérer le chargement du DOM de manière plus élégante
    this.domReady = new Promise(resolve => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });

    this.domReady.then(() => this.initialize());
  }

  initialize() {
    // Définition des sélecteurs dans un objet séparé pour faciliter la maintenance
    const selectors = {
      menuOpen: ".menu-open_bg",
      navIco: ".ico_logo-main",
      menuBtn: ".menu-btn_wrap",
      main: ".blur-background",
      menuRightPanel: ".menu-open_right-col",
      menuRightItems: ".menu-open_right-items",
      contactDiv: ".nav_contact",
      separatorDiv: ".separator",
      navItemsLeft: ".menu-left-col-item_wrap",
      menuDivider: ".menu_divider"
    };

    // Initialisation des éléments avec gestion d'erreur
    this.elements = Object.entries(selectors).reduce((acc, [key, selector]) => {
      const element = key === 'menuRightItems' 
        ? document.querySelectorAll(selector)
        : key === 'navItemsLeft' 
          ? gsap.utils.toArray(document.querySelectorAll(selector))
          : document.querySelector(selector);

      if (!element || (element instanceof NodeList && !element.length)) {
        console.warn(`Element '${key}' with selector '${selector}' not found`);
      }

      acc[key] = element;
      return acc;
    }, {});

    this.isMenuOpen = false;
    this.timeline = gsap.timeline({ 
      paused: true,
      onComplete: () => this.isMenuOpen = true,
      onReverseComplete: () => this.isMenuOpen = false
    });
    this.mmNav = gsap.matchMedia();
    this.init();
  }

  createBaseAnimation(logoColor) {
    if (!this.timeline) return;

    const { 
      menuOpen, contactDiv, separatorDiv, navIco, 
      main, menuDivider, menuRightItems, navItemsLeft 
    } = this.elements;

    this.timeline.clear();
    
    // Animation principale avec vérification des éléments
    if (menuOpen) {
      this.timeline.to(menuOpen, {
        autoAlpha: 1,
        duration: 1,
        ease: "power2.inOut"
      });
    }

    if (contactDiv && separatorDiv) {
      this.timeline.to([contactDiv, separatorDiv], {
        autoAlpha: 0,
        duration: 1,
        color: "#14171A",
      }, 0);
    }

    if (navIco) {
      this.timeline.to(navIco, {
        duration: 1,
        color: logoColor,
        ease: "power2.inOut"
      }, 0);
    }

    if (main) {
      this.timeline.to(main, {
        autoAlpha: 1,
        filter: "blur(10px) brightness(70%)",
        duration: 0.5,
        ease: "power2.inOut"
      }, 0);
    }

    if (menuDivider) {
      this.timeline.from(menuDivider, {
        scale: 0,
        autoAlpha: 0,
        duration: 1,
        ease: "back.out(1.7)"
      }, 1);
    }

    if (menuRightItems?.length) {
      this.timeline.to(menuRightItems, {
        y: 0,
        autoAlpha: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "power2.out"
      }, 0);
    }

    if (navItemsLeft?.length) {
      this.timeline.from(navItemsLeft, {
        y: 25,
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power2.out"
      }, 0);
    }
  }

  toggleMenu = () => {
    if (!this.timeline) return;
    
    if (this.isMenuOpen) {
      this.timeline.reverse();
    } else {
      this.timeline.play();
    }
  };

  handleBlurBackgroundClick = (event) => {
    if (this.isMenuOpen && event.target.classList.contains('blur-background')) {
      this.toggleMenu();
    }
  };

  setupEventListeners() {
    const { menuBtn, main } = this.elements;
    
    if (menuBtn) {
      menuBtn.addEventListener("click", this.toggleMenu);
    }
    if (main) {
      main.addEventListener("click", this.handleBlurBackgroundClick);
    }
  }

  init() {
    const { main } = this.elements;

    if (main) {
      gsap.set(main, { filter: "blur(0px) brightness(100%)" });
    }

    const setupConfig = (color) => {
      this.createBaseAnimation(color);
      this.setupEventListeners();
    };

    this.mmNav
      .add("(min-width: 800px)", () => setupConfig("#14171A"))
      .add("(max-width: 799px)", () => setupConfig("#fff"));
  }

  destroy() {
    const { menuBtn, main } = this.elements;

    if (menuBtn) {
      menuBtn.removeEventListener("click", this.toggleMenu);
    }
    if (main) {
      main.removeEventListener("click", this.handleBlurBackgroundClick);
    }
    
    this.timeline?.kill();
    this.mmNav?.kill();
  }
}

// Initialisation
const menuAnimator = new MenuAnimator();
