const express = require('express');
const officeController = require('../controllers/officeController');

function createOfficesRoute() {
  const router = express.Router();

  router.get('/', officeController.index);
  router.post('/', officeController.create);
  router.get('/:id', officeController.show);

  return router;
}

module.exports = createOfficesRoute;
