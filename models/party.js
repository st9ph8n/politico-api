const partyStore = require('../dataStore/parties');

class Party {
  static all() {
    return partyStore;
  }

  static find(id) {
    return partyStore.find(item => item.id === id);
  }

  static create(party) {
    partyStore.push(party);

    return party;
  }
}

module.exports = Party;
