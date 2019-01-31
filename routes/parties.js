const express = require('express');
const partiesController = require('../controllers/partiesController');

function createPartiesRoute() {
  const router = express.Router();

  router.post('/', partiesController.create);
  router.get('/', partiesController.index);
  router.get('/:id', partiesController.showSpecific);

  return router;
}

module.exports = createPartiesRoute;
