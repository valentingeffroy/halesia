/*
Animation des customs tabs de la section "Expertises et services" 
*/

const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const tabSelector = document.querySelector('.tab-selector');

// Position initiale du sélecteur
tabSelector.style.transform = `translateY(${tabs[0].offsetTop}px)`;

tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    // Retirer la classe active de toutes les tabs et contents
    tabs.forEach(t => t.classList.remove('active'));
    tabContents.forEach(tc => tc.classList.remove('active'));

    // Ajouter la classe active à la tab cliquée
    this.classList.add('active');

    // Déplacer le sélecteur vers la tab cliquée
    tabSelector.style.transform = `translateY(${this.offsetTop}px)`;

    // Récupérer et activer le contenu correspondant
    const tabId = this.getAttribute('data-tab');
    const targetContent = document.getElementById(tabId);

    if (targetContent) {
      targetContent.classList.add('active');
    } else {
      console.error('Contenu de tab non trouvé');
    }
  });
});
