const express = require('express');
const router = express.Router();
const adminControllers = require('../controllers/adminController');

const multer = require('multer');
const path = require('path');

const validationsProductCreate = require('../middlewares/validationsProductCreate.js');
const validationsProductEdit = require('../middlewares/validationsProductEdit.js');

const adminMiddlware = require('../middlewares/adminMiddlware.js');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/products'));
    },
    filename: (req, file, callback) => {
        callback(null, 'producto-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


router.get('/',adminMiddlware, adminControllers.admin);


router.get('/create',adminMiddlware, adminControllers.productCreate);
router.post('/create',adminMiddlware, upload.any('imagesProduct'), validationsProductCreate, adminControllers.productCreateSave);

router.get('/:id/edit',adminMiddlware, adminControllers.productEdit);
router.put('/:id/edit',adminMiddlware, upload.any('imagesProduct'),validationsProductEdit, adminControllers.productEditSave);

router.delete('/:id/delete',adminMiddlware, adminControllers.productDelete);

module.exports = router;