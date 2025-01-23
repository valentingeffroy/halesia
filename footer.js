// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation du logo
gsap.fromTo(".ico_footer-logo", {
  color: "rgba(235, 234, 227, 0.06)"
}, {
  color: "white",
  duration: 0.5,
  ease: "cubic-bezier(0.4, 0, 0.2, 1)",
  scrollTrigger: {
    trigger: ".global-footer",
    start: "top 50%",
    end: "bottom 20%",
    toggleActions: "play reverse play reverse",
    // markers: true
  }
});
