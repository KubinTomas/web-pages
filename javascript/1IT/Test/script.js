showMessage('Ahoj');

let msg = 'Cus';
showMessage(msg);

function showMessage(message) {
    alert(message);
}

const array = [6, "x", 2, 3, "5", 2, "3"];
const array2 = [3, "5", 2, "3"];
getOnlyNumbers(array);
getOnlyNumbers(array2);

function getOnlyNumbers(arrayOfEverything) {
    // return arrayOfEverything.filter(c =>  typeof c === 'number');
    let tmpArray = [];
    //['x', 2, 'w', 3]
    for (let i = 0; i < arrayOfEverything.length; i++) {
        const element = arrayOfEverything[i];
        // 
        if (typeof element === 'number') {
            tmpArray.push(element);
        }
    }

    return tmpArray;
}

const res = isDivider(10, 2);
console.log(res);
function isDivider(x, y) {
    // x > 2 -> true/false -> vstup do ifu
    return x % y === 0;
}

const num = createNumbersUntil(10);
console.log(num);
function createNumbersUntil(n) {
    let numbers = [];

    for (let i = 0; i <= n; i++) {
        numbers.push(i);
    }

    return numbers;
}
let xqwe = tree(3);
console.log(xqwe);
console.log(tree(3));
function tree(height) {

    let tree = '';

    for (let i = 1; i <= height; i++) {

        for (let j = 0; j < i; j++) {
            tree += '*';
            // i: 1, 1
            // i: 2, 2
            // i: 3, 3
        }

        tree += '\n';
    }
    return tree;
}

// "*
//  **
//  ***"
//*
//**
//***

console.log('tree');
console.log(buildTree(3));
function buildTree(floorCount) {
    let tree = '';
    let stars = '*';

    for (let i = 1; i <= floorCount; i++) {
        // 1,2,3
        tree = tree + stars;

        tree += '\n';

        stars = stars + '*';
    }

    return tree;
}

const minNumArr = [21, 2, 44, 32, 1, 7, 8];
min(minNumArr);

function min(numbers) {
    let min = numbers[0];
    // 21, 2
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];

        if (element < min) {
            min = element;
        }
    }

    return min;
}

// vytvorte funkci, ktera prijme pole cisel a vrati nejmensi cislo v poli
// pokud pole cisel je prazdne vratne null

function Max(numbers) {
    if (numbers.length == 0) {
        return null;
    }
    // [2,3,1,11]
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];

        if (element > max) {
            max = element;
        }
    }

    return max;
}