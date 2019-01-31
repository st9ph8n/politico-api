const Vote = require('../models/vote');

class VoteController {
  static index(req, res) {
    const votes = Vote.all();
    res.json({
      status: 200,
      data: votes,
    });
  }

  static show(req, res) {
    const vote = Vote.find(parseInt(req.params.id, 10));

    if (vote) {
      res.json({
        status: 200,
        data: vote,
      });
    } else {
      res.json({
        status: 404,
        error: 'Vote not found',
      });
    }
  }

  static create(req, res) {
    const vote = Vote.create(req.body);
    if (vote.save()) {
      res.json({
        status: 201,
        data: vote,
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with your inputs',
      });
    }
  }

  static delete(req, res) {
    Vote.delete(parseInt(req.params.id, 10));

    res.json({
      status: 204,
      data: null,
    });
  }
}

module.exports = VoteController;
