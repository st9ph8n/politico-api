const Office = require('../models/office');

class OfficeController {
  static index(req, res) {
    const offices = Office.all();
    res.json({
      status: 200,
      data: offices,
    });
  }

  static show(req, res) {
    const office = Office.find(req.params.id);

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

  static create(req, res) {
    const office = Office.create(req.body);

    if (office) {
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
