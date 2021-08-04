const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsController');

router.get('/', productsControllers.products);
router.get('/productDetail', productsControllers.productDetail);
router.get('/productCart', productsControllers.productCart);




module.exports = router;