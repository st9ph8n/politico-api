let petitionStore = require('../dataStore/petitions');

class Petition {
  static all() {
    return petitionStore.map((item, index) => ({ id: index + 1, ...item }));
  }

  static find(id) {
    return petitionStore.find((item, index) => index + 1 === id);
  }

  static create(data) {
    const petition = new Petition();
    petition.createdOn = data.createdOn;
    petition.createdBy = data.createdBy;
    petition.office = data.office;
    petition.body = petition.body;

    return petition;
  }

  static delete(id) {
    petitionStore = petitionStore.filter((item, index) => index + 1 !== id);
  }

  save() {
    petitionStore.push(this);

    return true;
  }
}

module.exports = Petition;
