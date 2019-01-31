const Party = require('../models/party');

class PartiesController {
  static create(req, res) {
    const party = Party.create(req.body);
    if (party.save()) {
      res.json({
        status: 201,
        data: party,
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with your inputs',
      });
    }
  }
}

module.exports = PartiesController;
