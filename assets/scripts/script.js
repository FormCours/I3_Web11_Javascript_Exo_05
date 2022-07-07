// Exo 01
// ******

// Récuperation des elements du DOM
const inputQuantity = document.getElementById('exo01-input-quantity');
const btnExo01 = document.getElementById('exo01-btn');
const displayResult01 = document.getElementById('exo01-display-result');

// Interaction avec l'event "Click"
btnExo01.addEventListener('click', () => {

    // Récuperation de la valeur encodée
    const quantity = parseFloat(inputQuantity.value);
    console.log('Quantity :', quantity);

    // Retrait de la couleur rouge
    displayResult01.classList.remove('text-danger');

    // Génération du message en fonction du niveau
    if (isNaN(quantity) || quantity < 0 || quantity > 50) {
        displayResult01.innerText = 'La valeur encodée est invalide :o';
        displayResult01.classList.add('text-danger');
    }
    else if (quantity === 0) {
        displayResult01.innerText = 'Le reservoire est vide !';
    }
    else if (quantity <= 10) {
        displayResult01.innerText = 'Reservoire preque vide';
    }
    else if (quantity < 50) {
        displayResult01.innerText = 'Le niveau du reservoire est à un niveau normal';
    }
    else {
        displayResult01.innerText = 'Le reservoire est plein !';
    }
});

/**************************************************************************************/

// Exo 02
// ******

// Récuperation des elements du DOM
const inputYear = document.getElementById('exo02-input-year');
const btnExo02 = document.getElementById('exo02-btn');
const displayResult02 = document.getElementById('exo02-display-result');

btnExo02.addEventListener('click', () => {
    // Récuperation la valeur de l'année encodée
    const year = parseInt(inputYear.value);
    console.log('Year :', year);

    // Regle : Une année est bissextile si elle divisible par 4, mais qu'elle n'est pas divisible par 100. A l'execption des années qui sont divisibles par 400.
    let verbe;
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
        verbe = 'est';
    }
    else {
        verbe = 'n\'est pas';
    }

    // Ecriture sours forme de Ternaire: condition ? valeur_si_vrai : valeur_si_faux
    const verbe2 = (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) ? 'est' : 'n\'est pas';

    displayResult02.innerText = `L'année ${year} ${verbe} bissextile !`;
});

// Le test pour savoir si l'année est divisible par 4 est simple avec le modulo
// => year % 4 === 0
// On peut egalement l'obtenir sans utiliser le modulo
// => (year / 4) === Math.floor(year / 4)
