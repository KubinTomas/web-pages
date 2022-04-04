

const texts = [
    {
        name: 'Ahoj',
        top: getRndInteger(20, 500),
        left: getRndInteger(20, 500),
        fontSize: getRndInteger(15, 40),
        color: `rgb(${getRndInteger(0, 256)},${getRndInteger(0, 256)},${getRndInteger(0, 256)})`
    },
    {
        name: 'Hello',
        top: getRndInteger(20, 500),
        left: getRndInteger(20, 500),
        fontSize: getRndInteger(15, 40),
        color: `rgb(${getRndInteger(0, 256)},${getRndInteger(0, 256)},${getRndInteger(0, 256)})`
    },
    {
        name: 'Cau',
        top: getRndInteger(20, 500),
        left: getRndInteger(20, 500),
        fontSize: getRndInteger(15, 40),
        color: `rgb(${getRndInteger(0, 256)},${getRndInteger(0, 256)},${getRndInteger(0, 256)})`
    }

];

spawnTexts();
function spawnTexts() {
    for (let i = 0; i < texts.length; i++) {
        const element = texts[i];

        setTimeout(() => {
            const div = document.createElement('div');
            div.innerHTML = element.name;
            div.style.color = element.color;
            div.style.position = 'absolute';
            div.style.fontSize = element.fontSize + 'px';
            div.style.left = element.left + 'px';
            div.style.top = element.top + 'px';
            div.setAttribute('font-size', element.fontSize);

            document.body.appendChild(div);

            div.addEventListener('click', () => {
                const fontSize = Number(div.getAttribute('font-size')) * 2;
                div.setAttribute('font-size', fontSize);
                element.fontSize * 2;
                div.style.fontSize = fontSize + 'px';
            });

        }, i * 1000);

    }
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}