const router = require('express').Router();
const authController = require('../controller/authController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/signup', authController.createUser);
router.post('/login', authController.loginUser);
router.get('/logout', authController.logoutUser);
router.get('/dashboard', authMiddleware, authController.logoutUser);

module.exports = router;