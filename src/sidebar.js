function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');

    const sidebarMenu = document.createElement('div');
    sidebarMenu.classList.add('sidebar-menu');

    const menu = document.createElement('ul');
    menu.classList.add('menu');

    const inbox = createSidebarItem('inbox', 'fa-inbox', 'Inbox');
    inbox.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(inbox);
    });

    const today = createSidebarItem('today', 'fa-calendar-day', 'Today');
    today.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(today);
    });

    const upcoming = createSidebarItem('upcoming', 'fa-calendar-week', 'Upcoming');
    upcoming.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(upcoming);
    });

    const all = createSidebarItem('all', 'fa-calendar-days', 'All');
    all.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(all);
    });

    const important = createSidebarItem('important', 'fa-star', 'Important');
    important.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(important);
    });

    const lists = document.createElement('li');
    lists.classList.add('lists');
    lists.innerHTML = '<div><i class="fa-solid fa-list-check"></i> <p>Lists</p></div> <div><i class="fa-solid fa-chevron-up"></i></div>';
    lists.addEventListener("click", listClick);

    const accordion = document.createElement('div');
    accordion.classList.add('accordion');

    const newLists = document.createElement('div');
    newLists.classList.add('new-lists');
    newLists.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(e.target);
    });

    const createNew = document.createElement('div');
    createNew.classList.add('create-new');
    createNew.innerHTML = '<i class="fa-solid fa-plus"></i> New List'
    createNew.addEventListener('click', newListButton);

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
    inputParagraph.textContent = 'Name (max 15 characters):';

    const input = document.createElement('input');
    input.setAttribute('id','newlistinput');
    input.setAttribute('type', 'text');
    input.setAttribute('maxlength', '15');
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

function newListButton() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'flex'
}

function closeOverlay() {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = 'none'
}

function addNewList() {
    const input = document.getElementById('newlistinput');
    const alert = document.querySelector('.alert');
    const panel = document.querySelector('.accordion');

    const inputValue = input.value;

    if (input.checkValidity() === false) {
        alert.style.display ='block';
        input.style.borderColor = 'red';
    } else {
        const newLists = document.querySelector('.new-lists');
        newLists.innerHTML += `<div class = "nav-buttons"><i class="fa-solid fa-circle"></i>${inputValue}</div>`
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
    const sidebar = document.querySelector('.sidebar');
    const button = document.getElementById('toggle-sidebar');

    if (sidebar.style.left === '' || sidebar.style.left === '0px') {
        sidebar.style.left = '-100%';
        button.classList.remove('fa-bars-staggered');
        button.classList.add('fa-bars');
    } else if (sidebar.style.left === '-100%') {
        sidebar.style.left = '0';
        button.classList.remove('fa-bars');
        button.classList.add('fa-bars-staggered');
    }
}

function homeButtonClick() {
    const today = document.querySelector(".today");

    setActiveButton(today)
}

function initializeSidebar() {
    createSidebar();
    newListPopup();

    const toggleButton = document.getElementById('toggle-sidebar');
    toggleButton.addEventListener('click', sidebarAnimate);

    const homeButton = document.getElementById('toggle-home');
    homeButton.addEventListener('click', homeButtonClick)

    setActiveButton(document.querySelector(".today"));
}

export default initializeSidebar;
