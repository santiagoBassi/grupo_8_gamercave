const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

const productsControllers = require('../controllers/productsController');
const guestMiddlware = require('../middlewares/guestMiddlware');
const loggedInMiddlware = require('../middlewares/loggedInMiddlware');



router.get('/', productsControllers.products);

router.get('/detail/:id', productsControllers.productDetail);

router.get('/addToCart/:id', productsControllers.addToCart)

router.get('/cart', loggedInMiddlware, productsControllers.productCart);


module.exports = router;