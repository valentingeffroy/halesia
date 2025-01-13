let footer = document.querySelector(".global-footer");
let footerLight = document.querySelector(".footer_logo");

gsap.from(footerLight, {
  opacity: 0.2,
  duration: 1,
  scrollTrigger: {
    trigger: footer,
    start: "top 30%",
    toggleActions: 'play reverse play reverse',
  }
})
