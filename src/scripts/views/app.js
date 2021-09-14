import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/urlParser';
import routes from '../routes/routes';

class App {
  constructor({openDrawer, closeDrawer, drawer, content}) {
    this._openDrawer = openDrawer;
    this._closeDrawer = closeDrawer;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      openDrawer: this._openDrawer,
      closeDrawer: this._closeDrawer,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
