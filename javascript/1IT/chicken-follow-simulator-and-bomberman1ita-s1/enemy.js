const enemies = [];

function createEnemy() {
    const enemyElement = document.createElement('div');

    enemyElement.style.width = '68.9px';
    enemyElement.style.height = '68.9px';
    enemyElement.style.backgroundColor = 'darkred';
    enemyElement.style.borderRadius = '7.5px';

    enemyElement.style.position = 'absolute';
    enemyElement.style.top = `${getRandomNumber(0, 1000)}px`;
    enemyElement.style.left = `${getRandomNumber(0, 2000)}px`;

    document.body.appendChild(enemyElement);

    return enemyElement;
}

setInterval(() => {
    if (enemies.length < 20) {
        enemies.push(createEnemy());
    }
}, 1000);

setInterval(() => {
    moveEnemiesToPlayer();
}, 10);

function moveEnemiesToPlayer() {
    enemies.forEach(enemy => {
        const enemyTop = Number(enemy.style.top.slice(0, enemy.style.top.length - 2));
        const playerTop = Number(player.style.top.slice(0, player.style.top.length - 2));

        const enemyleft = Number(enemy.style.left.slice(0, enemy.style.left.length - 2));
        const playerleft = Number(player.style.left.slice(0, player.style.left.length - 2));
        moveEnemyVertical(enemy, enemyTop > playerTop ? -1 : 1);
        moveEnemyHorizontal(enemy, enemyleft > playerleft ? -1 : 1);
    });
}

function moveEnemyVertical(enemy, direction) {
    enemy.style.top = Number(enemy.style.top.slice(0, enemy.style.top.length - 2)) + direction * 1 + 'px';
}

function moveEnemyHorizontal(enemy, direction) {
    enemy.style.left = Number(enemy.style.left.slice(0, enemy.style.left.length - 2)) + direction * 1 + 'px';
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}