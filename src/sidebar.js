import { TodoList, getTodoLists, saveTodoLists, logTodoListsToConsole, getUsedIds, saveUsedIds } from "./app.js"
import initialiseMain, { renderTasks } from "./main.js"

function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const sidebarMenu = document.createElement('div');
    sidebarMenu.classList.add('sidebar-menu');

    const menu = document.createElement('ul');
    menu.classList.add('menu');

    const inbox = createSidebarItem('inbox', 'fa-inbox', 'Inbox');
    inbox.setAttribute('data-list-id', '000000')
    inbox.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(inbox);
        initialiseMain(inbox.getAttribute('data-list-id'));
    });

    const today = createSidebarItem('today', 'fa-calendar-day', 'Today');
    today.setAttribute('data-list-id', '111111')
    today.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(today);
        initialiseMain(today.getAttribute('data-list-id'));
    });

    const upcoming = createSidebarItem('upcoming', 'fa-calendar-week', 'Upcoming');
    upcoming.setAttribute('data-list-id', '222222')
    upcoming.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(upcoming);
        initialiseMain(upcoming.getAttribute('data-list-id'));
    });

    const all = createSidebarItem('all', 'fa-calendar-days', 'All');
    all.setAttribute('data-list-id', '333333')
    all.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(all);
        initialiseMain(all.getAttribute('data-list-id'));
    });

    const important = createSidebarItem('important', 'fa-star', 'Important');
    important.setAttribute('data-list-id', '444444')
    important.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(important);
        initialiseMain(important.getAttribute('data-list-id'));
    });

    const lists = document.createElement('li');
    lists.classList.add('lists');
    lists.innerHTML = '<div><i class="fa-solid fa-list-check"></i> <p>Lists</p></div> <div><i class="fa-solid fa-chevron-up"></i></div>';
    lists.addEventListener("click", listClick);

    const accordion = document.createElement('div');
    accordion.classList.add('accordion');

    const newLists = document.createElement('div');
    newLists.classList.add('new-lists');

    const createNew = document.createElement('div');
    createNew.classList.add('create-new');
    createNew.innerHTML = '<i class="fa-solid fa-plus"></i> New List'
    createNew.addEventListener('click', function () {
        newListPopup();
    });

    accordion.appendChild(newLists);
    accordion.appendChild(createNew);

    menu.appendChild(inbox);
    menu.appendChild(today);
    menu.appendChild(upcoming);
    menu.appendChild(all);
    menu.appendChild(important);
    menu.appendChild(lists);
    menu.appendChild(accordion)

    sidebarMenu.appendChild(menu);

    sidebar.appendChild(sidebarMenu);

    const main = document.getElementById('main');
    main.appendChild(sidebar);
}

function createSidebarItem(className, iconClass, text) {
    const item = document.createElement('li');
    item.classList.add(className, 'nav-buttons');

    const itemContent = document.createElement('div');
    itemContent.innerHTML = `<i class="fa-solid ${iconClass}"></i> <p>${text}</p>`;

    item.appendChild(itemContent);

    return item;
}

