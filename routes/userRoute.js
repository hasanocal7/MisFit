const router = require('express').Router();
const authController = require('../controller/authController');

router.post('/signup', authController.createUser);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);
router.get('/dashboard', authController.getDashboardPage);

module.exports = router;