const words = ['apple', 'orange', 'strawberry', 'blueberry'];

let currentWord = '';
let hiddenCurrentWord = '';
let mistakeCounter = 0;
let maxMistakeCount = 12;

// setInterval(startGame, 300);
// {mistakeCounter}.png .. 0.png, 1.png, ...
startGame();
function startGame() {
    currentWord = getRandomWord(words);
    hiddenCurrentWord = getHiddenWord(currentWord);
    mistakeCounter = 0;

    // zmena html
    console.log(currentWord);
    console.log(hiddenCurrentWord);
    console.log('\n');
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

    if (didUserWin()) {
        alert("User won the game")
    }

    if (didUserLoose()) {
        alert("User lost the game")
    }
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