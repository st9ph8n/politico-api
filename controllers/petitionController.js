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
    const petition = Petition.find(parseInt(req.params.id, 10));

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
    if (petition.save()) {
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

  static delete(req, res) {
    Petition.delete(parseInt(req.params.id, 10));

    res.json({
      status: 204,
      data: null,
    });
  }
}

module.exports = PetitionController;
