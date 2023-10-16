const router = require('express').Router();
const pageController = require('../controller/pageController');

router.get('/', pageController.getHomePage);
router.get('/about', pageController.getAboutPage);
router.get('/service', pageController.getServicePage);
router.get('/news', pageController.getNewsPage);
router.get('/gallery', pageController.getGalleryPage);
router.get('/contact', pageController.getContacPage);

module.exports = router;