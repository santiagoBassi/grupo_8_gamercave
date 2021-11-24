const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');


const productsControllers = require('../controllers/productsController');
const guestMiddlware = require('../middlewares/guestMiddlware');
const loggedInMiddlware = require('../middlewares/loggedInMiddlware');



router.get('/', productsControllers.products);

router.get('/detail/:id', productsControllers.productDetail);

router.get('/search', productsControllers.search);

router.get('/filterByPrice', productsControllers.filterByPrice)

router.get('/addToCart/:id', loggedInMiddlware, productsControllers.addToCart);

router.get('/deleteToCart/:id', loggedInMiddlware, productsControllers.deleteToCart);

router.get('/cart', loggedInMiddlware, productsControllers.cart);


module.exports = router;