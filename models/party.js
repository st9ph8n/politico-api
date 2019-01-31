const partyStore = require('../dataStore/parties');

class Party {
  static all() {
    return partyStore.map((item, index) => ({ id: index + 1, ...item }));
  }

  static findByid(id) {
    return partyStore.find((item, index) => index + 1 === id);
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
