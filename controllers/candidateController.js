const Candidate = require('../models/candidate');

class CandidateController {
  static index(req, res) {
    const candidates = Candidate.all();
    res.json({
      status: 200,
      data: candidates,
    });
  }

  static show(req, res) {
    const candidate = Candidate.find(parseInt(req.params.id, 10));

    if (candidate) {
      res.json({
        status: 200,
        data: candidate,
      });
    } else {
      res.json({
        status: 404,
        error: 'Candidate not found',
      });
    }
  }

  static create(req, res) {
    const candidate = Candidate.create(req.body);

    if (candidate.save()) {
      res.json({
        status: 201,
        data: candidate,
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with inputs',
      });
    }
  }

  static delete(req, res) {
    Candidate.delete(parseInt(req.params.id, 10));

    res.json({
      status: 204,
      data: null,
    });
  }
}

module.exports = CandidateController;
