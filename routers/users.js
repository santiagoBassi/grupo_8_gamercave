const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/usersController');

router.get('/register', usersControllers.register);
router.post('/create', usersControllers.create)

router.get('/login', usersControllers.login);
router.get('/recoverpassword', usersControllers.recoverpassword);


module.exports = router;