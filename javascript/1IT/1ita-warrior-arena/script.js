const warrior1 = new Warrior('Czc', 100, 20, 5);
const warrior2 = new Warrior('Alza', 150, 14, 5);

let counter = 0;
while (warrior1.isAlive() && warrior2.isAlive() && counter < 10000) {

    warrior1.attack(warrior2);

    if (warrior2.isAlive()) {
        warrior2.attack(warrior1);
    }

    counter++;
}

console.log(warrior1.isAlive(), warrior1.name);
console.log(warrior2.isAlive(), warrior2.name);