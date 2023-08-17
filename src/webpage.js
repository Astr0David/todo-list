function createNav() {
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navInner = document.createElement('div');
    navInner.classList.add('nav-inner')

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

    const title = document.createElement('h1');
    title.textContent = 'ToDo';
    title.classList.add('title');

    logoDiv.appendChild(title);

    rightDiv.appendChild(addIcon);
    rightDiv.appendChild(logoDiv);

    navInner.appendChild(leftDiv);
    navInner.appendChild(rightDiv);

    nav.appendChild(navInner);

    return nav
}

function createWebpage() {
    const mainContent = document.getElementById("content");

    mainContent.appendChild(createNav())
}

export default createWebpage;