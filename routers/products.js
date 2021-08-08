const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsController');

router.get('/', productsControllers.products);
/*
router.get('/create', productsControllers.productDetail);
router.post('/create', productsControllers.productDetail);
*/

router.get('/detail/:id', productsControllers.productDetail);

router.get('/cart', productsControllers.productCart);
router.get('/productUploadEdit', productsControllers.productsUploadEdit);




module.exports = router;