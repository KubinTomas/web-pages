class User {
    firstName;
    lastName;
    age;

    constructor(firstName, lastName, age = 18) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    hello() {
        console.log(`${this.firstName} ${this.lastName}, age: ${this.age}`);
    }

    growOlder() {
        this.age++;
    }

    move() {

    }
}

export class T {

}