const words = ['apple', 'orange', 'strawberry', 'blueberry'];

let currentWord = '';
let hiddenCurrentWord = '';
let mistakeCounter = 0;
let maxMistakeCount = 12;

const hangmanImgElement = document.getElementById('hangman');
const mistakeCounterElement = document.getElementById('mistakeCounter');
const hiddenWordElement = document.getElementById('hiddenWord');
const guessInputElement = document.getElementById('guessInput');

// setInterval(startGame, 300);
// {mistakeCounter}.png .. 0.png, 1.png, ...
startGame();
function startGame() {
    document.getElementById('neco').style.display = 'none';
    currentWord = getRandomWord(words);
    hiddenCurrentWord = getHiddenWord(currentWord);
    mistakeCounter = 0;

    updateUI();

    // zmena html
    console.log(currentWord);
    console.log(hiddenCurrentWord);
    console.log('\n');
}

function updateUI() {
    mistakeCounterElement.innerHTML = mistakeCounter;
    hiddenWordElement.innerHTML = hiddenCurrentWord;
    hangmanImgElement.src = `images/${mistakeCounter}.png`;
}

function onGuessClick() {
    const value = guessInputElement.value;
    guessInputElement.value = '';

    guess(value);

    return;
    if (value.length === 1) {
        guess(value);
    } else {
        alert('Zadejte jen jedno pismeno');
    }

}
// A -> a
function guess(letter) {
    letter = letter.toLowerCase();
    // ahoj
    // ----
    // -> o
    let didMistake = true;

    let hWord = '';
    for (let i = 0; i < currentWord.length; i++) {
        const letterInWord = currentWord[i].toLowerCase();

        if (letterInWord === letter) {
            hWord += currentWord[i];
            didMistake = false;
        } else {
            hWord += hiddenCurrentWord[i];
        }

    }

    if (didMistake) {
        mistakeCounter++;
    }

    hiddenCurrentWord = hWord;

    updateUI();

    setTimeout(() => {
        const e = document.getElementById('neco');
        if (didUserWin()) {
            e.style.display = 'block';
            e.style.backgroundColor = 'rgba(0 255 25 / 70%)';
            alert("User won the game")
        }

        if (didUserLose()) {
            e.style.display = 'block';
            e.style.backgroundColor = 'rgba(255 0 0 / 70%)';
            alert("User lost the game")
        }
    }, 50);

}

function didUserWin() {
    return hiddenCurrentWord === currentWord;
}

function didUserLose() {
    return mistakeCounter === maxMistakeCount;
}

// ahoj -> ----
function getHiddenWord(word, symbol = '-') {
    let hiddenWord = '';

    // "aba"[1] -> b
    for (let i = 0; i < word.length; i++) {
        hiddenWord += symbol;
    }

    return hiddenWord;
}

function getRandomWord(words) {
    return words[getRndInteger(0, words.length)];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}