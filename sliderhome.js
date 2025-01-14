let mm = gsap.matchMedia();

mm.add("(min-width: 800px)", () => {

  let img1 = document.querySelector(".img_projects-1");
  let img2 = document.querySelector(".img_projects-2");
  let img3 = document.querySelector(".img_projects-3");
  let img4 = document.querySelector(".img_projects-4");
  let img5 = document.querySelector(".img_projects-5");
  let img6 = document.querySelector(".img_projects-6");
  let img7 = document.querySelector(".img_projects-7");

  let title1 = document.querySelector('.project_item.one');
  let title1Content = title1.querySelectorAll("div");
  let divider1 = title1.querySelector('.projects_divider.over')

  let title2 = document.querySelector('.project_item.two');
  let title2Content = title2.querySelectorAll("div");
  let divider2 = title2.querySelector('.projects_divider.over');

  let title3 = document.querySelector('.project_item.three');
  let title3Content = title3.querySelectorAll("div");
  let divider3 = title3.querySelector('.projects_divider.over');

  let title4 = document.querySelector('.project_item.four');
  let title4Content = title4.querySelectorAll("div");
  let divider4 = title4.querySelector('.projects_divider.over');

  let title5 = document.querySelector('.project_item.five');
  let title5Content = title5.querySelectorAll("div");
  let divider5 = title5.querySelector('.projects_divider.over');

  let title6 = document.querySelector('.project_item.six');
  let title6Content = title6.querySelectorAll("div");
  let divider6 = title6.querySelector('.projects_divider.over');

  let title7 = document.querySelector('.project_item.seven');
  let title7Content = title7.querySelectorAll("div");
  let divider7 = title7.querySelector('.projects_divider.over');

  gsap.set(img1, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img2, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img3, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img4, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img5, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img6, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img7, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });

  //section1

  gsap.to(img1, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.one",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title1Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.one",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider1, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.one",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section2
  gsap.to(img2, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.two",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title2Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.two",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider2, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.two",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section3
  gsap.to(img3, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.three",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title3Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.three",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider3, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.three",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section4
  gsap.to(img4, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.four",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title4Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.four",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider4, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.four",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  //section5
  gsap.to(img5, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.five",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title5Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.five",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider5, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.five",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section6
  gsap.to(img6, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.six",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title6Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.six",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider6, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.six",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section7
  gsap.to(img7, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.seven",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title7Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.seven",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider7, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.seven",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

});

mm.add("(max-width: 799px)", () => {

  let img1 = document.querySelector(".img_projects-1");
  let img2 = document.querySelector(".img_projects-2");
  let img3 = document.querySelector(".img_projects-3");
  let img4 = document.querySelector(".img_projects-4");
  let img5 = document.querySelector(".img_projects-5");
  let img6 = document.querySelector(".img_projects-6");
  let img7 = document.querySelector(".img_projects-7");

  let title1 = document.querySelector('.project_item.one');
  let title1Content = title1.querySelectorAll("div");
  let divider1 = title1.querySelector('.projects_divider.over')

  let title2 = document.querySelector('.project_item.two');
  let title2Content = title2.querySelectorAll("div");
  let divider2 = title2.querySelector('.projects_divider.over');

  let title3 = document.querySelector('.project_item.three');
  let title3Content = title3.querySelectorAll("div");
  let divider3 = title3.querySelector('.projects_divider.over');

  let title4 = document.querySelector('.project_item.four');
  let title4Content = title4.querySelectorAll("div");
  let divider4 = title4.querySelector('.projects_divider.over');

  let title5 = document.querySelector('.project_item.five');
  let title5Content = title5.querySelectorAll("div");
  let divider5 = title5.querySelector('.projects_divider.over');

  let title6 = document.querySelector('.project_item.six');
  let title6Content = title6.querySelectorAll("div");
  let divider6 = title6.querySelector('.projects_divider.over');

  let title7 = document.querySelector('.project_item.seven');
  let title7Content = title7.querySelectorAll("div");
  let divider7 = title7.querySelector('.projects_divider.over');

  gsap.set(img1, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img2, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img3, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img4, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img5, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img6, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });
  gsap.set(img7, { clipPath: "inset(100% 0 0 0 round 8px)", scale: 1.1 });

  //section1

  gsap.to(img1, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.one",
      start: "center center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title1Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.one",
      start: "center 60%",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider1, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.one",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section2
  gsap.to(img2, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.two",
      start: "center center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title2Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.two",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider2, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.two",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section3
  gsap.to(img3, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.three",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title3Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.three",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider3, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.three",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section4
  gsap.to(img4, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.four",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title4Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.four",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider4, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.four",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  //section5
  gsap.to(img5, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.five",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title5Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.five",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider5, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.five",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section6
  gsap.to(img6, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.six",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title6Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.six",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider6, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.six",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

  //section7
  gsap.to(img7, {
    clipPath: "inset(0 0 0 0 round 8px)",
    scale: 1,
    scrollTrigger: {
      trigger: ".project_item.seven",
      start: "top center",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(title7Content, {
    color: "#b4ff04",
    opacity: 1,
    scrollTrigger: {
      trigger: ".project_item.seven",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })
  gsap.to(divider7, {
    color: "#b4ff04",
    width: "100%",
    duration: 1,
    scrollTrigger: {
      trigger: ".project_item.seven",
      start: "center center",
      end: "bottom 40%",
      toggleActions: "play reverse play reverse",
    }
  })

});
