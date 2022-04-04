const texts = [
    {
        name: 'Ahoj',
        color: `rgb(${getRandomNumber(0, 256)},${getRandomNumber(0, 256)},${getRandomNumber(0, 256)})`,
        fontSize: getRandomNumber(10, 25),
        top: `${getRandomNumber(0, 500)}px`,
        left: `${getRandomNumber(0, 500)}px`,
    },
    {
        name: 'Lore Ipsum',
        color: `rgb(${getRandomNumber(0, 256)},${getRandomNumber(0, 256)},${getRandomNumber(0, 256)})`,
        fontSize: getRandomNumber(10, 25),
        top: `${getRandomNumber(0, 500)}px`,
        left: `${getRandomNumber(0, 500)}px`,
    },
    {
        name: 'Starcraft II',
        color: `rgb(${getRandomNumber(0, 256)},${getRandomNumber(0, 256)},${getRandomNumber(0, 256)})`,
        fontSize: getRandomNumber(10, 25),
        top: `${getRandomNumber(0, 500)}px`,
        left: `${getRandomNumber(0, 500)}px`,
    },
    {
        name: 'Game On',
        color: `rgb(${getRandomNumber(0, 256)},${getRandomNumber(0, 256)},${getRandomNumber(0, 256)})`,
        fontSize: getRandomNumber(10, 25),
        top: `${getRandomNumber(0, 500)}px`,
        left: `${getRandomNumber(0, 500)}px`,
    },
    {
        name: 'Bed On',
        color: `rgb(${getRandomNumber(0, 256)},${getRandomNumber(0, 256)},${getRandomNumber(0, 256)})`,
        fontSize: getRandomNumber(10, 25),
        top: `${getRandomNumber(0, 500)}px`,
        left: `${getRandomNumber(0, 500)}px`,
    },
];

createTexts();
function createTexts() {
    for (let i = 0; i < texts.length; i++) {
        setTimeout(() => {
            const text = texts[i];
            // console.log(i, text, text.color);

            const textElement = document.createElement('div');
            textElement.style.color = text.color;
            textElement.style.position = 'absolute';
            textElement.style.top = text.top;
            textElement.style.left = text.left;
            textElement.style.fontSize = text.fontSize + 'px';

            textElement.innerHTML = text.name;

            document.body.appendChild(textElement);

            textElement.addEventListener('click', () => {
                text.fontSize = text.fontSize * 2;
                textElement.style.fontSize = text.fontSize + 'px';
            });
        }, i * 1000);
    }
}
// 0..1s
// 1..2s
// 2..3s

// 'rgb(' + ${getRandomNumber(0, 256)} + ',' + ${getRandomNumber(0, 256)} + ',' + ${getRandomNumber(0, 256)} +')'

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}