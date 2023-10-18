const { Training } = require('../models');

exports.createTraining = async (req, res) => {
    await Training.create({
        ...req.body,
        trainer_id: req.session.userID,
    });
    res.status(201).redirect('/users/dashboard');
}