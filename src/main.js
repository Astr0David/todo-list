import { TodoList, Todo, saveTodoLists, getTodoLists, getTodoListById, findTodoById, getUsedIds, saveUsedIds } from "./app";

function createMain(id) {
    const mainArea = document.querySelector('.main-area');
    if (mainArea) {
        mainArea.remove();
    }

    const main = document.createElement('div');
    main.classList.add('main-area');

    const mainChild = document.createElement('div');
    mainChild.classList.add('main-child');

    const todoList = getTodoListById(id);

    const title = document.createElement('div');
    title.classList.add('title');

    const h1 = document.createElement('p');
    h1.classList.add('todo-title');
    h1.textContent = '';
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

    const taskContainer = document.querySelector('.todo-section');
    taskContainer.innerHTML = '';

    const todoLists = getTodoLists();
    let todosToRender = [];

    if (dataListId === '111111') {
        const today = new Date().toISOString().substr(0, 10);
        todosToRender = todoLists.flatMap(todoList =>
            todoList.todos.filter(todo => todo.dueDate === today)
        );
    } else if (dataListId === '222222') {
        const nextWeek = new Date();
        nextWeek.setDate(nextWeek.getDate() + 7);
        const nextWeekFormatted = nextWeek.toISOString().substr(0, 10);
        todosToRender = todoLists.flatMap(todoList =>
            todoList.todos.filter(
                todo =>
                    todo.dueDate <= nextWeekFormatted && todo.dueDate >= new Date().toISOString().substr(0, 10)
            )
        );
    } else if (dataListId === '333333') {
        todosToRender = todoLists.flatMap(todoList => todoList.todos);
    } else if (dataListId === '444444') {
        todosToRender = todoLists.flatMap(todoList =>
            todoList.todos.filter(todo => todo.priority === 'high')
        );
    } else {
        const selectedDataListId = activeNavButton.getAttribute('data-list-id');
        todosToRender = getTodoListById(selectedDataListId)?.todos || [];
    }

    todosToRender.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    todosToRender.forEach(todo => {
        createTask(todo.title, todo.dueDate, todo.description, todo.priority, todo.id);
    });

    const mainChild = document.querySelector('.main-child');
    const tasks = mainChild.getElementsByClassName('each-task-section-top');
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

    const generatedBins = document.getElementsByClassName('task-deleter');
    for (const bin of generatedBins) {
        bin.addEventListener('click', function (event) {
            event.stopPropagation()
            const listId = bin.getAttribute('data-list-id');
            deleteTaskPopup(() => deleteTask(listId));
        });
    }

    const edits = document.getElementsByClassName('task-editor');
    for (const editor of edits) {
        editor.addEventListener('click', function (event) {
            event.stopPropagation()
            const todo = findTodoById(editor.getAttribute('data-list-id'));
            editTaskPopup(todo.title, todo.description, todo.dueDate, todo.priority, todo.id)
            const todoLists = getTodoLists();
            createListOptions(todoLists, dataListId);
        })
    }

    const priorityIcons = document.querySelectorAll('.task-priority');
    priorityIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            event.stopPropagation()
            const todoId = icon.getAttribute('data-list-id');
            const existingTodo = findTodoById(todoId)

            const todoPriority = existingTodo.priority

            let newPriority;
            if (todoPriority === 'low') {
                newPriority = 'medium';
            } else if (todoPriority === 'medium') {
                newPriority = 'high';
            } else if (todoPriority === 'high') {
                newPriority = 'low';
            }

            if (existingTodo) {
                deleteTask(existingTodo.id)

                const updatedTodo = new Todo(
                    existingTodo.title,
                    existingTodo.description,
                    existingTodo.dueDate,
                    newPriority,
                    existingTodo.id
                );

                addTodoToTodoList(dataListId, updatedTodo);
                saveTodoLists(getTodoLists());

                ;
                renderTasks()
            }
        });
    });
}

function changePriority() {

}

