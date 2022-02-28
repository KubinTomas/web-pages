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
    resultElement.innerHTML = resultElement.innerHTML + `<div>1</div>`;

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