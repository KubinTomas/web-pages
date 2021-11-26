const fruits = ['Apple', 'Orange', 'Banana'];

const colors = ['red', 'orange', 'blue', 'green'];

setInterval(() => {
    const color = colors[Math.floor(Math.random() * colors.length)];
    console.log(Math.floor(Math.random() * 256));

    const rectElement = document.getElementById('rect');

    rectElement.style = `width: 1000px;height: 1000px;background-color: ${color}`;

    const htmlElement = document.getElementsByTagName('html')[0];
    console.log(htmlElement)



}, 3000)

function hello() {
    const fruitWrapperElement = document.getElementById('fruitWrapper');

    let result = '';
    for (let i = 0; i < fruits.length; i++) {
        const element = fruits[i];

        const item = `<h1>${element}</h1>`;

        result += item;
    }

    fruitWrapperElement.innerHTML = result;
}

function outputName() {
    const nameElement = document.getElementById('name');

    const name = nameElement.value;

    alert(name);
}
