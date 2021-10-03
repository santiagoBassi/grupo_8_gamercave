const express = require('express');
const router = express.Router();

const path = require("path");
const multer = require('multer');

const usersControllers = require('../controllers/usersController');
const guestMiddlware = require('../middlewares/guestMiddlware');
const loggedInMiddlware = require('../middlewares/loggedInMiddlware');




const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, path.join(__dirname, '../public/images/users'));
    },
    filename: (req, file, callback) => {
        callback(null, 'usuario-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage });



router.get('/register', guestMiddlware, usersControllers.register);

router.post('/create', upload.single("img_user"), usersControllers.create)

router.get('/login', guestMiddlware, usersControllers.showLogin);
router.post('/login', usersControllers.login)

router.get('/recoverpassword', usersControllers.recoverpassword);

router.get('/logout', usersControllers.logout);

module.exports = router;