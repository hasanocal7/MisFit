exports.getHomePage = (req, res) => {
    res.render('index');
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getTrainerPage = (req, res) => {
    res.render('trainer');
}

exports.getGalleryPage = (req, res) => {
    res.render('gallery');
}

exports.getContacPage = (req, res) => {
    res.render('contact');
};

exports.getLoginPage = (req, res) => {
    res.render('login');
};

exports.getRegisterPage = (req, res) => {
    res.render('register');
};