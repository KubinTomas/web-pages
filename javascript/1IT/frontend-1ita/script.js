const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
        console.log(JSON.parse(this.responseText));
        const users = JSON.parse(this.responseText);

        displayUsers(users);
    }
}
xhttp.open('GET', 'http://localhost:3000/users', true);
xhttp.setRequestHeader("Content-type", "application/json");
xhttp.send();

function displayUsers(users) {
    const ulElement = document.createElement('ul');

    users.forEach(user => {
        const liElement = document.createElement('li');
        liElement.innerHTML = user.name;
        ulElement.appendChild(liElement);
    });

    document.body.appendChild(ulElement);
}

$.ajax({
    url: 'http://localhost:3000/users',
    type: 'GET',
    dataType: 'json',
    success: function (res) {
        console.log(res);
    }
});