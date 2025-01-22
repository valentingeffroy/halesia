/*
Animation du lecteur audio custom - Lecteur audio personnalisé avec animations Lottie et GSAP
*/

// 1. Sélection des éléments du DOM
const playerContainer = document.querySelector(".audio-player-container");
const playPauseElement = playerContainer.querySelector(".lottie_playpause");
const durationElement = playerContainer.querySelector(".lottie_duration");
const audioElement = playerContainer.querySelector("audio");
const timeElement = playerContainer.querySelector(".time");

// Éléments pour l'animation des données
let counterWrap = document.querySelector(".datas-card_wrap");
let countNumb = gsap.utils.toArray(document.querySelectorAll(".title-data"));
let lastNumb = document.querySelectorAll(".title-data.is-green");

// 2. Initialisation des animations Lottie
const playPauseLottie = lottie.loadAnimation({
  container: playPauseElement,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://cdn.prod.website-files.com/670e4e9d992d22fc257ead4a/67502f6d631fa3e12f70117e_playpause_v2.json",
});

const durationLottie = lottie.loadAnimation({
  container: durationElement,
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "https://cdn.prod.website-files.com/670e4e9d992d22fc257ead4a/675030961f624690a49fd0f7_audio-duration_v2.json",
});

// 3. Variables de contrôle de l'animation
let reading;
let isAnimationPaused = false;
let animationProgress = 0;

// 4. Fonction principale d'animation du texte
function textReading() {
  // Logique pour gérer la reprise d'une animation pausée
  if (isAnimationPaused) {
    // Configuration de la timeline pour la reprise
    var tlReading = gsap.timeline({
      paused: true,
      onComplete: () => {
        isAnimationPaused = false;
      },
    });

    // Configuration des animations (compteurs et texte)
    // ... configuration des animations ...

    // Reprise de l'animation au point de pause
    tlReading.progress(animationProgress);
    tlReading.play();
    isAnimationPaused = false;
    return tlReading;
  }
  // Logique pour une nouvelle animation
  else {
    var tlReading = gsap.timeline({
      onComplete: () => {
        isAnimationPaused = false;
      },
    });

    // Split du texte pour l'animation
    let typeSplit = new SplitType("#audio-text", {
      types: "lines, words, chars",
      tagName: "span",
    });

    // Configuration des animations
    // ... configuration des animations ...

    return tlReading;
  }
}

// 5. Gestion des événements
// Gestion du clic sur le bouton play/pause
playPauseElement.addEventListener("click", function () {
  if (audioElement.paused) {
    // Démarrage de la lecture
    audioElement.play();
    playPauseLottie.play();
    durationLottie.play();
    reading = textReading();
  } else {
    // Mise en pause
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

// 6. Mise à jour du temps de lecture
audioElement.addEventListener("timeupdate", function () {
  const currentTime = audioElement.currentTime;
  const duration = audioElement.duration || 0;
  timeElement.textContent = `${formatTime(currentTime)} / ${formatTime(
    duration
  )}`;
});

// 7. Fonction utilitaire pour formater le temps
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
