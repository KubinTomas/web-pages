const user = new User('Joe', 'Doe');
const user2 = new User('Petr', 'Novak', 100);

user.firstName = 'xxxxxxxxxxxxxx';

user.age = 10;


user.hello();
user2.hello();

console.log(user);
console.log(user2);

const date = new Date();

Date.prototype.getFullYear = function () {
    return 'haha,broknul jsem to';
}

User.prototype.eat = function () {

}
