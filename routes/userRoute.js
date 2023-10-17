const router = require('express').Router();
const userController = require('../controller/authController');

router.post('/signup', userController.createUser);

module.exports = router;