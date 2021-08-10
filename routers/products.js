const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const productsControllers = require('../controllers/productsController');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/prodcuts'))
    },
    filename: (req, file, callback) => {
        callback(null, 'producto-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage })


router.get('/', productsControllers.products);

router.get('/detail/:id', productsControllers.productDetail);

router.get('/create', productsControllers.productCreate);

router.post('/create', upload.single('imagesProduct'), productsControllers.productCreateSave);

router.get('/edit/:id', productsControllers.productEdit);

router.put('/edit/:id', productsControllers.productEditSave)

router.delete('/delete/:id', productsControllers.productDelete)



router.get('/cart', productsControllers.productCart);





module.exports = router;