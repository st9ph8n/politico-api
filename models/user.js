let userStore = require('../dataStore/users');

class User {
  static all() {
    return userStore.map((item, index) => ({ id: index + 1, ...item }));
  }

  static find(id) {
    return userStore.find((item, index) => (index + 1 === id));
  }

  static create(data) {
    const user = new User();
    user.firstname = data.firstname;
    user.lastname = data.lastname;
    user.othername = data.othername;
    user.email = data.email;
    user.phoneNumber = data.phoneNumber;
    user.passportUrl = data.passportUrl;
    user.isAdmin = data.isAdmin;

    return user;
  }

  static delete(id) {
    userStore = userStore.filter((item, index) => index + 1 !== id);
  }

  save() {
    userStore.push(this);

    return true;
  }
}

module.exports = User;
