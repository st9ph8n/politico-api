let candidateStore = require('../dataStore/candidates');

class Candidate {
  static all() {
    return candidateStore.map((item, index) => ({ id: index + 1, ...item }));
  }

  static find(id) {
    return candidateStore.find((item, index) => index + 1 === id);
  }

  static create(data) {
    const candidate = new Candidate();
    candidate.office = data.office;
    candidate.party = data.party;
    candidate.candidate = data.candidate;

    return candidate;
  }

  static delete(id) {
    candidateStore = candidateStore.filter((item, index) => index + 1 !== id);
  }

  save() {
    candidateStore.push(this);

    return true;
  }
}

module.exports = Candidate;
