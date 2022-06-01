let users = [];


function seedUsers(users, count) {
    for (let i = 0; i < count; i++) {

        const company = new Company(1, 'Alza vs CZC');
        const user = new UserModel(i, 'Joe', 'Doe', 'email@email.cz', '333 222 111', 223, company);

        users.push(user);
    }
}