function newListPopup() {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    const popup = document.createElement('div');
    popup.classList.add('popup');

    const popupTop = document.createElement('div');
    popupTop.classList.add('popup-top');

    const titleParagraph = document.createElement('p');
    titleParagraph.textContent = 'New List';

    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa-solid', 'fa-xmark');
    closeIcon.addEventListener('click', closeOverlay);

    popupTop.appendChild(titleParagraph);
    popupTop.appendChild(closeIcon);

    const popupMid = document.createElement('div');
    popupMid.classList.add('popup-mid');

    const inputParagraph = document.createElement('p');
    inputParagraph.textContent = 'Name (max 10 characters):';

    const input = document.createElement('input');
    input.setAttribute('id', 'newlistinput');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '10');
    input.setAttribute('required', true);

    const alertParagraph = document.createElement('p');
    alertParagraph.classList.add('alert');
    alertParagraph.textContent = 'List name is required.';
    alertParagraph.style.color = 'red';
    alertParagraph.style.marginTop = '.5rem';
    alertParagraph.style.display = 'none';

    popupMid.appendChild(inputParagraph);
    popupMid.appendChild(input);
    popupMid.appendChild(alertParagraph);

    const popupBot = document.createElement('div');
    popupBot.classList.add('popup-bot');

    const closeButton = document.createElement('button');
    closeButton.setAttribute('id', 'close');
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', closeOverlay)

    const addButton = document.createElement('button');
    addButton.setAttribute('id', 'addition');
    addButton.textContent = 'Add List';
    addButton.addEventListener('click', addNewList)

    popupBot.appendChild(closeButton);
    popupBot.appendChild(addButton);

    popup.appendChild(popupTop);
    popup.appendChild(popupMid);
    popup.appendChild(popupBot);

    overlay.appendChild(popup);

    const mainContent = document.getElementById('content');
    mainContent.appendChild(overlay);
}

function deleteListPopup(confirmCallback) {
    const overlay = document.createElement('div');
    overlay.className = 'overlay2';

    const popup = document.createElement('div');
    popup.className = 'popup2';

    const popupTop = document.createElement('div');
    popupTop.className = 'popup-top2';

    const triangleIcon = document.createElement('i');
    triangleIcon.className = 'fa-solid fa-triangle-exclamation';

    const popupMessage = document.createElement('p');
    popupMessage.textContent = 'Are you sure you want to delete this list?';

    const popupBot = document.createElement('div');
    popupBot.className = 'popup-bot2';

    const closeButton = document.createElement('button');
    closeButton.id = 'close';
    closeButton.textContent = 'Close';
    closeButton.addEventListener('click', function () {
        closeOverlay2()
    });

    const confirmButton = document.createElement('button');
    confirmButton.id = 'deletelist';
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

function closeOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.remove()
}

function deleteList(id) {
    const todoLists = getTodoLists();
    const usedIds = getUsedIds();

    const idIndex = usedIds.indexOf(id);
    if (idIndex !== -1) {
        usedIds.splice(idIndex, 1);
        saveUsedIds(usedIds);
    }

    const updatedTodoLists = todoLists.filter(list => list.id !== id);
    saveTodoLists(updatedTodoLists);

    renderTodoLists();

    const inbox = document.querySelector('.inbox');
    setActiveButton(inbox)
    initialiseMain('000000')
}

function closeOverlay2() {
    const overlay = document.querySelector('.overlay2');
    overlay.remove()
}

function newListItem(name, id) {
    const newListItem = document.createElement('div');
    newListItem.classList.add('nav-buttons', 'the-new-lists');
    newListItem.setAttribute("data-list-id", id);

    const newListItemChild = document.createElement('div');
    newListItemChild.innerHTML = `<i class="fa-solid fa-circle"></i>${name}</div>`;

    const newListItemChild2 = document.createElement('div');
    newListItemChild2.classList.add('trash');
    const theTrashIcon = document.createElement('i');
    theTrashIcon.classList.add('fa-regular', 'fa-trash-can', 'list-deleter');
    theTrashIcon.setAttribute("data-list-id", id);
    newListItemChild2.appendChild(theTrashIcon);

    newListItem.appendChild(newListItemChild);
    newListItem.appendChild(newListItemChild2);

    return newListItem
}

