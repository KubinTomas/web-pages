const words = ['Apple', 'orange', 'bannana'];
// 'orange', 'bannana'
const wordToGuess = getRandomWord();
let wordGuessedByUser = hideWord(wordToGuess, '-')
let mistakes = 0;
const mistakesLimit = 5;

// var, let, const
// var
// 

refreshView();

function makeGuess() {
    const endGame = isGameOver();

    if (endGame) {
        alert('Konec hry! Prohral jsi');
        return;
    }

    const letter = readLetter();

    tryFillLetter(letter);

    refreshView();

    setTimeout(() => {
        victoryCheck();

        if (isGameOver()) {
            alert('Konec hry! Prohral jsi');
            return;
        }
    }, 50);


}

function victoryCheck() {
    if (wordToGuess === wordGuessedByUser) {
        alert('Vyhral jsi!');
    }
}

function isGameOver() {
    return mistakes >= mistakesLimit;
}

function tryFillLetter(letter) {
    letter = letter.toLowerCase();
    let match = false;

    for (let i = 0; i < wordToGuess.length; i++) {
        const element = wordToGuess[i].toLowerCase();

        if (element == letter) {
            match = true;
            wordGuessedByUser[i] = wordToGuess[i];
            wordGuessedByUser = wordGuessedByUser.replaceAt(i, wordToGuess[i])
        }
    }

    if (!match) {
        mistakes++;
    }
}

function readLetter() {
    const letterPlace = document.getElementById('userLetter');
    const letter = letterPlace.value;
    letterPlace.value = '';

    return letter;
}

function refreshView() {
    displayWord();
    displayImage();
}

function displayImage() {
    const imagePath = `hang${mistakes}.jpg`;
    const imagePlace = document.getElementById('hangmanImage');

    imagePlace.src = imagePath;

    const errorMsg = `${mistakes}/${mistakesLimit}`
    const errorPlace = document.getElementById('errorPlace');
    // errorPlace.innerHTML = errorMsg + ', ' + imagePath;

    imagePlace.alt = errorMsg + ', ' + imagePath;

}

function displayWord() {
    const wordPlace = document.getElementById('hangmanWord');
    wordPlace.innerHTML = wordGuessedByUser;
}

function hideWord(words, symbol) {
    let hiddenWord = '';
    for (let i = 0; i < words.length; i++) {
        hiddenWord += '-';
    }
    return hiddenWord;
}

function getRandomWord() {
    const index = Math.floor(Math.random() * words.length);

    return words[index];
}

// In JavaScript, strings are immutable, which means the best you can do is to create a new string with the changed content and assign the variable to point to it.

// string nelze ment, je treba tedy vytvorit novy zmeneny string a ten pak priradit
String.prototype.replaceAt = function (index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}