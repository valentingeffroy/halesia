// Sélection des éléments à modifier
const navContactWrap = document.querySelector('.nav_contact');
const navLogo = document.querySelector('.nav_logo');
const darkSections = document.querySelectorAll('.background-color-dark');

// console.log('Elements trouvés :', {
// navContactWrap: navContactWrap,
// navLogo: navLogo,
// darkSections: darkSections.length + ' sections'
// });

function checkIfElementsOverlap() {
    // Vérifier seulement si les éléments existent
    if (!navContactWrap || !navLogo || !darkSections.length) {
        // console.log('Elements manquants :', {
        //     navContact: !!navContactWrap,
        //     navLogo: !!navLogo,
        //     darkSections: darkSections.length
        // });
        return;
    }

    // Obtenir les rectangles des éléments de navigation
    const contactRect = navContactWrap.getBoundingClientRect();
    const logoRect = navLogo.getBoundingClientRect();

    // console.log('Positions des éléments :', {
    //     contact: {
    //         top: contactRect.top,
    //         bottom: contactRect.bottom
    //     },
    //     logo: {
    //         top: logoRect.top,
    //         bottom: logoRect.bottom
    //     }
    // });

    let isOverlapping = false;

    // Vérifier le chevauchement avec chaque section sombre
    for (const section of darkSections) {
        const sectionRect = section.getBoundingClientRect();
        
        // console.log('Position section sombre :', {
        //     top: sectionRect.top,
        //     bottom: sectionRect.bottom
        // });

        // Vérifier si l'un des éléments chevauche la section
        if (
            (sectionRect.top < contactRect.bottom && sectionRect.bottom > contactRect.top) ||
            (sectionRect.top < logoRect.bottom && sectionRect.bottom > logoRect.top)
        ) {
            isOverlapping = true;
            // console.log('Chevauchement détecté !');
            break;
        }
    }

    // Ajouter ou supprimer la classe en fonction du chevauchement
    if (isOverlapping) {
        // console.log('Ajout des classes text-color-white');
        navContactWrap.classList.add('text-color-white');
        navLogo.classList.add('text-color-white');
    } else {
        // console.log('Suppression des classes text-color-white');
        navContactWrap.classList.remove('text-color-white');
        navLogo.classList.remove('text-color-white');
    }
}

// Ajouter l'écouteur d'événement pour le défilement
window.addEventListener('scroll', checkIfElementsOverlap);

// Vérifier immédiatement au chargement
// console.log('Vérification initiale...');
checkIfElementsOverlap();
