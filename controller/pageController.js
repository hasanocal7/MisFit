const { User, Training } = require('../models');

exports.getHomePage = (req, res) => {
    res.render('index', {
        page_name: 'home'
    });
};

exports.getAboutPage = (req, res) => {
    res.render('about', {
        page_name: 'about'
    });
};

exports.getTrainerPage = async (req, res) => {
    const trainers = await User.findAll({where: {title: 'trainer'}});
    const trainings = await Training.findAll();
    res.render('trainer', {
        page_name: 'trainer',
        trainers,
        trainings
    });
}

exports.getGalleryPage = (req, res) => {
    res.render('gallery', {
        page_name: 'gallery'
    });
}

exports.getContacPage = (req, res) => {
    res.render('contact', {
        page_name: 'contact'
    });
};

exports.getLoginPage = (req, res) => {
    res.render('login', {
        page_name: 'login'
    });
};

exports.getRegisterPage = (req, res) => {
    res.render('register', {
        page_name: 'register'
    });
};