/*
Animation du cta du menu fixed, page gamme Performance/Architecture. 
*/

let subNav = document.querySelector('.subnav_btn');
let subDot = document.querySelector('.subbtn_point');
let subText = document.querySelector('.subbtn_text');

let subbtnTL = gsap.timeline({ paused: true });
subbtnTL.to(subDot, { scale: 50, duration: 1, ease: "expo.inOut" }, 0);
subbtnTL.to(subText, { color: "black", duration: 1, ease: "expo.inOut" }, 0);

subNav.addEventListener('mouseenter', () => {
  subbtnTL.play();
});

subNav.addEventListener('mouseleave', () => {
  subbtnTL.reverse();
});
