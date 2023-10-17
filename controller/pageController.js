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

exports.getTrainerPage = (req, res) => {
    res.render('trainer', {
        page_name: 'trainer'
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