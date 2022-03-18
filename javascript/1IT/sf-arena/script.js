const hero = {
    name: 'Vratislavino XVI',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlD_x-dUkXtRlUjnpy5tiWDU004hp52z5Iw&usqp=CAU',
    hp: 420,
    dmg: 15,
    def: 6
};

const enemies = [
    {
        name: 'Zly Vratislavino XVI',
        img: 'http://umpalumpove.cz/podzempic/p9/i.jpg',
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
    {
        name: 'Wea s 1ITCs',
        img: 'http://umpalumpove.cz/podzempic/p9/i.jpg',
        hp: 120,
        dmg: 18,
        def: 6
    },
];

showHero();

function showHero() {
    document.getElementById('hero-name').innerHTML = hero.name;
    document.getElementById('hero-hp').innerHTML = 'HP: ' + hero.hp;
    document.getElementById('hero-dmg').innerHTML = 'DMG: ' + hero.dmg;
    document.getElementById('hero-def').innerHTML = 'DEF: ' + hero.def;
    document.getElementById('hero-image').src = hero.img;
}

showEnemy();

function showEnemy() {

    if (enemies.length == 0) {
        alert('Hrac vyhral');

        return;
    }

    const enemy = enemies[0];

    document.getElementById('enemy-name').innerHTML = enemy.name;
    document.getElementById('enemy-hp').innerHTML = 'HP: ' + enemy.hp;
    document.getElementById('enemy-dmg').innerHTML = 'DMG: ' + enemy.dmg;
    document.getElementById('enemy-def').innerHTML = 'DEF: ' + enemy.def;
    document.getElementById('enemy-image').src = enemy.img;
}

// setTimeout(() => {
// ...
// }, 1000)
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

    if (hero.hp <= 0) {
        alert('Asi jsi umrel');
    }

    showHero();
}

setInterval(() => {
    console.log('SPAWN POTIONU');
    const img = document.createElement('img');
    img.src = 'https://e7.pngegg.com/pngimages/237/536/png-clipart-potion-computer-icons-potion-miscellaneous-game-thumbnail.png';
    img.style.position = 'absolute';
    img.style.top = '100px';
    img.style.left = '550px';

    img.addEventListener('click', () => {
        hero.hp += 1000;
        document.body.removeChild(img);
        showHero();
    });

    document.body.appendChild(img);
}, 5000);

