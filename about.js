let counterWrap = document.querySelector('.datas-card_wrap');
let countNumb = gsap.utils.toArray(document.querySelectorAll('.title-data'));
let lastNumb = document.querySelectorAll('.title-data.is-green');

gsap.to(countNumb, {
  y: "-200%",
  duration: 1,
  ease: "globalEase",
  stagger: 0.05,
  scrollTrigger: {
    trigger: counterWrap,
    start: "top center",
  },
});
gsap.to(lastNumb, {
  color: "#B4FF04CC",
  delay: 0.5,
  duration: 1,
  ease: "globalEase",
  scrollTrigger: {
    trigger: counterWrap,
    start: "top center",
  },
});

//audio-text

let typeSplit = new SplitType('#audio-text', {
  types: 'lines, words, chars',
  tagName: 'span'
})

gsap.from('#audio-text .word', {
  opacity: 0.1,
  duration: 1.5,
  stagger: 0.25,
})

//parallax
new Ukiyo(".ukiyo")

//parallax
new Ukiyo(".ukiyo")
