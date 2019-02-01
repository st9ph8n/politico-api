let partyStore = require('../dataStore/parties');

class Party {
  static all() {
    return partyStore.map((item, index) => ({ id: index + 1, ...item }));
  }

  static findByid(id) {
    return partyStore.find((item, index) => index + 1 === id);
  }

  static editByid(data) {
    const content = partyStore.find((item, index) => index + 1 === data.id);
    content.name = data.name ? data.name : content.name;
    content.hqAddress = data.hqAddress ? data.hqAddress : content.hqAddress;
    content.logoUrl = data.logoUrl ? data.logoUrl : content.logoUrl;

    partyStore[data.id - 1] = content;
    return { id: data.id, ...content };
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

  static delete(id) {
    partyStore = partyStore.filter((item, index) => index + 1 !== id);
  }
}


module.exports = Party;
