const express = require('express');
const router = express.Router();

const apiUsersController = require('../../controllers/api/usersController.js')

router.get('/', apiUsersController.list);

router.get('/:id', apiUsersController.detail);


module.exports = router;