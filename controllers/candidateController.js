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
    const candidate = Candidate.find(req.params.id);

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

    if (candidate) {
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
}

module.exports = CandidateController;
