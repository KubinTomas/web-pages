const companies = [
    new Company(1, 'Alza'),
    new Company(2, 'CZC'),
    new Company(3, 'StribrnikyBazos')
];


let users = [];
const users2 = [];

seedUsers(users, 100);

function seedUsers(users, count) {
    for (let i = 0; i < count; i++) {
        const user = new User(i, 'Joe', 'Doe', 'email@email.cz', '870 722 143', 20, companies[1]);

        users.push(user);
    }
}

const userTable = document.getElementById('users');

displayUsersInTable(userTable, users);
function displayUsersInTable(userTable, users) {
    const tableBodyElement = userTable.querySelector('tbody');
    tableBodyElement.innerHTML = '';


    users.forEach(user => {
        tableBodyElement.innerHTML += `
        <tr id="${user.id}">
            <td>${user.id}</td>
            <td>${user.firstName} ${user.lastName}</td>
            <td>
                <span>${user.email}</span><br>
                <span>${user.phone}</span>
            </td>
            <td>${user.company.name}</td>
            <td onclick="deleteUser(${user.id}, this.parentElement)">SMAZAT</td>
        </tr>
        `;
    });
}

function deleteUser(id, row) {
    users = users.filter(user => user.id !== id);
    row.remove();
}

console.log(users);