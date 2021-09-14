import 'regenerator-runtime';
import App from './views/app';

const app = new App({
  openDrawer: document.querySelector('#hamburgerButton'),
  closeDrawer: document.querySelector('#closeNavbar'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});
