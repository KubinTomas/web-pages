const addTodoBtnElement = document.getElementById('addTodoBtn');
addTodoBtnElement.addEventListener('click', onAddTodoClick);

const todos = ['Nakoupit darky na vanoce', 'Dodelat ToDo list z hodiny', 'Nakoupit alkohol na silvestra', 'Zlit se', 'Rikat jak budeme makat', 'Prokrastinovat cely rok'];

const itemWrapperElement = document.getElementById('itemWrapper');
displayTodos();

function displayTodos() {
    todos.forEach(todo => {
        itemWrapperElement.appendChild(getTodoNode(todo));
    });
}

function getTodoNode(todo) {
    const todoElement = document.createElement('div');
    todoElement.classList.add('item');

    const titleElement = document.createElement('h3');
    titleElement.classList.add('text');
    titleElement.innerHTML = todo;

    todoElement.appendChild(titleElement);

    return todoElement;
}

function onAddTodoClick() {
    console.log('WORKING TODO');
}

// const onAddTodoClick2 = function(){}
// const onAddTodoClick3 = () => {}