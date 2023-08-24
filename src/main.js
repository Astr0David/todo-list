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

export function renderTasks() {
    const navButtons = document.querySelectorAll('.nav-buttons');
    let activeNavButton = null;

    for (const button of navButtons) {
        if (button.classList.contains('active')) {
            activeNavButton = button;
            break;
        }
    }

    const dataListId = activeNavButton.getAttribute('data-list-id');

    const todoList = getTodoListById(dataListId);
    if (!todoList) {
        console.error('Todo list not found');
        return;
    }

    todoList.todos.forEach(todo => {
        createTask(todo.title, todo.dueDate, todo.description, todo.priority);
    });

    const tasks = document.getElementsByClassName('each-task-section-top');
    for (const task of tasks) {
        task.addEventListener('click', function () {
            const taskParent = task.parentNode;
            const taskbot = taskParent.querySelector('.each-task-section-bot');
            const computedStyle = getComputedStyle(taskbot);
            if (computedStyle.display === 'none') {
                taskbot.style.display = 'flex';
            } else if (computedStyle.display === 'flex') {
                taskbot.style.display = 'none';
            }
        })
    }
}

function createTask(taskTitle, dueDate, description, priority) {
    const taskContainer = document.querySelector('.todo-section')

    const taskDiv = document.createElement("div");
    taskDiv.className = "task-container";

    const taskSectionTop = document.createElement("div");
    taskSectionTop.className = "each-task-section-top";


    const taskLeft = document.createElement("div");
    taskLeft.className = "task-left";

    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.addEventListener('click', (event) => {
        event.stopPropagation();
        event.stopImmediatePropagation(); 
    })
    taskLeft.appendChild(taskCheckbox);

    const taskTitleP = document.createElement("p");
    taskTitleP.id = "tasktitle";
    taskTitleP.textContent = taskTitle;
    taskLeft.appendChild(taskTitleP);

    taskSectionTop.appendChild(taskLeft);

    const taskRight = document.createElement("div");
    taskRight.className = "task-right";

    const editIcon = document.createElement("i");
    editIcon.className = "fa-regular fa-pen-to-square task-icons";
    editIcon.title = "Edit task";
    taskRight.appendChild(editIcon);

    const priorityIcon = document.createElement("i");
    priorityIcon.className = "fa-solid fa-flag task-icons";
    priorityIcon.title = "Change priority";
    taskRight.appendChild(priorityIcon);

    const moveIcon = document.createElement("i");
    moveIcon.className = "fa-regular fa-square-caret-up task-icons";
    moveIcon.title = "Move list";
    taskRight.appendChild(moveIcon);

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can task-icons";
    deleteIcon.title = "Delete task";
    taskRight.appendChild(deleteIcon);

    taskSectionTop.appendChild(taskRight);
    taskDiv.appendChild(taskSectionTop);

    const taskSectionBot = document.createElement("div");
    taskSectionBot.className = "each-task-section-bot";

    const botLeft = document.createElement("div");
    botLeft.className = "bot-left";

    const leftTop = document.createElement("div");
    leftTop.className = "left-top";

    const titleBolden = document.createElement("p");
    titleBolden.className = "bolden";
    titleBolden.textContent = "Title:";
    leftTop.appendChild(titleBolden);

    const titleP = document.createElement("p");
    titleP.textContent = taskTitle;
    titleP.setAttribute('id','long')
    leftTop.appendChild(titleP);

    botLeft.appendChild(leftTop);

    const leftBot = document.createElement("div");
    leftBot.className = "left-bot";

    const dueDateBolden = document.createElement("p");
    dueDateBolden.className = "bolden";
    dueDateBolden.textContent = "Due date:";
    leftBot.appendChild(dueDateBolden);

    const dueDateP = document.createElement("p");
    dueDateP.textContent = dueDate;
    leftBot.appendChild(dueDateP);

    botLeft.appendChild(leftBot);
    taskSectionBot.appendChild(botLeft);

    const botRight = document.createElement("div");
    botRight.className = "bot-right";

    const rightTop = document.createElement("div");
    rightTop.className = "right-top";

    const descriptionBolden = document.createElement("p");
    descriptionBolden.className = "bolden";
    descriptionBolden.textContent = "Description:";
    rightTop.appendChild(descriptionBolden);

    const descriptionP = document.createElement("p");
    descriptionP.textContent = description;
    descriptionP.setAttribute('id', 'long')
    rightTop.appendChild(descriptionP);

    botRight.appendChild(rightTop);

    const rightBot = document.createElement("div");
    rightBot.className = "right-bot";

    const priorityBolden = document.createElement("p");
    priorityBolden.className = "bolden";
    priorityBolden.textContent = "Priority:";
    rightBot.appendChild(priorityBolden);

    const priorityP = document.createElement("p");
    priorityP.textContent = priority;
    rightBot.appendChild(priorityP);

    botRight.appendChild(rightBot);
    taskSectionBot.appendChild(botRight);
    taskDiv.appendChild(taskSectionBot);

    taskContainer.appendChild(taskDiv);
}

export default function initialiseMain(id) {
    createMain(id);
}