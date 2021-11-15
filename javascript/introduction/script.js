'use strict';


function GuessNumberFromInput() {
    const number = Number(document.getElementById('userNumber').value);

    GuessNumber(number);
}

function GuessNumberFromPrompt() {
    const userNumber = Number(prompt('Insert number in range 0-10'));

    GuessNumber(userNumber);
}

function GuessNumber(userNumber) {

    // set program random value 0 to 10
    const programNumber = Math.floor(Math.random() * 2);

    if (userNumber === programNumber) {
        console.log('User win');
    } else {
        const resMsg = `User lost! Your number was ${userNumber} and my is ${programNumber}`;
        console.log(resMsg);
    }

}

function Hello() {
    alert('as');
}

// cookie clicker