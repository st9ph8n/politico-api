const Petition = require('../models/petition');

class PetitionController {
  static index(req, res) {
    const petitions = Petition.all();
    res.json({
      status: 200,
      data: petitions,
    });
  }

  static show(req, res) {
    const petition = Petition.find(req.params.id);

    if (petition) {
      res.json({
        status: 200,
        data: petition,
      });
    } else {
      res.json({
        status: 404,
        error: 'Petition not found',
      });
    }
  }

  static create(req, res) {
    const petition = Petition.create(req.body);

    if (petition) {
      res.json({
        status: 201,
        data: petition,
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with your inputs',
      });
    }
  }
}

module.exports = PetitionController;
