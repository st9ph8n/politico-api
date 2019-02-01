const Office = require('../models/office');

class OfficeController {
  static createOffice(req, res) {
    const office = Office.create(req.body);
    if (office.save()) {
      res.json({
        status: 201,
        data: office,
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with your inputs',
      });
    }
  }
}

module.exports = OfficeController;