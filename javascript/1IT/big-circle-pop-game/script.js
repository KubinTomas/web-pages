let score = 0;
setInterval(() => {
    spawnCircle();
}, 2000);

function spawnCircle() {
    const circle = document.createElement('div');
    circle.style.backgroundColor = getRandomColor();

    circle.style.position = 'absolute';
    circle.style.top = `${getRandomNumber(0, 600)}px`;
    circle.style.left = `${getRandomNumber(0, 600)}px`;

    const size = getRandomNumber(30, 80);
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;

    circle.style.borderRadius = '50%';

    document.body.appendChild(circle);

    circle.addEventListener('mouseleave', () => {
        makeCircleBigger(circle, size * 2);
    });

    circle.addEventListener('mouseenter', () => {
        makeCircleBigger(circle, size * 2);
    });
}
// 500px, 0-3
// 50px, 0-2
function makeCircleBigger(circle, sizeLimit) {
    const cWidth = Number(circle.style.width.slice(0, circle.style.width.length - 2));

    if (cWidth >= sizeLimit) {
        return;
    }

    const increaseSize = 5;
    circle.style.width = cWidth + increaseSize + 'px';

    const cHeight = Number(circle.style.height.slice(0, circle.style.height.length - 2));
    circle.style.height = cHeight + increaseSize + 'px';

    if (cWidth + increaseSize >= sizeLimit) {
        const redCircle = document.createElement('div');
        redCircle.style.backgroundColor = 'red';
        redCircle.style.borderRadius = '50%';

        redCircle.style.width = (cWidth + increaseSize) / 2 + 'px';
        redCircle.style.height = (cWidth + increaseSize) / 2 + 'px';

        redCircle.style.position = 'relative';
        redCircle.style.transform = 'translate(50%, 50%)';
        redCircle.style.cursor = 'pointer';

        redCircle.addEventListener('click', () => {
            circle.remove();
            score++;
            document.getElementById('score').innerHTML = score;
        });

        circle.appendChild(redCircle);
    }
}

function getRandomColor() {
    return `rgb(${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)},${getRandomNumber(0, 256)})`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}