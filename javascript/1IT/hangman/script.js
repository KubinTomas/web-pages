const words = ['apple', 'orange', 'strawberry', 'lemon'];

let mistakeCounter = 0;
const mistakeCounterElement = document.getElementById('mistake-counter');

const wordToGuessElement = document.getElementById('word-to-guess');

let wordToGuess = '';   // tohle ja nahodne slovo, ktere ma uhodnout
let guessingWord = ''; // toto ted hadam, vidim tam - a slova

startGame();
function startGame() {
    mistakeCounter = 0;
    displayMistake(mistakeCounter);

    setWordToGuess();

    guessingWord = hideWord(wordToGuess);
    displayWordToGuess();

    console.log(guessingWord);
    console.log(wordToGuess);
}

function guess() {
    console.log("HAHA FUNGUJE TLACITKO");
    const letter = document.getElementById('letter').value.toLower();



}
function displayWordToGuess() {
    wordToGuessElement.innerHTML = guessingWord;
}

// 'ahoj' -> '----'
function hideWord(wordToHide, hideSymbol = '-') {
    let hiddenWord = '';

    for (let i = 0; i < wordToHide.length; i++) {
        hiddenWord += hideSymbol;
    }

    return hiddenWord;
}

function displayMistake(mistakeCounter) {
    mistakeCounterElement.innerHTML = mistakeCounter;
}

function setWordToGuess() {
    wordToGuess = words[getRndInteger(0, words.length)];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

setInterval(setWordToGuess, 200);