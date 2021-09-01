const express = require('express');
const router = express.Router();
const path = require("path")
const usersControllers = require('../controllers/usersController');

const multer = require('multer');



const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/users'));
    },
    filename: (req, file, callback) => {
        callback(null, 'usuario-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });


router.get('/register', usersControllers.register);
router.post('/create', upload.single("img_user"), usersControllers.create)

router.get('/login', usersControllers.login);
router.get('/recoverpassword', usersControllers.recoverpassword);




module.exports = router;