const pElement = document.getElementById('p');
const textElement = document.getElementById('text');
const mistakeElement = document.getElementById('mistake');

let mistakeCounter = 0;
const spans = [];

function loadText() {

    pElement.innerHTML = '';
    for (let i = 0; i < textElement.value.length; i++) {
        const letter = textElement.value[i];
        const letterSpan = document.createElement('span');
        letterSpan.innerHTML = letter
        spans.push(letterSpan);
        pElement.appendChild(letterSpan);
    }

    textElement.value = '';
}

function checkLetters(input) {
    if (spans.length === 0) {
        return;

    }
    resetToBlack();

    const text = input.value;

    for (let i = 0; i < text.length; i++) {
        const letter = text[i];

        if (letter !== spans[i].innerHTML) {
            spans[i].style.color = 'red';
            mistakeCounter++;
        } else {
            spans[i].style.color = 'green';
        }

    }
    mistakeElement.innerHTML = "Pocet chyb: " + mistakeCounter;
}

function resetToBlack() {
    spans.forEach(s => {
        s.style.color = 'black';
    });
}
