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