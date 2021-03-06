const Office = require('../models/office');

class OfficeController {
  static showallOffice(req, res) {
    const offices = Office.all();
    res.json({
      status: 200,
      data: offices,
    });
  }

  static showByid(req, res) {
    const office = Office.findByid(parseInt(req.params.id, 10));

    if (office) {
      res.json({
        status: 200,
        data: office,
      });
    } else {
      res.json({
        status: 404,
        error: 'office not found',
      });
    }
  }

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
