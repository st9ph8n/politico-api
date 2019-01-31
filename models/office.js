let officeStore = require('../dataStore/offices');

class Office {
  static all() {
    return officeStore.map((item, index) => ({ id: index + 1, ...item }));
  }

  static find(id) {
    return officeStore.find((item, index) => index + 1 === id);
  }

  static create(data) {
    const office = new Office();
    office.type = data.type;
    office.name = data.name;

    return office;
  }

  static delete(id) {
    officeStore = officeStore.filter((item, index) => index + 1 !== id);
  }

  save() {
    officeStore.push(this);

    return true;
  }
}

module.exports = Office;
