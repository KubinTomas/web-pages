let frutines = ['x', 'y'];
frutines.forEach((fruit, iex) => {
    console.log(fruit);
    console.log(iex);
});

// stopky

let totalTimeInSeconds = 0;
let doesStopwatchRun = false;

const stopwatchTimeElement = document.getElementById('stopwatchTime');

setInterval(() => {
    if (doesStopwatchRun) {
        totalTimeInSeconds++;

        stopwatchTimeElement.innerHTML = `${totalTimeInSeconds} s`;
    }
}, 1000);

function startStopwatch() {
    doesStopwatchRun = true;
}

function stopStopwatch() {
    doesStopwatchRun = false;
}

function clearStopwatch() {
    totalTimeInSeconds = 0;

    stopwatchTimeElement.innerHTML = `${totalTimeInSeconds} s`;

}


// HH:MM:SS
const displayTimeElement = document.getElementById('displayTime');
setInterval(() => {
    const time = getTimeHHMMSS(new Date());
    displayTimeElement.innerHTML = time;
}, 1000);

function getTimeHHMMSS(date) {
    return `${fixTimeCharCount(date.getHours())}:${fixTimeCharCount(date.getMinutes())}:${fixTimeCharCount(date.getSeconds())}`;
}

function fixTimeCharCount(value) {
    return value < 10 ? '0' + value : value;
}

// setTimeout
const timeout = setTimeout(() => {

    console.log('Timeout')
}, 3000);

clearTimeout(timeout);

// intervaly
// arrow function, bez parametru
// const interval = setInterval(() => {
//     console.log('Ahoj')
// }, 1000);

// clearInterval(interval);

// // function declaration
// setInterval(hello, 1000);
// function hello() {
//     console.log('hi');
// }

// // function expression
// const guttenTag = function () {
//     console.log('gutten tag');
// }
// setInterval(guttenTag, 1000);