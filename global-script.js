let mmGlobal = gsap.matchMedia();
let mmGlobalMobile = gsap.matchMedia();

// Variables 
let globalEase = CustomEase.create("globalEase", "M0,0 C0.504,0 0.1,1 1,1 ");

//Scripts
const lenis = new Lenis({
  lerp: 0.1,
  wheelMultiplier: 1,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// GSAP parallax
gsap.utils.toArray("[data-speed]").forEach(el => {
  gsap.to(el, {
    y: function () {
      return (1 - parseFloat(el.getAttribute("data-speed"))) * (ScrollTrigger
        .maxScroll(window) - (this.scrollTrigger ? this.scrollTrigger.start : 0))
    },
    ease: "none",
    scrollTrigger: {
      trigger: el,
      start: "top bottom",
      end: "top top",
      invalidateOnRefresh: true,
      scrub: true
    }
  });
});
