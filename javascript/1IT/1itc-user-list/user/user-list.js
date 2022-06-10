let users = [];

seedUsers(users, 100);
function seedUsers(users, count) {
    for (let i = 0; i < count; i++) {

        const company = new CompanyModel(1, 'Alza vs CZC');
        const user = new UserModel(i, 'Joe', 'Doe', 'email@email.cz', '333 222 111', 223, company);

        users.push(user);
    }
}

const userTableElement = document.getElementById('userTable');

displayUsersInTable(users, userTableElement);
function displayUsersInTable(users, table) {
    const tableBodyElement = table.querySelector('tbody');
    tableBodyElement.innerHTML = '';

    users.forEach(user => {
        tableBodyElement.innerHTML += `
        <tr  id="${user.id}">
            <td>${user.id}</td>
            <td>${user.firstName} ${user.lastName}</td>
            <td>
                <span>${user.email}</span><br>
                <span>${user.phone}</span>
            </td>
            <td>${user.age}</td>
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