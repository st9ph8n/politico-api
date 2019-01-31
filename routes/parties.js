const express = require('express');
const partiesController = require('../controllers/partiesController');

function createPartiesRoute() {
  const router = express.Router();

  router.get('/', partiesController.index); // get all
  router.post('/', partiesController.create); // get create
  router.get('/:id', partiesController.show); // get specific
  // router.patch('/:id', partiesController.update);
  router.delete('/:id', partiesController.delete);

  return router;
}

module.exports = createPartiesRoute;
