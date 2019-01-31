const partyStore = require('../dataStore/parties');

class Party {
  static all() {
    return partyStore;
  }

  static find(id) {
    return partyStore.find(item => item.id === id);
  }

  static create(data) {
    const party = new Party();
    party.name = data.name;
    party.hqAddress = data.hqAddress;
    party.logoUrl = data.logoUrl;

    return party;
  }
}


module.exports = Party;
