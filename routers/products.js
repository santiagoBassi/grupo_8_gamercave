const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/products'))
    },
    filename: (req, file, callback) => {
        callback(null, 'producto-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage })


router.get('/', productsControllers.products);

router.get('/:id', productsControllers.productDetail);

router.get('/create', productsControllers.productCreate);

router.post('/create', upload.single('imagesProduct'), productsControllers.productCreateSave);

router.get('/:id/edit', productsControllers.productEdit);

router.put('/:id/edit', productsControllers.productEditSave)

router.delete('/:id/delete', productsControllers.productDelete)



router.get('/cart', productsControllers.productCart);





module.exports = router;