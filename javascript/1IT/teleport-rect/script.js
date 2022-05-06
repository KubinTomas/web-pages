let selectedElement;
const count = 15;
let moved = 0;
for (let i = 0; i < count; i++) {
    spawnRect();
}

function spawnRect() {
    const rect = document.createElement('div');

    const bgColor = getRandomColor();
    rect.style.backgroundColor = bgColor;

    rect.style.position = 'absolute';
    rect.style.top = `${getRandomNumber(0, 600)}px`;
    rect.style.left = `${getRandomNumber(0, 600)}px`;

    const size = getRandomNumber(30, 80);
    rect.style.width = `${size}px`;
    rect.style.height = `${size}px`;

    document.body.appendChild(rect);

    rect.addEventListener('click', () => {
        if (selectedElement) {
            selectedElement.style.backgroundColor = bgColor;
        }

        selectedElement = rect;
        selectedElement.style.backgroundColor = 'green';
    });

}

const ladingAreaElement = document.getElementById('ladingArea');
const width = Number(ladingAreaElement.style.width.slice(0, ladingAreaElement.style.width.length - 2));
const height = Number(ladingAreaElement.style.height.slice(0, ladingAreaElement.style.height.length - 2));
const topp = Number(ladingAreaElement.style.top.slice(0, ladingAreaElement.style.top.length - 2));
const left = Number(ladingAreaElement.style.left.slice(0, ladingAreaElement.style.left.length - 2));
function placeRect() {
    if (!selectedElement) {
        return;
    }

    selectedElement.style.top = `${getRandomNumber(topp, topp + height)}px`;
    selectedElement.style.left = `${getRandomNumber(left, left + width)}px`;

    moved++;

    selectedElement = null;

    if (count === moved) {
        alert("WIN");
    }
}
function getRandomColor() {
    return `rgb(${getRandomNumber(0, 256)}, ${getRandomNumber(0, 256)},${getRandomNumber(0, 256)})`;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}