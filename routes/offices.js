const express = require('express');
const officeController = require('../controllers/officesController');

function createOfficesRoute() {
  const router = express.Router();

  router.post('/', officeController.createOffice);


  return router;
}

module.exports = createOfficesRoute;
