const officeStore = require('../dataStore/offices');

class Office {
  static create(data) {
    const office = new Office();
    office.type = data.type;
    office.name = data.name;

    return office;
  }

  save() {
    officeStore.push(this);

    return true;
  }

  static all() {
    return officeStore.map((item, index) => ({ id: index + 1, ...item }));
  }
}

module.exports = Office;
