// tvorba pole s cisly 2,3,4 o delce 3 a indexech 0,1,2
const numbers = [2, 3, 4];

// metody pole
// push prida prvek na konec pole, takze se zvetsi delka pole
// uz neni 3, po push(2) je 4 a pak po push(2, 4, 5) je 7
numbers.push(2);
// [2,3,4,2]
numbers.push(2, 4, 5);
// [2,3,4,2,2,4,5]

// odebere posledni element v poli a vrati ho
// muzete ulozit do promenne
let x = numbers.pop(); // x je ted 5

// po pop se prvek odebere z pole
numbers.pop();

console.log(numbers);
// i++; -> i = i + 1; -> i += 1;
// [2,3,4,....]
//  0 1 2 3 4 ....

for (let i = 0; i < numbers.length; i += 1) {
    const element = numbers[i];
    console.log(element);
}

let userName = 'petr';
let xy = hello(userName);
function hello(userName) {
    let t = 10;
    console.log('Hello ' + userName);
    t = t * 2;

    return t;
}
// vytvorte pole cisel, kde bude alespon 5 cislic
// vytvorte funkci, ktera prijme pole cisel jako parametr
// funkce vrati soucet vsech prvku v poli, ulozi do promenne
// promennou vypiste do konzole
// 1,4,5 -> 10

const numbs = [2, 3, 41, 2, 1];
// 1 3 5 7 ..
// 3 + 2 -> 5

let res = sum(numbs);
console.log(res);
console.log(sum(numbers));
sum([2, 1]);
sum([2, 1, 6343, 12]);

function sumEven(numbers) {

}

function sum(numbers) {

    let result = 0;

    for (let i = 1; i < numbers.length; i++) {
        const element = numbers[i];
        // 2, 3, 41, 2, 1
        result = result + element;
        // result += element;

    }

    return result;
}