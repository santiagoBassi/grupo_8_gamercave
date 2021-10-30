const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');

const multer = require('multer');
const path = require('path');

const validationsProductCreate = require('../middlewares/validationsProductCreate.js');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/products'));
    },
    filename: (req, file, callback) => {
        callback(null, 'producto-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


router.get('/', adminControllers.admin);


router.get('/create', adminControllers.productCreate);
router.post('/create', upload.any('imagesProduct'), validationsProductCreate, adminControllers.productCreateSave);

router.get('/:id/edit', adminControllers.productEdit);
router.put('/:id/edit', upload.any('imagesProduct'), adminControllers.productEditSave);

router.delete('/:id/delete', adminControllers.productDelete);

module.exports = router;