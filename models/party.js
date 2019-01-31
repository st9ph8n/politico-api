const partyStore = require('../dataStore/parties');

class Party {
  static all() {
    return partyStore.map((item, index) => ({ id: index + 1, ...item }));
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

  save() {
    partyStore.push(this);

    return true;
  }
}


module.exports = Party;
