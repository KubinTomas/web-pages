function onCalculateClick() {
    const numA = Number(document.getElementById('numberA').value);
    const numB = Number(document.getElementById('numberB').value);

    const operator = document.getElementById('operators').value;

    const resultElement = document.getElementById('result');
    let result = 0;

    if (operator === '+') {
        result = numA + numB;
    }

    if (operator === '-') {
        result = numA - numB;
    }

    resultElement.innerHTML = result;
}

let divCount = 0;

function addDiv() {
    divCount++;

    showDivs();
}

function removeDiv() {
    if (divCount > 0) {
        divCount--;
    }

    showDivs();
}

function showDivs() {
    const flexContainerElement = document.getElementById('flex-container');
    flexContainerElement.innerHTML = '';

    for (let index = 0; index < divCount; index++) {
        flexContainerElement.innerHTML += `<div>${index + 1}</div>`
    }

}

const participants = [];
let id = 1;
function addParticipant() {
    const name = document.getElementById('name').value;
    const age = Number(document.getElementById('age').value);

    // const participant = { name: name, age: age };
    const participant = { id, name, age };

    document.getElementById('name').value = '';
    document.getElementById('age').value = '';

    participants.push(participant);
    id++;

    showParticipants();
}

function showParticipants() {
    const participantListElement = document.getElementById('participant-list');
    participantListElement.innerHTML = '';

    for (let index = 0; index < participants.length; index++) {
        const participant = participants[index];

        participantListElement.innerHTML += `<li>${participant.name}, ${participant.age}</li>`;
    }

}


// [neco, mesto, dalsiMesto]=['Neco','Praha','Usti']
// const a = {
//     name: 'Praha',
//     age: 12
// }
[
    { name: 'Pan P', age: 12 },
    { name: 'Pan P', age: 12 },
    { name: 'Pan P', age: 12 },
    { name: 'Pan P', age: 12 },

]
// a.name
// a.age
function neco(x, ...y) {

}
neco(2, 3, 2, 4, 5, 5, 3, 4);
function onCalculateClick2() {
    console.log(document.querySelectorAll('.number'));

    let a = [1, 2, 3, 4, 2];

    // [1, 2, 3, 4, 2]
    let b = [...a];

    for (let i = 0; i < a.length; i++) {
        const element = a[i];
        b.push(element);
    }

    b.push(2);

    const xwe = (a) => { return a * 2 };
    const xweq = (a) => a * 2;

    // [2, 3, 4]
    let qq = [2, 3, 4];
    let x = [2, 3, 4].map(c => c * 2);
    // [4, 6, 8]

    for (let i = 0; i < qq.length; i++) {
        const element = qq[i];
        qq[i] = element * 2;

    }

    const numbers = [...document.querySelectorAll('.number')]
        .map(c => Number(c.value));

    const a = [1, 2, 3, 4, 5, 6];

    console.log(a)
    console.log(b)

    // const n1 = numbers[0];
    // const n2 = numbers[1];

    [n1, n2, n3] = numbers;

    console.log(n1);
    console.log(n2);


    const numberA = Number(document.getElementById('numberA').value);
    const numberB = Number(document.getElementById('numberB').value);
    const operator = document.getElementById('operators').value;

    const resultElement = document.getElementById('result');

    let result = 0;
    if (operator === '+') {
        result = numberA + numberB;
    }

    if (operator === '-') {
        result = numberA - numberB;
    }

    resultElement.innerHTML = result;



}

let person = { summary: 'Neco' };

const n = [2, 3, 4];
const n1 = [];
for (let i = 0; i < n.length; i++) {
    const element = n[i];

    n1.push(element);
}