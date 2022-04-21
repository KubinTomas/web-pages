
const obstacles = [];
const player = createPlayer();
const teleportationDistance = 10;

function createPlayer() {
    const playerElement = document.createElement('div');
    playerElement.id = 'player';
    playerElement.style.top = '500px';

    document.body.appendChild(playerElement);

    return playerElement;
}

// direction +1, move player down, -1 move player up
function movePlayerVertical(direction) {
    const length = player.style.top.length;
    player.style.top = Number(player.style.top.slice(0, length - 2)) + direction * teleportationDistance + 'px';
}


document.addEventListener('keydown', (ev) => {
    console.log(ev.code === 'KeyW');
    const direction = ev.code === 'KeyW' ? -1 : (ev.code === 'KeyS' ? 1 : 0);

    movePlayerVertical(direction);
});



setInterval(() => {
    const obstalce = spawnObstacle();
    obstacles.push(obstalce);
}, 500);

setInterval(() => {
    moveObstacles();
}, 100)

function moveObstacles() {
    obstacles.forEach(obstacle => {
        const length = obstacle.style.right.length;
        obstacle.style.right = Number(obstacle.style.right.slice(0, length - 2)) + 20 + 'px';
    });
}

function spawnObstacle() {
    const obstacleElement = document.createElement('div');
    obstacleElement.style.position = 'absolute';
    obstacleElement.style.backgroundColor = 'black';
    obstacleElement.style.width = `${getRandomNumber(20, 60)}px`;
    obstacleElement.style.height = `${getRandomNumber(50, 120)}px`;
    obstacleElement.classList.add('obstacle');

    obstacleElement.style.top = `${getRandomNumber(0, 1000)}px`;
    obstacleElement.style.right = `${getRandomNumber(800, 1800)}px`;

    document.body.appendChild(obstacleElement);

    return obstacleElement;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}