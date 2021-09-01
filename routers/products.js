const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require('path');
const { check } = require('express-validator');

const productsControllers = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/products'));
    },
    filename: (req, file, callback) => {
        callback(null, 'producto-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

const validations = [
    check('nombre').notEmpty().withMessage('Tienes que poner un nombre'),
    check('categoria').notEmpty().withMessage('Tienes que seleccionar una categoria'),
    check('caracteristica').notEmpty().withMessage('Tienes que poner una caracteristica'),
    check('valor').notEmpty().withMessage('Tienes que poner un valor'),
    check('precio').notEmpty().withMessage('Tienes que poner el precio del producto')
];


router.get('/', productsControllers.products);

router.get('/detail/:id', productsControllers.productDetail);

router.get('/create', productsControllers.productCreate);

router.post('/create', upload.any('imagesProduct'), validations, productsControllers.productCreateSave);

router.get('/:id/edit', productsControllers.productEdit);

router.put('/:id/edit', upload.any('imagesProduct'), productsControllers.productEditSave);

router.delete('/:id/delete', productsControllers.productDelete);

router.get('/cart', productsControllers.productCart);





module.exports = router;