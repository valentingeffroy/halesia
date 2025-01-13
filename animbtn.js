let btnWraps = document.querySelectorAll('.btn_wrap');

btnWraps.forEach((btnWrap) => {
  btnWraps.forEach((btnWrap) => {
    // Sélectionner les éléments à l'intérieur de ce bouton spécifique
    let btnText = btnWrap.querySelector('.btn-text');
    let btnDot = btnWrap.querySelector('.btn_point');
    let btnArrow = btnWrap.querySelector('.ico_arrow-right');

    // Créer une timeline unique pour ce bouton
    let btnTL = gsap.timeline({ paused: true });

    // Configurer l'animation
    btnTL.to(btnWrap, { scale: 1.1, duration: 1, ease: "expo.inOut" });
    btnTL.to(btnDot, { scale: 50, duration: 1, ease: "expo.inOut" }, 0);
    btnTL.to(btnText, { color: "white", duration: 1, ease: "expo.inOut" }, 0);
    btnTL.to(btnArrow, { color: "white", duration: 1, ease: "expo.inOut" }, 0);

    // Ajouter les événements pour ce bouton
    btnWrap.addEventListener('mouseenter', () => {
      btnTL.play();
    });

    btnWrap.addEventListener('mouseleave', () => {
      btnTL.reverse();
    });
  });
});
