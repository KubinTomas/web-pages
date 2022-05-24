const user = new User('Petr', 'Novak');
const user2 = new User('Joe', 'Doe', 200);

const users = [user, user2];

for (let i = 0; i < users.length; i++) {
    const user = users[i];
    user.firstName = 'XXXXXXXXXXX';
}

users.forEach(user => {
    user.hello();
});

user.hello();
user.growOlder();
user.growOlder();
user.growOlder();
user.hello();

User.prototype.reborn = function () {
    this.age = 1;
}

user.reborn();
user.hello();

Date.prototype.aktualniCasVeFormatuNEJAKEM = function () {
    const now = new Date();

    return now.getFullYear() + 'nesmysl neco' + 'asdasd';
}

console.log(new Date().aktualniCasVeFormatuNEJAKEM());

// udelejte tridu AUTO s property palivo, kapacita nadrze, spotreba, ujeta vzdalenost
// metoda jet, dolij palivo a dalsi co uznate za vhodne