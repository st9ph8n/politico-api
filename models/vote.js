let voteStore = require('../dataStore/votes');

class Vote {
  static all() {
    return voteStore;
  }

  static find(id) {
    return voteStore.find(item => item.id === id);
  }

  static create(data) {
    const vote = new Vote();
    vote.createdOn = data.createdOn;
    vote.createdBy = data.createdBy;
    vote.office = data.office;
    vote.candidate = data.candidate;

    return vote;
  }

  static delete(id) {
    voteStore = voteStore.filter((item, index) => index + 1 !== id);
  }

  save() {
    voteStore.push(this);

    return true;
  }
}

module.exports = Vote;
