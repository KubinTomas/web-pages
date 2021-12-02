function onMoveRectangle() {
    const x = document.getElementById('xAxis').value;
    const y = document.getElementById('yAxis').value;

    moveRectangle(x, y);
}

function moveRectangle(x, y) {
    const rectElement = document.getElementById('rect');

    let rectTop = rectElement.style.top;
    console.log(rectTop);

    rectElement.style.top = (valueWithoutPixels(rectElement.style.top) + Number(y)) + 'px';
    rectElement.style.left = (valueWithoutPixels(rectElement.style.left) + Number(x)) + 'px';
}

function valueWithoutPixels(value) {
    return Number(value.substring(0, value.length - 2));

}

function teleportRectangle(x, y) {
    const rectElement = document.getElementById('rect');

    rectElement.style.top = y + 'px';
    rectElement.style.left = x + 'px';
}

function onMouseClick(event) {
    teleportRectangle(event.clientX, event.clientY);
}

document.addEventListener("click", onMouseClick);