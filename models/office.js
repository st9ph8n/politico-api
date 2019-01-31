const officeStore = require('../dataStore/offices');

class Office {
  static all() {
    return officeStore;
  }

  static find(id) {
    return officeStore.find(item => item.id === id);
  }

  static create(party) {
    officeStore.push(party);

    return party;
  }
}

module.exports = Office;