function createTask(taskTitle, dueDate, description, priority, id) {
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
    editIcon.className = "fa-regular fa-pen-to-square task-icons task-editor";
    editIcon.setAttribute('data-list-id', id)
    editIcon.title = "Edit task";
    taskRight.appendChild(editIcon);

    const priorityIcon = document.createElement("i");
    priorityIcon.className = "fa-solid fa-flag task-icons task-priority";
    priorityIcon.setAttribute('data-list-id', id);
    priorityIcon.title = "Change priority";
    priorityIcon.style.color = (priority === 'high') ? 'red' : (priority === 'medium') ? 'darkorange' : 'teal';

    taskRight.appendChild(priorityIcon);

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash-can task-icons task-deleter";
    deleteIcon.setAttribute('data-list-id', id)
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
    titleP.setAttribute('id', 'long')
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

function editTaskPopup(title, description, date, priority, id) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay3';

    const popup = document.createElement('div');
    popup.className = 'popup3';

    const popupTop = document.createElement('div');
    popupTop.className = 'popup-top3';

    const titleText = document.createElement('p');
    titleText.textContent = 'Edit Task';
    popupTop.appendChild(titleText);

    const closeButton = document.createElement('i');
    closeButton.className = 'fa-solid fa-xmark';
    closeButton.addEventListener('click', closeOverlay);
    popupTop.appendChild(closeButton);

    popup.appendChild(popupTop);

    const popupMid = document.createElement('div');
    popupMid.className = 'popup-mid3';

    const midLeft = document.createElement('div');
    midLeft.className = 'mid-left';

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    midLeft.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.maxLength = 60;
    titleInput.id = 'task-title';
    titleInput.required = true;
    titleInput.value = title;
    midLeft.appendChild(titleInput);

    const titleAlert = document.createElement('p');
    titleAlert.classList.add('title-alert');
    titleAlert.textContent = 'Title is required.';
    titleAlert.style.color = 'red';
    titleAlert.style.marginTop = '';
    titleAlert.style.display = 'none';
    midLeft.appendChild(titleAlert)

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    midLeft.appendChild(descriptionLabel);

    const descriptionTextarea = document.createElement('textarea');
    descriptionTextarea.id = 'description';
    descriptionTextarea.cols = 30;
    descriptionTextarea.rows = 4;
    descriptionTextarea.maxLength = 180;
    descriptionTextarea.value = description;
    midLeft.appendChild(descriptionTextarea);

    popupMid.appendChild(midLeft);

    const midRight = document.createElement('div');
    midRight.className = 'mid-right';

    const dateLabel = document.createElement('label');
    dateLabel.textContent = 'Due date:';
    midRight.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.id = 'task-date';
    dateInput.required = true;
    dateInput.value = date;
    midRight.appendChild(dateInput);

    const dateAlert = document.createElement('p');
    dateAlert.classList.add('date-alert');
    dateAlert.textContent = 'Date is required.';
    dateAlert.style.color = 'red';
    dateAlert.style.marginTop = '';
    dateAlert.style.display = 'none';

    midRight.appendChild(dateAlert);

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    midRight.appendChild(priorityLabel);

    const prioritySelect = document.createElement('select');
    prioritySelect.id = 'priority';
    prioritySelect.required = true;
    ['Low', 'Medium', 'High'].forEach(priorityText => {
        const option = document.createElement('option');
        option.value = priorityText.toLowerCase();
        option.textContent = priorityText;
        if (priorityText.toLowerCase() === priority) {
            option.selected = true;
        }
        prioritySelect.appendChild(option);
    });
    midRight.appendChild(prioritySelect);

    const priorityAlert = document.createElement('p');
    priorityAlert.classList.add('priority-alert');
    priorityAlert.textContent = 'Priority is required.';
    priorityAlert.style.color = 'red';
    priorityAlert.style.marginTop = '';
    priorityAlert.style.display = 'none';

    midRight.appendChild(priorityAlert);

    const listLabel = document.createElement('label');
    listLabel.textContent = 'List:';
    midRight.appendChild(listLabel);

    const listSelect = document.createElement('select');
    listSelect.id = 'thelist';
    listSelect.required = true;

    midRight.appendChild(listSelect);

    const listAlert = document.createElement('p');
    listAlert.classList.add('list-alert');
    listAlert.textContent = 'List is required.';
    listAlert.style.color = 'red';
    listAlert.style.marginTop = '';
    listAlert.style.display = 'none';

    midRight.appendChild(listAlert);

    popupMid.appendChild(midRight);

    popup.appendChild(popupMid);

    const popupBot = document.createElement('div');
    popupBot.className = 'popup-bot3';

    const textCloseButton = document.createElement('button');
    textCloseButton.id = 'close';
    textCloseButton.textContent = 'Close';
    textCloseButton.addEventListener('click', closeOverlay);
    popupBot.appendChild(textCloseButton);

    const addTaskButton = document.createElement('button');
    addTaskButton.id = 'edittask';
    addTaskButton.textContent = 'Edit Task';
    addTaskButton.addEventListener('click', function () {
        validateAndEditTask(id);
    })
    popupBot.appendChild(addTaskButton);

    popup.appendChild(popupBot);

    overlay.appendChild(popup);

    const mainContent = document.getElementById('content');
    mainContent.appendChild(overlay);
}

function closeOverlay() {
    const overlay = document.querySelector('.overlay3');
    overlay.remove()
}

