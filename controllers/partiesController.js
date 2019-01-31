const Party = require('../models/party');

class PartiesController {
  static index(req, res) {
    const parties = Party.all();
    res.json({
      status: 200,
      data: parties,
    });
  }

  static show(req, res) {
    const party = Party.find(parseInt(req.params.id, 10));

    if (party) {
      res.json({
        status: 200,
        data: party,
      });
    } else {
      res.json({
        status: 404,
        error: 'Party not found',
      });
    }
  }

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

  // static update(req, res) {
  //   let party = Party.find(parseInt(req.params.id, 10));
  //   party.update(req.body);
  //   party = Party.find(parseInt(req.params.id, 10));

  //   res.json({
  //     status: 200,
  //     data: party,
  //   });
  // }

  static delete(req, res) {
    Party.delete(parseInt(req.params.id, 10));

    res.json({
      status: 204,
      data: null,
    });
  }
}

module.exports = PartiesController;
