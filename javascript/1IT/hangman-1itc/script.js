const fruitWords = ['Apple', 'Orange', 'Strawberry', 'Lemon'];
const carWords = ['bmw'];

let currentWord = '';
let hiddenCurrentWord = '';

// setInterval(startGame, 300);

startGame();
function startGame() {
    currentWord = getRandomWord(fruitWords);
    hiddenCurrentWord = getHiddenWord(currentWord);

    console.log(currentWord);
    console.log(hiddenCurrentWord);
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
    for (let i = 0; i < currentWord.length; i++) {
        const letterInCurrentWord = currentWord[i].toLowerCase();

        if (letterInCurrentWord === letter) {
            hWord += currentWord[i];
        } else {
            hWord += hiddenCurrentWord[i];
        }
    }

    hiddenCurrentWord = hWord;

    console.log(currentWord);
    console.log(hiddenCurrentWord);
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