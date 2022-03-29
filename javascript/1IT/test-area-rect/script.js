function spocitej() {
    const text = document.getElementById('txt').value;
    const znakyPocet = text.length;

    let aCount = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == 'a') {
            aCount++;
        }
    }

    const msg = "Pocet znaku: " + znakyPocet + ", vyskyt a: " + aCount;
    document.getElementById('output').innerHTML = `Pocet znaku: ${znakyPocet}, vyskyt a: ${aCount}`;
}


setInterval(() => {
    createBall();
}, 2000);
// const colors = ['red', 'orange', 'blue'];
// colors[getRndInteger(0, colors.length)];
let score = 0;
const scoreElement = document.createElement('h3');
scoreElement.innerHTML = score;
document.body.appendChild(scoreElement);

function createBall() {
    const ball = document.createElement('div');
    // ball.className = 'ball';
    // ball.classList.add('ball');

    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.position = 'absolute';
    ball.style.top = getRndInteger(50, 700) + 'px';
    ball.style.left = `${getRndInteger(50, 700)}px`;
    ball.style.borderRadius = '50%';
    ball.style.backgroundColor = `rgb(${getRndInteger(0, 256)},${getRndInteger(0, 256)},${getRndInteger(0, 256)})`;

    document.body.appendChild(ball);

    setTimeout(() => {
        // document.body.removeChild(ball);
        ball.remove();
    }, 5000);

    ball.addEventListener('click', () => {
        ball.remove();
        score++;
        scoreElement.innerHTML = score;
    });

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const itemsElement = document.getElementById('items-to-buy');
const items = [{ name: 'Mrkev', price: 12 }, { name: 'Jablko', price: 12 }, { name: 'Pomeranc', price: 12 }];

const itemsInCart = [];

for (let i = 0; i < items.length; i++) {
    const item = items[i];

    const itemElement = document.createElement('div');

    const titleElement = document.createElement('h3');
    titleElement.innerHTML = item.name;
    itemElement.appendChild(titleElement);

    const priceElement = document.createElement('h4');
    priceElement.innerHTML = item.price;
    itemElement.appendChild(priceElement);

    const btnElement = document.createElement('button');
    btnElement.innerHTML = 'KOUPIT';
    itemElement.appendChild(btnElement);

    btnElement.addEventListener('click', () => {
        console.log('KUPUJI SI TOTO', item);
        addItemToCart(item);
    });

    itemsElement.appendChild(itemElement);
}

function addItemToCart(item) {
    // if(je v kosiku zvys pocet, else pridej do kosiku)
    itemsInCart.push(item);
}

function showCart() {

}
// <div id='items-to-buy'>
//     <div>
//         <h3>Jablko</h3>
//         <h4>10</h4>
//     </div>
//     <div>
//         <h3>Jablko</h3>
//         <h4>10</h4>
//     </div>
//     <div>
//         <h3>Jablko</h3>
//         <h4>10</h4>
//     </div>
// </div>
