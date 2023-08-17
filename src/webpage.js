function createNav() {
    const nav = document.createElement('nav');
    nav.classList.add('nav');

    const leftDiv = document.createElement('div');
    leftDiv.classList.add('left-nav');

    const rightDiv = document.createElement('div');
    rightDiv.classList.add('right-nav');

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');

    const menuIcon = document.createElement('i');
    menuIcon.classList.add('fa-solid','fa-bars');

    const homeIcon = document.createElement('i');
    homeIcon.classList.add('fa-solid','fa-house');

    leftDiv.appendChild(menuIcon);
    leftDiv.appendChild(homeIcon);

    const addIcon = document.createElement('i');
    addIcon.classList.add('fa-solid','fa-plus');

    const listIcon = document.createElement('i');
    listIcon.classList.add('fa-solid','fa-list');

    const title = document.createElement('h1');
    title.textContent = 'ToDo';
    title.classList.add('title');

    logoDiv.appendChild(title);
    logoDiv.appendChild(listIcon);

    rightDiv.appendChild(addIcon);
    rightDiv.appendChild(logoDiv);

    nav.appendChild(leftDiv);
    nav.appendChild(rightDiv);

    return nav
}