function renderTodoLists() {
    const todoLists = getTodoLists();
    const newLists = document.querySelector('.new-lists');

    newLists.innerHTML = '';

    const nonDefaultTodoLists = todoLists.filter(todoList => !isDefaultTodoList(todoList.id));

    nonDefaultTodoLists.forEach(todoList => {
        const listItem = newListItem(todoList.name, todoList.id);
        newLists.appendChild(listItem);
    });

    const title = document.querySelector('.todo-title');
    const titlecontent = title.textContent;



    const generatedDivs = document.getElementsByClassName("the-new-lists");
    for (const div of generatedDivs) {
        if (div.textContent === titlecontent) {
            setActiveButton(div)
        }
        const trashIcon = div.querySelector(".trash .fa-trash-can");
        div.addEventListener("mouseenter", () => {
            trashIcon.style.display = "block";
        });

        div.addEventListener("mouseleave", () => {
            trashIcon.style.display = "none";
        });

        div.addEventListener('click', function() {
            if (div.classList.contains("active")) return;
            setActiveButton(div);
            initialiseMain(div.getAttribute('data-list-id'))

        })
    }

    const accordion = document.querySelector('.accordion');
    const generatedBins = accordion.getElementsByClassName('list-deleter');
    for (const bin of generatedBins) {
        bin.addEventListener('click', function (event) {
            event.stopPropagation()
            const listId = bin.getAttribute('data-list-id');
            deleteListPopup(() => deleteList(listId));
        });
    }

}

function isDefaultTodoList(id) {
    const defaultTodoListIds = ["000000", "111111", "222222", "333333", "444444"];

    return defaultTodoListIds.includes(id);
}

function addNewList() {
    const input = document.getElementById('newlistinput');
    const alert = document.querySelector('.alert');
    const panel = document.querySelector('.accordion');

    const inputValue = input.value;

    if (input.checkValidity() === false) {
        alert.style.display = 'block';
        input.style.borderColor = 'red';
    } else {
        const newList = new TodoList(inputValue);
        const todoLists = getTodoLists();
        todoLists.push(newList);
        saveTodoLists(todoLists);

        logTodoListsToConsole()

        const newLists = document.querySelector('.new-lists');
        newLists.appendChild(newListItem(inputValue, newList.id));
        input.value = '';

        renderTodoLists()

        panel.style.maxHeight = panel.scrollHeight + "px";
        alert.style.display = 'none';


        closeOverlay()
    }
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".nav-buttons");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function listClick() {
    const lists = document.querySelector('.lists')
    const chevronIcon = lists.querySelector(".fa-chevron-up");
    chevronIcon.classList.toggle("fa-chevron-down");

    const panel = document.querySelector('.accordion');

    if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

function sidebarAnimate() {
    const screenWidth = window.innerWidth;
    const sidebar = document.querySelector('.sidebar');
    const button = document.getElementById('toggle-sidebar');
    const main = document.querySelector('.main');
    
    if (screenWidth > 768) {
        if (sidebar.style.left === '' || sidebar.style.left === '0px') {
            sidebar.style.position = 'fixed';
            sidebar.style.left = '-100%';
            main.style.gridTemplateColumns = '1fr'
            main.style.gridTemplateAreas = '"main-area"'
            button.classList.remove('fa-bars-staggered');
            button.classList.add('fa-bars');
        } else if (sidebar.style.left === '-100%') {
            sidebar.style.left = '0';
            sidebar.style.position = 'relative';
            main.style.gridTemplateColumns = '300px 1fr'
            main.style.gridTemplateAreas = '"sidebar main-area"'
            button.classList.remove('fa-bars');
            button.classList.add('fa-bars-staggered');
        }
    } else {
        if (sidebar.style.left === '-100%') {
            sidebar.style.left = '0';
            button.classList.remove('fa-bars');
            button.classList.add('fa-bars-staggered');
        } else if (sidebar.style.left === '' || sidebar.style.left === '0px') {
            sidebar.style.left = '-100%';
            button.classList.remove('fa-bars-staggered');
            button.classList.add('fa-bars');
        }
    }
}

function homeButtonClick() {
    const today = document.querySelector(".today");

    setActiveButton(today)
}

export default function initializeSidebar() {
    createSidebar();

    const toggleButton = document.getElementById('toggle-sidebar');
    toggleButton.addEventListener('click', sidebarAnimate);

    const homeButton = document.getElementById('toggle-home');
    homeButton.addEventListener('click', homeButtonClick)

    setActiveButton(document.querySelector(".inbox"));
    initialiseMain('000000')

    renderTodoLists()
    renderTasks()
}
