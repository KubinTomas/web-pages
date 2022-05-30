let users = [];

seedUsers(users, 100);
function seedUsers(users, count) {
    for (let i = 0; i < count; i++) {

        const company = new Company(1, 'Alza s.r.o.');

        const user = new User(i, 'Joe', 'Doe', 'email@az.cz', '444 000 222', 22, company);

        users.push(user);
    }
}

const userTable = document.getElementById('user-table');
displayUsersInTable(users, userTable);

function displayUsersInTable(users, table) {
    const tableBody = table.querySelector('tbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        tableBody.innerHTML += `
        <tr  id="${user.id}">
            <td>${user.id}</td>
            <td>${user.firstName} ${user.lastName}</td>
            <td>
                <span>${user.email}</span><br>
                <span>${user.phone}</span>
            </td>
            <td>${user.company.name}</td>
            <td>
                <span onclick="deleteUser(${user.id}, this.parentElement.parentElement)">SMAZAT</span>
            </td>
        </tr>
        `;
    });
}

function deleteUser(userId, row) {
    users = users.filter(user => user.id !== userId);
    row.remove();
}

console.log(users);