// // provede se jen jednou za 3s
// const timeoutId = setTimeout(() => {
//     test(2);
// }, 3000);

// let x = 0;
// // se provede KAZDYCH 300ms
// const interval = setInterval(() => {
//     console.log(x++);
// }, 300);

// clearTimeout(timeoutId);

// setTimeout(() => {
//     clearInterval(interval);
// }, 5000);

// console.log(interval);


// function test(x) {
//     console.log('Cekal jsem 3 s')

// }

let x = 10;
x = 60;

// localStorage.setItem('cislo', x.toString());
// console.log(Number(localStorage.getItem('cislo')));
// const user = { name: 'Petr', age: 12 };
// const userString = JSON.stringify(user);
// console.log(userString);

// localStorage.setItem('user', userString);
const userString = localStorage.getItem('user');
console.log(userString);
const user = JSON.parse(userString);
console.log(user);

// stringify -> prevede objekt na string
// parse -> prevede string na objekt
// const itemsInCart = JSON.parse(localStorage.getItem('cart'));
const itemsInCart = [];

localStorage.setItem('cart', JSON.stringify(itemsInCart));
