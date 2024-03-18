console.log('testing');

import './styles/main.css';
import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadAboutPage from './about.js';

document.addEventListener('DOMContentLoaded', () => {
  loadHomePage();
});

document.getElementById('homePageTab').addEventListener('click', loadHomePage);
document.getElementById('menuPageTab').addEventListener('click', loadMenuPage);
document.getElementById('aboutPageTab').addEventListener('click', loadAboutPage);
