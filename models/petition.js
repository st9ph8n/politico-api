const petitionStore = require('../dataStore/petitions');

class Petition {
  static all() {
    return petitionStore;
  }

  static find(id) {
    return petitionStore.find(item => item.id === id);
  }

  static create(petition) {
    petitionStore.push(petition);

    return petition;
  }
}

module.exports = Petition;
