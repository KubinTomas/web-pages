showMessage('Ahoj');

let msg = 'Cus';
showMessage(msg);

function showMessage(message) {
    alert(message);
}

const array = [6, "x", 2, 3, "5", 2, "3"];
const array2 = [3, "5", 2, "3"];
getOnlyNumbers(array);

function getOnlyNumbers(arrayOfEverything) {
    let tmpArray = [];
    for (let i = 0; i < arrayOfEverything.length; i++) {
        const element = arrayOfEverything[i];

        if (typeof element === 'number') {
            tmpArray.push(element);
        }
    }

    return tmpArray;
}

const res = isDivider(10, 2);
console.log(res);
function isDivider(x, y) {
    return x % y == 0;
}

const num = createNumbersUntil(10);
console.log(num);
function createNumbersUntil(n) {
    let numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(i);
    }

    return numbers;
}