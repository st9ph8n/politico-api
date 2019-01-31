const express = require('express');
const partiesController = require('../controllers/partiesController');

function createPartiesRoute() {
  const router = express.Router();

  router.post('/', partiesController.create); // get create
  // router.patch('/:id', partiesController.update);

  return router;
}

module.exports = createPartiesRoute;
