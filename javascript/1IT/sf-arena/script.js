const hero = {
    name: 'Vrata',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQlD_x-dUkXtRlUjnpy5tiWDU004hp52z5Iw&usqp=CAU',
    dmg: 18,
    def: 5,
    hp: 200
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
    document.getElementById('hero-dmg').innerHTML = hero.dmg;
    document.getElementById('hero-def').innerHTML = hero.def;
    document.getElementById('hero-hp').innerHTML = hero.hp;
}


showEnemy();
function showEnemy() {
    const enemy = enemies[0];

    document.getElementById('enemy-name').innerHTML = enemy.name;
    document.getElementById('enemy-img').src = enemy.img;
    document.getElementById('enemy-dmg').innerHTML = enemy.dmg;
    document.getElementById('enemy-def').innerHTML = enemy.def;
    document.getElementById('enemy-hp').innerHTML = enemy.hp;
}

function fight() {
    const enemy = enemies[0];

    while (hero.hp > 0 && enemy.hp > 0) {
        enemy.hp = enemy.hp - hero.dmg + enemy.def;

        if (enemy.hp > 0) {
            hero.hp = hero.hp + hero.def - enemy.dmg;
        }
    }

    if (hero.hp <= 0) {
        alert('hrdina umrel');
    }

    showHero();

    if (enemy.hp <= 0) {
        enemies.splice(0, 1);

        if (enemies.length === 0) {
            alert('Hrdina vyhral');
        } else {
            showEnemy();
        }
    }

}

setInterval(() => {
    const imgElement = document.createElement('img');
    imgElement.src = 'https://e7.pngegg.com/pngimages/237/536/png-clipart-potion-computer-icons-potion-miscellaneous-game-thumbnail.png';
    imgElement.style.position = 'absolute';
    imgElement.style.top = `${getRndInteger(20, 800)}px`;
    imgElement.style.left = `${getRndInteger(20, 800)}px`;

    // `${getRndInteger(20, 800)}px`; -> getRndInteger(20, 800) + "px";

    imgElement.addEventListener('click', () => {
        hero.hp += 20;
        showHero();

        imgElement.remove();
    });

    document.body.appendChild(imgElement);

    setTimeout(() => {
        imgElement.remove();

    }, 2000)

}, 5000);

// w3schools random javascript, uplne dole
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// [] - pope, {} - objekt