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
    const office = Office.find(parseInt(req.params.id, 10));

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

  static delete(req, res) {
    Office.delete(parseInt(req.params.id, 10));

    res.json({
      status: 204,
      data: null,
    });
  }
}

module.exports = OfficeController;
