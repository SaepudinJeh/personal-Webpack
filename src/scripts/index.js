import 'regenerator-runtime';
import App from './views/app';

const app = new App({
  openDrawer: document.querySelector('#hamburgerButton'),
  closeDrawer: document.querySelector('#closeNavbar'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
