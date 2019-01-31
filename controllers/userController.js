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
    const user = User.find(parseInt(req.params.id, 10));

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
    if (user.save()) {
      res.json({
        status: 201,
        data: user,
      });
    } else {
      res.json({
        status: 422,
        error: 'There was some errors with your inputs',
      });
    }
  }

  static delete(req, res) {
    User.delete(parseInt(req.params.id, 10));

    res.json({
      status: 204,
      data: null,
    });
  }
}

module.exports = UserController;
