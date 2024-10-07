import './styles.css';
import createHomePage from './home.js';
import createMenuPage from './menu.js';
import createAboutPage from './about.js';

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const aboutButton = document.querySelector('#about');

function clearContent() {
    const content = document.querySelector('#content');
    const contentContent = content.querySelectorAll('div');

    contentContent.forEach(element => {
        element.remove();
    });
}

homeButton.addEventListener('click', clearContent);
homeButton.addEventListener('click', createHomePage);

menuButton.addEventListener('click', clearContent);
menuButton.addEventListener('click', createMenuPage);

aboutButton.addEventListener('click', clearContent);
aboutButton.addEventListener('click', createAboutPage);

createHomePage();
