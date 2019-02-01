const express = require('express');
const officeController = require('../controllers/officesController');

function createOfficesRoute() {
  const router = express.Router();

  router.post('/', officeController.createOffice);
  router.get('/', officeController.showallOffice);

  router.get('/:id', officeController.showByid);

  return router;
}

module.exports = createOfficesRoute;
