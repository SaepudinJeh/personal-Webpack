import DrawerInitiator from '../utils/drawer-initiator';

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
}

export default App;
