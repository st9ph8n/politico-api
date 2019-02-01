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

  static editParty(req, res) {
    const party = Party.editByid({ id: parseInt(req.params.id, 10), ...req.body });

    res.json({
      status: 201,
      data: [party],
    });
  }

  static index(req, res) {
    const parties = Party.all();
    res.json({
      status: 200,
      data: [parties],
    });
  }

  static showSpecific(req, res) {
    const party = Party.findByid(parseInt(req.params.id, 10));

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

  static deleteSpecific(req, res) {
    Party.delete(parseInt(req.params.id, 10));

    res.json({
      status: 204,
      data: null,
    });
  }
}

module.exports = PartiesController;
