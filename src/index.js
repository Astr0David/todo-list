import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import createWebpage from './webpage';

const mainContent = document.createElement('div');
mainContent.setAttribute('id', 'content')
mainContent.classList.add('main-content')

document.body.appendChild(mainContent);

mainContent.appendChild(createWebpage())