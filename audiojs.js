const playerContainer = document.querySelector('.audio-player-container');
const playPauseElement = playerContainer.querySelector('.lottie_playpause');
const durationElement = playerContainer.querySelector('.lottie_duration');
const audioElement = playerContainer.querySelector('audio');
const timeElement = playerContainer.querySelector('.time');

let counterWrap = document.querySelector('.datas-card_wrap');
let countNumb = gsap.utils.toArray(document.querySelectorAll('.title-data'));
let lastNumb = document.querySelectorAll('.title-data.is-green');

// Charger les animations Lottie
const playPauseLottie = lottie.loadAnimation({
  container: playPauseElement,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://cdn.prod.website-files.com/670e4e9d992d22fc257ead4a/67502f6d631fa3e12f70117e_playpause_v2.json'
});

const durationLottie = lottie.loadAnimation({
  container: durationElement,
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'https://cdn.prod.website-files.com/670e4e9d992d22fc257ead4a/675030961f624690a49fd0f7_audio-duration_v2.json'
});

// Fonction de lecture du texte
let reading;
let isAnimationPaused = false;
let animationProgress = 0;

function textReading() {
  // Si l'animation est en pause et qu'on veut la reprendre
  if (isAnimationPaused) {
    // Reprendre à partir du point où elle s'est arrêtée
    var tlReading = gsap.timeline({
      paused: true,
      onComplete: () => {
        isAnimationPaused = false;
      }
    });

    let typeSplit = new SplitType('#audio-text', {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    tlReading.to(countNumb, {
      y: "-200%",
      duration: 1,
      ease: "globalEase",
      stagger: 0.05,
      scrollTrigger: {
        trigger: counterWrap,
        start: "top center",
      },
    });

    tlReading.to(lastNumb, {
      color: "#B4FF04CC",
      delay: 0.5,
      duration: 1,
      ease: "globalEase",
      scrollTrigger: {
        trigger: counterWrap,
        start: "top center",
      },
    });

    tlReading.from('#audio-text .word', {
      opacity: 0.1,
      duration: 1.5,
      stagger: 0.25,
    });

    // Aller directement au point où l'animation était pausée
    tlReading.progress(animationProgress);
    tlReading.play();

    isAnimationPaused = false;
    return tlReading;
  }
  // Si c'est un nouveau démarrage
  else {
    var tlReading = gsap.timeline({
      onComplete: () => {
        isAnimationPaused = false;
      }
    });

    let typeSplit = new SplitType('#audio-text', {
      types: 'lines, words, chars',
      tagName: 'span'
    });

    tlReading.to(countNumb, {
      y: "-200%",
      duration: 1,
      ease: "globalEase",
      stagger: 0.05,
      scrollTrigger: {
        trigger: counterWrap,
        start: "top center",
      },
    });

    tlReading.to(lastNumb, {
      color: "#B4FF04CC",
      delay: 0.5,
      duration: 1,
      ease: "globalEase",
      scrollTrigger: {
        trigger: counterWrap,
        start: "top center",
      },
    });

    tlReading.from('#audio-text .word', {
      opacity: 0.1,
      duration: 1.5,
      stagger: 0.25,
    });

    return tlReading;
  }
}

// Trigger
playPauseElement.addEventListener('click', function () {
  if (audioElement.paused) {
    // Jouer
    audioElement.play();
    playPauseLottie.play();
    durationLottie.play();
    reading = textReading();
  } else {
    // Pause
    audioElement.pause();
    playPauseLottie.play();
    durationLottie.pause();

    if (reading) {
      reading.pause();
      isAnimationPaused = true;
      animationProgress = reading.progress();
    }
  }
});

// Mise à jour du temps
audioElement.addEventListener('timeupdate', function () {
  const currentTime = audioElement.currentTime;
  const duration = audioElement.duration || 0;

  timeElement.textContent = `${formatTime(currentTime)} / ${formatTime(duration)}`;
});

// Fonction de formatage du temps
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}
