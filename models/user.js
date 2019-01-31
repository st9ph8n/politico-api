const userStore = require('../dataStore/users');

class User {
  static all() {
    return userStore;
  }

  static find(id) {
    return userStore.find(item => item.id === id);
  }

  static create(user) {
    userStore.push(user);

    return user;
  }
}

module.exports = User;
