exports.getHomePage = (req, res) => {
    res.render('index');
};

exports.getAboutPage = (req, res) => {
    res.render('about');
};

exports.getServicePage = (req, res) => {
    res.render('service');
};

exports.getNewsPage = (req, res) => {
    res.render('news');
};

exports.getGalleryPage = (req, res) => {
    res.render('gallery');
}

exports.getContacPage = (req, res) => {
    res.render('contact');
};