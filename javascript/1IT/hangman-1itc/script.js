const fruitWords = ['Apple', 'Orange', 'Strawberry', 'Lemon'];
const carWords = ['bmw'];

let currentWord = '';
let hiddenCurrentWord = '';

const maxErrorCount = 12;
let errorCount = 0;

const letterElement = document.getElementById('letter');
const hiddenWordElement = document.getElementById('hiddenWord');
const hangmanImgElement = document.getElementById('hangmanImg');

// setInterval(startGame, 300);

startGame();
function startGame() {
    errorCount = 0;
    currentWord = getRandomWord(fruitWords);
    hiddenCurrentWord = getHiddenWord(currentWord);

    updateUI();
    console.log(currentWord);
    console.log(hiddenCurrentWord);
}

function updateUI() {
    hiddenWordElement.innerHTML = hiddenCurrentWord;
    hangmanImgElement.src = `images/${errorCount}.png`;
    // hangmanImgElement.src = 'images/' + errorCount + '.png';
}

function onGuessClick() {
    guess(letterElement.value);
}

function guess(letter) {
    if (letter.length !== 1) {
        alert(`Haha ${letter} ti fakt neuznam, dej tam jen JEDEN znak.`);
        return;
    }

    // A -> a
    letter = letter.toLowerCase();

    // Apple
    // -----
    // A----

    let hWord = '';
    let error = true;
    for (let i = 0; i < currentWord.length; i++) {
        const letterInCurrentWord = currentWord[i].toLowerCase();

        if (letterInCurrentWord === letter) {
            hWord += currentWord[i];
            error = false;
        } else {
            hWord += hiddenCurrentWord[i];
        }
    }

    hiddenCurrentWord = hWord;

    if (error) {
        errorCount++;
    }

    updateUI();

    setTimeout(() => {
        if (didUserWin()) {
            alert('uzivatel VYHRAL');
        }

        if (didUserLose()) {
            alert('uzivatel PROHRAL');
        }
    }, 100);

    console.log(currentWord);
    console.log(hiddenCurrentWord);
}

function didUserWin() {
    return currentWord === hiddenCurrentWord;
}

function didUserLose() {
    return errorCount >= maxErrorCount;
}

//apple -> -----
function getHiddenWord(word) {
    let hiddenWord = '';
    for (let i = 0; i < word.length; i++) {
        hiddenWord += '-';
    }

    return hiddenWord;
}

function getRandomWord(words) {
    return words[getRandomNumber(0, words.length)];
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}