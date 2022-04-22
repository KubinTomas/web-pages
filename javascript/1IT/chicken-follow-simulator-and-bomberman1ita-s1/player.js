const player = createPlayer();
const playerSpeed = 1;

let pressedKeys = [];

function createPlayer() {
    const playerElement = document.createElement('div');
    playerElement.id = 'player';
    playerElement.style.width = '50px';
    playerElement.style.height = '50px';
    playerElement.style.backgroundColor = 'purple';
    playerElement.style.borderRadius = '7.5px';

    playerElement.style.position = 'absolute';
    playerElement.style.top = '500px';
    playerElement.style.left = '500px';

    document.body.appendChild(playerElement);

    return playerElement;
}
// KeyW, KeyS
function movePlayer(pressedKey) {
    if (pressedKey === 'KeyW') {
        movePlayerVertical(-1);
    }

    if (pressedKey === 'KeyS') {
        movePlayerVertical(1);
    }
    if (pressedKey === 'KeyA') {
        movePlayerHorizontal(-1);
    }

    if (pressedKey === 'KeyD') {
        movePlayerHorizontal(1);
    }
}
//  0123
// '50px'.slice(0,2) -> 50
function movePlayerVertical(direction) {
    player.style.top = Number(player.style.top.slice(0, player.style.top.length - 2)) + direction * playerSpeed + 'px';
}

function movePlayerHorizontal(direction) {
    player.style.left = Number(player.style.left.slice(0, player.style.left.length - 2)) + direction * playerSpeed + 'px';
}

setInterval(() => {
    pressedKeys.forEach(key => {
        movePlayer(key);
    });
}, 2);

document.addEventListener('keydown', (ev) => {
    // movePlayer(ev.code);
});


document.addEventListener('keypress', (ev) => {
    if (!pressedKeys.includes(ev.code)) {
        pressedKeys.push(ev.code);
    }
});


document.addEventListener('keyup', (ev) => {
    pressedKeys = pressedKeys.filter(c => c != ev.code);
});
