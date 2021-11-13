const express = require('express');
const router = express.Router();

const apiUsersController = require('../../controllers/api/users.js')

router.get('/', apiUsersController.list);


module.exports = router;