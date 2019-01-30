const candidateStore = require('../dataStore/candidates');

class Candidate {
  static all() {
    return candidateStore;
  }

  static find(id) {
    return candidateStore.find(item => item.id === id);
  }

  static create(party) {
    candidateStore.push(party);

    return party;
  }
}

module.exports = Candidate;
