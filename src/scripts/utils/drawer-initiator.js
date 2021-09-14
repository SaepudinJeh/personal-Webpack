const DrawerInitiator = {
  init({openDrawer, closeDrawer, drawer, content}) {
    openDrawer.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    closeDrawer.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('hidden');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add('hidden');
  },

};

export default DrawerInitiator;
