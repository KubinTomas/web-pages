const hero = {
    name: 'Arnold Von Mraky',
    hp: 420,
    dmg: 18,
    def: 5,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlD_x-dUkXtRlUjnpy5tiWDU004hp52z5Iw&usqp=CAU'
};

const enemies = [
    {
        name: 'Zly Vratislavino XVI',
        img: 'https://media.discordapp.net/attachments/885781812826230784/954307456094330900/vratislavino.png?width=550&height=676',
        hp: 120,
        dmg: 18,
        def: 6
    },
    {
        name: 'Baba Jaga',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-kSEQtZ6fywiP_89SvuniSxNLfSqaf6pgNdQK8jrBYudJr6VaJ8gLYMnOh2imkXygcnY&usqp=CAU',
        hp: 120,
        dmg: 18,
        def: 6
    },

];

showHero();

function showHero() {
    document.getElementById('hero-name').innerHTML = hero.name;
    document.getElementById('hero-img').src = hero.img;
    document.getElementById('hero-hp').innerHTML = 'HP: ' + hero.hp;
    document.getElementById('hero-dmg').innerHTML = 'DMG: ' + hero.dmg;
    document.getElementById('hero-def').innerHTML = 'DEF: ' + hero.def;
}

showEnemy();
function showEnemy() {

    if (enemies.length == 0) {
        alert('Hrdina vyhral');
        return;
    }

    const enemy = enemies[0];

    document.getElementById('enemy-name').innerHTML = enemy.name;
    document.getElementById('enemy-img').src = enemy.img;
    document.getElementById('enemy-hp').innerHTML = 'HP: ' + enemy.hp;
    document.getElementById('enemy-dmg').innerHTML = 'DMG: ' + enemy.dmg;
    document.getElementById('enemy-def').innerHTML = 'DEF: ' + enemy.def;
}

function fight() {
    const enemy = enemies[0];

    while (hero.hp > 0 && enemy.hp > 0) {
        enemy.hp = enemy.hp - hero.dmg + enemy.def;

        if (enemy.hp > 0) {
            hero.hp = hero.hp - enemy.dmg + hero.def;
        }
    }

    if (enemy.hp <= 0) {
        enemies.splice(0, 1);
        showEnemy();
    }

    showHero();

    if (hero.hp <= 0) {
        alert('Hrdina prohral');
    }
}

setInterval(() => {
    const img = document.createElement('img');
    img.src = 'https://e7.pngegg.com/pngimages/237/536/png-clipart-potion-computer-icons-potion-miscellaneous-game-thumbnail.png';
    img.style.position = 'absolute';
    img.style.top = '600px';
    img.style.left = '200px';

    img.addEventListener('click', () => {
        hero.hp += 10;
        showHero();
        document.body.removeChild(img);
    });

    document.body.appendChild(img);

}, 5000);