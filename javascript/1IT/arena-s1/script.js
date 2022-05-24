const warrior1 = new Warrior('Definitely Not Filipes Maximus VI', 100, 40, 100);
const warrior2 = new Warrior('Some random IT class', 1000, 103, 10);

const warriors = [];


let counter = 0;
while (warrior1.isAlive() && warrior2.isAlive() && counter < 200) {

    setTimeout(() => {
        warrior1.attack(warrior2);

        if (warrior2.isAlive()) {
            warrior2.attack(warrior1);
        }

        console.log(warrior1.status());
        console.log(warrior2.status());

        console.log('      -------       ');
    }, 1000 * counter);

    counter++;
}
console.log('END WHILE');

