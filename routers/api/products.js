const express = require('express');
const router = express.Router();

const apiProductsControllers = require('../../controllers/api/productsController.js');

router.get('/', apiProductsControllers.list);

module.exports = router;