const router = require('express').Router();
const pageController = require('../controller/pageController');
const redirectMiddleware = require('../middlewares/redirectMiddleware');

router.get('/', pageController.getHomePage);
router.get('/about', pageController.getAboutPage);
router.get('/trainer', pageController.getTrainerPage);
router.get('/gallery', pageController.getGalleryPage);
router.get('/contact', pageController.getContacPage);
router.get('/login', redirectMiddleware, pageController.getLoginPage);
router.get('/register', redirectMiddleware,  pageController.getRegisterPage);
router.post('/sendmail', pageController.sendMail);

module.exports = router;