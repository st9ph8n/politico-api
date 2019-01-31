const Party = require('../models/party');

class PartiesController {
  static create(req, res) {
    const party = Party.create(req.body);
    if (party.save()) {
      res.json({
        status: 201,
        data: [party],
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with your inputs',
      });
    }
  }

  static index(req, res) {
    const parties = Party.all();
    res.json({
      status: 200,
      data: [parties],
    });
  }

  static show(req, res) {
    const party = Party.find(parseInt(req.params.id, 10));

    if (party) {
      res.json({
        status: 200,
        data: [party],
      });
    } else {
      res.json({
        status: 404,
        error: 'Party not found',
      });
    }
  }
}

module.exports = PartiesController;
