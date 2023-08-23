import { TodoList, Todo, saveTodoLists, getTodoLists, getTodoListById } from "./app";

function createMain(id) {
    const main = document.createElement('div');
    main.classList.add('main-area');
    
    const mainChild = document.createElement('div');
    mainChild.classList.add('main-child');

    const todoList = getTodoListById(id);

    const title = document.createElement('div');
    title.classList.add('title');

    const h1 = document.createElement('p');
    h1.classList.add('todo-title');
    h1.textContent = todoList.name;

    title.appendChild(h1);

    const todoSection = document.createElement('div');
    todoSection.classList.add('todo-section');

    mainChild.appendChild(title);
    mainChild.appendChild(todoSection);

    main.appendChild(mainChild);

    const parent = document.getElementById('main');
    parent.appendChild(main);
}



export default function initialiseMain(id) {
    createMain(id);
}