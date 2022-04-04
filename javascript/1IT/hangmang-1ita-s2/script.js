const words = ['apple', 'orange', 'strawberry', 'blueberry'];

let currentWord = '';
let hiddenCurrentWord = '';
let mistakeCounter = 0;

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
    // -> a
    let hWord = '';
    for (let i = 0; i < currentWord.length; i++) {
        const letterInWord = currentWord[i].toLowerCase();

        if (letterInWord === letter) {
            hWord += currentWord[i];
        } else {
            hWord += hiddenCurrentWord[i];
        }

    }

    hiddenCurrentWord = hWord;

    console.log(currentWord);
    console.log(hiddenCurrentWord);
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