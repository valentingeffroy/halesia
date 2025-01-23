class MenuAnimator {
  constructor() {
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
      menuDivider: ".menu_divider",
      burgerIconOpen: ".navbar_icon.open",
      burgerIconClose: ".navbar_icon.close"
    };

    this.elements = Object.entries(selectors).reduce((acc, [key, selector]) => {
      const element = key === 'menuRightItems' || key === 'navItemsLeft'
        ? gsap.utils.toArray(document.querySelectorAll(selector))
        : document.querySelector(selector);

      if (!element || (Array.isArray(element) && !element.length)) {
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
      main, menuDivider, menuRightItems, navItemsLeft,
      burgerIconOpen, burgerIconClose
    } = this.elements;

    this.timeline.clear();

    if (burgerIconOpen && burgerIconClose) {
      gsap.set(burgerIconOpen, { autoAlpha: 0 });
      gsap.set(burgerIconClose, { autoAlpha: 1 });
    }

    if (menuRightItems?.length) {
      gsap.set(menuRightItems, {
        autoAlpha: 0,
        y: -30
      });
    }
    
    if (menuOpen) {
      this.timeline.to(menuOpen, {
        autoAlpha: 1,
        duration: 0.8,
        ease: "power2.inOut"
      });
    }

    if (contactDiv && separatorDiv) {
      this.timeline.to([contactDiv, separatorDiv], {
        autoAlpha: 0,
        duration: 0.8,
        color: "#14171A",
      }, 0);
    }

    if (navIco) {
      this.timeline.to(navIco, {
        duration: 0.8,
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
        duration: 0.8,
        ease: "back.out(1.7)"
      }, 0.8);
    }

    if (menuRightItems?.length) {
      this.timeline.to(menuRightItems, {
        autoAlpha: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "power2.out"
      }, 0);
    }

    if (navItemsLeft?.length) {
      this.timeline.from(navItemsLeft, {
        y: 25,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power2.out"
      }, 0);
    }
  }

  updateBurgerIcons(isOpen) {
    const { burgerIconOpen, burgerIconClose } = this.elements;
    if (burgerIconOpen && burgerIconClose) {
      gsap.set(burgerIconOpen, { autoAlpha: isOpen ? 1 : 0 });
      gsap.set(burgerIconClose, { autoAlpha: isOpen ? 0 : 1 });
    }
  }

  toggleMenu = () => {
    if (!this.timeline) return;

    if (this.timeline.isActive()) {
      this.timeline.kill();
    }
    
    const isOpening = !this.isMenuOpen;
    this.isMenuOpen = isOpening;
    
    this.updateBurgerIcons(isOpening);

    if (!isOpening) {
      this.timeline.timeScale(1.5);
      this.timeline.reverse();
    } else {
      this.timeline.timeScale(1);
      this.timeline.play();
    }
  };

  handleBlurBackgroundClick = (event) => {
    if (event.target.classList.contains('blur-background')) {
      const { menuBtn } = this.elements;
      if (menuBtn && this.isMenuOpen) {
        if (this.timeline.isActive()) {
          this.timeline.kill();
        }
        this.toggleMenu();
      }
    }
  };

  setupEventListeners() {
    const { menuBtn, main } = this.elements;
    
    if (menuBtn) {
      menuBtn.addEventListener("click", this.toggleMenu);
    }
    if (main) {
      main.addEventListener("mousedown", this.handleBlurBackgroundClick);
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
      main.removeEventListener("mousedown", this.handleBlurBackgroundClick);
    }
    
    this.timeline?.kill();
    this.mmNav?.kill();
  }
}

const menuAnimator = new MenuAnimator();
