

const fruits = [
    {
        name: 'Apple',
        color: 'red',
        img: 'https://grocery11.com/wp-content/uploads/2021/04/apple-fruit-500x500-1.jpg'
    },
    {
        name: 'Banana',
        color: 'yellow',
        img: 'https://5.imimg.com/data5/VY/QT/MY-51857835/banana-fruit-500x500.jpg'
    },
    {
        name: 'Plum',
        color: 'Purple',
        img: 'https://static.libertyprim.com/files/familles/prune-large.jpg?1569271837'
    },
];

const fruitWrapper = document.getElementById('fruitWrapper');
console.log(fruitWrapper);

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];

    fruitWrapper.innerHTML += `<div class="flex-item">
        <div class="img-wrapper" style="background-color: ${fruit.color};">
            <img src="${fruit.img}" alt="">
        </div>
        <div>
            <h3>${fruit.name}</h3>
        </div>
    </div>
    `;

    //     fruitWrapper.innerHTML += "<div class="flex-item">
    //     <div class="img-wrapper">
    //         <img src="" alt="">
    //     </div>
    //     <div>
    //         <h3>name</h3>
    //     </div>
    // </div>";

}

