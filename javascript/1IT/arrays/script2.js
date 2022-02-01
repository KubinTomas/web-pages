const numbers = [];
numbers.push(2, 4, 5, 6, 10);

let userAge = 10;
console.log(helloUser('Tim', userAge));

let userAgeDouble = helloUser('Tim', userAge);

function helloUser(userName, userAge) {
    console.log('Hi ' + userName + ', age: ' + userAge + ' years');
    // `Hi ${userName}, age: ${userAge} years`

    return userAge * 2;
}


// vytvorte pole cisel, kde bude alespon 5 cislic
// vytvorte funkci, ktera prijme pole cisel jako parametr
// funkce vrati soucet vsech prvku v poli, ulozi do promenne
// promennou vypiste do konzole
// 1,4,5 -> 10
console.log(sum(numbers));
function sum(numbers, n) {

    let result = 0;
    http://benesmartin.cz/stealni.to/
    for (let i = n; i < numbers.length; i += n) {
        const element = numbers[i];
        result += element;
    }

    return result;
}

// vytvorte dve funkce, kazda prijme parametr cislo
// a vrati boolean zda je sude a nebo liche
// isOdd(number), isEven(number)

function isEven(number) {
    return number % 2 == 0;
}

function isOdd(number) {
    return !isEven(number);
}

// udelejte to same jako nahore se scitanim cisel, ale sectete jen cisla na lichem indexu
// dalsi funcke - ta secte kazde N-te cislo, dle parametru, N je parametr
// 2 4 3 2 1
// 4 2

// 2 4 3 2 1
// N: 1
// 2 4 3 2 1
// N: 2
// N: 3


let x = 'asd';
x = 2;

// new int[8];
const fruits = ['A', 'B', 'C'];
fruits.push('x', 'asd', 'asdXX');

// i+=2;
// i = i + 2;
for (let i = 10; i > 5; i--) {
    const element = fruits[i];
    let x = 2;
}
let xx = 'Petr';
sayHi(xx);
sayHi('Tim');
function sayHi(userName) {
    console.log("ahoj " + userName);
}
let xyx = sumec(2, 3);
function sumec(a, b) {
    return a + b;
}



// vytvorte pole cisel, kde bude alespon 5 cislic
// vytvorte funkci, ktera prijme pole cisel jako parametr
// funkce vrati soucet vsech prvku v poli, ulozi do promenne
// promennou vypiste do konzole
// 1,4,5 -> 10

// vytvorte funkce isEven a isOdd, prijmou cislo a vrati bool.

// udelejte to same jako nahore se scitanim cisel, ale sectete jen cisla na lichem indexu
// dalsi funcke - ta secte kazde N-te cislo, dle parametru, N je parametr
// 2 4 3 2 1
// 4 2

// 2 4 3 2 1
// N: 1
// 2 4 3 2 1
// N: 2
// N: 3