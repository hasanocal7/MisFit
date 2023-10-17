const router = require('express').Router();
const pageController = require('../controller/pageController');

router.get('/', pageController.getHomePage);
router.get('/about', pageController.getAboutPage);
router.get('/trainer', pageController.getTrainerPage);
router.get('/gallery', pageController.getGalleryPage);
router.get('/contact', pageController.getContacPage);
router.get('/login', pageController.getLoginPage);
router.get('/register', pageController.getRegisterPage);

module.exports = router;