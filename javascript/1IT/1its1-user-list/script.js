let users = [];

const userTableElement = document.getElementById('userTable');

seedUsers(users, 100);

displayUsersInTable(users, userTableElement);

console.log(users);
function seedUsers(users, count) {
    for (let i = 0; i < count; i++) {
        const company = new Company(i, 'Lego');
        const user = new User(i, 'Joe', 'Doe', 'email@emai.cz', '200 100 400', 20,
            company);

        users.push(user);
    }
}

function displayUsersInTable(users, table) {
    const tbodyElement = table.querySelector('tbody');
    tbodyElement.innerHTML = '';

    users.forEach(user => {
        const row = `<tr onclick="deleteUser(${user.id})" id = "${user.id}">
        <td>
           [${user.id}] ${user.firstName} ${user.surname}
        </td>
        <td>
            ${user.age}
        </td>
        <td>
        ${user.phone}
        </td>
        <td>
        ${user.email}
        </td>
        <td>
        ${user.company.name}
        </td>
    </tr>`;


        tbodyElement.innerHTML += row;
    });

    console.log(tbodyElement)
}

function deleteUser(userId) {
    users = users.filter(user => user.userId !== userId);

    const rowElement = document.getElementById(userId);
    rowElement.remove();
}