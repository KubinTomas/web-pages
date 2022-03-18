// const element = document.createElement('div');
// const content = document.createTextNode('Hello World');
// const attribute = document.createAttribute('data-name');
// attribute.value = 'nejakaHodnotaAsi';

// element.style.color = "red";

// // const bodyElement = document.getElementById('body');
// // console.log(bodyElement);

// element.addEventListener('click', test);

// function test() {
//     this.style.backgroundColor = "orange";
//     console.log(this);
//     alert('asdasd');
// }

// element.appendChild(content);
// element.setAttributeNode(attribute);
// document.body.appendChild(element);

// console.log(element.getAttribute('data-name'));

// console.log(element);
// console.log(typeof element);
// console.log(content);
// console.log(typeof content);

// const itemListElement = document.getElementById('item-list');

// const itemsToBuy = [{ id: 1, imgPath: '', title: '', price: 10 }, {}];

// const itemsInCart = [{ id: 1, count: 2 }];

// for (let i = 0; i < itemsToBuy.length; i++) {
//     const c = itemsToBuy[i];

// }

// itemsToBuy.forEach(c => {
//     const item = document.createElement('div');
//     const attributeId = document.createAttribute('id');
//     attributeId = c.id;
//     const buyItemBtn = document.createElement('button');
//     buyItemBtn.setAttributeNode(attributeId);
//     buyItemBtn.addEventListener('click', buyItem);
// });

// function buyItem() {
//     const itemId = this.getAttribute('id');

//     // pridam do kosiku a nebo zvyisum pocet pokud je v kosiku
// }


// const element = document.createElement('h1');
// const text = document.createTextNode('Hello World');
// const attributeId = document.createAttribute('data-o-aute');
// attributeId.value = 'Batmobil';

// element.setAttributeNode(attributeId);
// element.appendChild(text);

// element.addEventListener('click', test);

// element.style.color = "red";

// function test() {
//     this.style.backgroundColor = 'orange';
//     console.log(this);
//     console.log(this.getAttribute('data-o-aute'));
//     console.log('asdkjasjdkasld');

// }

// document.body.appendChild(element);

// const element = document.createElement('h1');
// const text = document.createTextNode('Hello World');
// const attribute = document.createAttribute('neco-o-necem');
// attribute.value = 'batmobile';

// element.appendChild(text);
// element.setAttributeNode(attribute);

// document.body.appendChild(element);

// // element.classList
// element.style.color = 'red';


// element.addEventListener('click', test);

// function test() {
//     console.log(this.getAttribute('neco-o-necem'));
//     this.style.backgroundColor = 'orange';
// }

// console.log(element);

// console.log(element.getAttribute('neco-o-necem'));

const element = document.createElement('h1');
const text = document.createTextNode('Hello World');
const attribute = document.createAttribute('auto');
attribute.value = 'xxxx';

element.setAttribute('pres-set', 'value');
element.setAttributeNode(attribute);

element.style.color = 'red';

element.appendChild(text);

element.addEventListener('click', test);

function test() {
    console.log('asdasdasd');
    console.log(this);
    this.style.backgroundColor = 'orange';
}

document.body.appendChild(element);

const request = new XMLHttpRequest();
request.onreadystatechange = function () {
    console.log(this);

    if (this.readyState === 4) {
        if (this.status === 200) {
            document.body.className = 'ok';
            console.log(JSON.parse(this.responseText));
        } else if (this.response == null && this.status === 0) {
            document.body.className = 'error offline';
            console.log("The computer appears to be offline.");
        } else {
            document.body.className = 'error';
        }
    }
};

// https://api.openweathermap.org/data/2.5/weather?lat=50&lon=50&appid=2f5544136c2553c3d57fed01c3ce22e3
// request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=50&lon=50&appid=2f5544136c2553c3d57fed01c3ce22e3');
// request.send(null);