function deleteTaskPopup(confirmCallback) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay2';

    const popup = document.createElement('div');
    popup.className = 'popup2';

    const popupTop = document.createElement('div');
    popupTop.className = 'popup-top2';

    const triangleIcon = document.createElement('i');
    triangleIcon.className = 'fa-solid fa-triangle-exclamation';

    const popupMessage = document.createElement('p');
    popupMessage.textContent = 'Are you sure you want to delete this task?';

    const popupBot = document.createElement('div');
    popupBot.className = 'popup-bot2';

    const closeButton = document.createElement('button');
    closeButton.id = 'close';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function () {
        closeOverlay2()
    });

    const confirmButton = document.createElement('button');
    confirmButton.id = 'deletetask';
    confirmButton.textContent = 'Confirm';
    confirmButton.addEventListener('click', () => {
        confirmCallback();
        closeOverlay2();
    });

    popupTop.appendChild(triangleIcon);
    popupTop.appendChild(popupMessage);

    popupBot.appendChild(closeButton);
    popupBot.appendChild(confirmButton);

    popup.appendChild(popupTop);
    popup.appendChild(popupBot);

    overlay.appendChild(popup);

    const mainContent = document.getElementById('content');
    mainContent.appendChild(overlay);
}

function deleteTask(todoId) {
    const todoLists = getTodoLists();
    const usedIds = getUsedIds();

    for (const todoList of todoLists) {
        const todoIndex = todoList.todos.findIndex(todo => todo.id === todoId);
        if (todoIndex !== -1) {
            todoList.todos.splice(todoIndex, 1);
            saveTodoLists(todoLists);

            const idIndex = usedIds.indexOf(todoId);
            if (idIndex !== -1) {
                usedIds.splice(idIndex, 1);
                saveUsedIds(usedIds);
            }

            renderTasks()
            return;
        }
    }

    console.error('Todo not found');
}

function closeOverlay2() {
    const overlay = document.querySelector('.overlay2');
    overlay.remove()
}

function validateAndEditTask(id) {
    const titleInput = document.getElementById('task-title');
    const dateInput = document.getElementById('task-date');
    const prioritySelect = document.getElementById('priority');
    const listSelect = document.getElementById('thelist');

    const titleAlert = document.querySelector('.title-alert');
    const dateAlert = document.querySelector('.date-alert');
    const priorityAlert = document.querySelector('.priority-alert');
    const listAlert = document.querySelector('.list-alert');

    let isValid = true;

    if (titleInput.value === '') {
        titleAlert.style.display = 'block';
        isValid = false;
    } else {
        titleAlert.style.display = 'none';
    }

    if (dateInput.value === '') {
        dateAlert.style.display = 'block';
        isValid = false;
    } else {
        dateAlert.style.display = 'none';
    }

    if (prioritySelect.value === '') {
        priorityAlert.style.display = 'block';
        isValid = false;
    } else {
        priorityAlert.style.display = 'none';
    }

    if (listSelect.value === '') {
        listAlert.style.display = 'block';
        isValid = false;
    } else {
        listAlert.style.display = 'none';
    }

    if (isValid) {
        const selectedValue = listSelect.value;
        const description = document.getElementById('description');

        deleteTask(id);

        const newTodo = new Todo(titleInput.value, description.value, dateInput.value, prioritySelect.value, id);

        addTodoToTodoList(selectedValue, newTodo);
        ;
        renderTasks()
        closeOverlay();
    }
}

function createListOptions(todoLists, listvalue) {
    const listSelect = document.getElementById('thelist');

    listSelect.innerHTML = '';
    const ignoreIds = ['111111', '222222', '333333', '444444']


    todoLists.forEach(list => {
        if (!ignoreIds.includes(list.id)) {
            const listOption = document.createElement('option');
            listOption.value = list.id;
            listOption.textContent = list.name;
            listSelect.appendChild(listOption);
        }
    });

    listSelect.value = listvalue;
}

function addTodoToTodoList(selectedValue, newTodo) {
    const originalTodoList = getTodoListById(selectedValue);

    if (!originalTodoList) {
        console.log("TodoList not found for the selected value.");
        return;
    }

    const updatedTodoList = new TodoList(originalTodoList.name, originalTodoList.id);

    updatedTodoList.todos = [...originalTodoList.todos, newTodo];

    const todoLists = getTodoLists();
    const updatedTodoLists = todoLists.map(todoList =>
        todoList.id === selectedValue ? updatedTodoList : todoList
    );

    localStorage.setItem('todoLists', JSON.stringify(updatedTodoLists));

    renderTasks()
        ;
}

export default function initialiseMain(id) {
    createMain(id);
    renderTasks()
}