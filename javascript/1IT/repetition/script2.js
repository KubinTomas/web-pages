function onCalculateClick() {
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

    for (let i = 0; i < divCount; i++) {
        flexContainerElement.innerHTML += `<div>${i + 1}</div>`;
    }
}
const participants = [];
function addParticipant() {
    const name = document.getElementById('name').value;
    const age = Number(document.getElementById('age').value);

    const participant = { name, age };
    // const participant = { name: name, age: age };

    participants.push(participant);

    const participantListElement = document.getElementById('participant-list');
    participantListElement.innerHTML = '';

    for (let i = 0; i < participants.length; i++) {
        const participant = participants[i];

        participantListElement.innerHTML += `<li>${participant.name}, ${participant.age}</li>`;
    }
}