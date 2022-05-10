const counterElement = document.getElementById('counter');

function updateWordLetterCounter(input) {
    const letterCount = input.value.length;
    const wordCount = input.value.split(' ').filter(c => c.length != 0).length;

    console.log(input.value.split(' ').filter(c => c.length != 0))
    console.log(input.value.split(' '))

    counterElement.innerHTML = `Slov: ${wordCount}, znaky: ${letterCount}`;
}

let textToWrite = 'Ahoj, dneska jdu nakoupit'; // 30
let textWrittenByUserSoFar = 'Amanda';
let matchCounter = 0;

const spans = [];

const paragraph = document.createElement('p');
paragraph.innerHTML = textToWrite

for (let i = 0; i < textToWrite.length; i++) {
    const element = textToWrite[i];

    const e = document.createElement('span');
    spans.push(e);
}



for (let i = 0; i < textWrittenByUserSoFar.length; i++) {
    const letter = textWrittenByUserSoFar[i]; // A
    const textToWriteLetter = textToWrite[i];

    if (letter === textToWriteLetter) {
        matchCounter++;
        spans[i].style.backgroundColor = 'red';
    }

}