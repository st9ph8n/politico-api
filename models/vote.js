const voteStore = require('../dataStore/votes');

class Vote {
  static all() {
    return voteStore;
  }

  static find(id) {
    return voteStore.find(item => item.id === id);
  }

  static create(vote) {
    voteStore.push(vote);

    return vote;
  }
}

module.exports = Vote;
