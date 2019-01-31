const User = require('../models/user');

class UserController {
  static index(req, res) {
    const users = User.all();
    res.json({
      status: 200,
      data: users,
    });
  }

  static show(req, res) {
    const user = User.find(req.params.id);

    if (user) {
      res.json({
        status: 200,
        data: user,
      });
    } else {
      res.json({
        status: 404,
        error: 'User not found',
      });
    }
  }

  static create(req, res) {
    const user = User.create(req.body);

    if (user) {
      res.json({
        status: 201,
        data: user,
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with your inputs'
      });
    }
  }
}

module.exports = UserController;
