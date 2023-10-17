const { User } = require('../models');
const { query, validationResult } = require('express-validator');

exports.createUser = async (req, res, next) => {
  try {
      await User.create(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()){
        res.status(400).send({errors: errors.array()});
      }
      res.status(201).redirect('/login');
  } catch (error) {
      throw new Error(error.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const {email, password} = req.body;
    const user = await User.findOne({ where: {email: email}});
    if (!user) {
      return res.status(400).redirect('/login');
    }
    else if(user.authenticate(password)) {
      req.session.userID = user.id;
      return res.status(200).redirect('/');
    }
    else{
      return res.status(400).redirect('/login');
    }
  } catch (error) {
    console.log(error);
  }
}

exports.logoutUser = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

exports.getDashboardPage = async (req, res) => {
  const user = await User.findOne({where: { id: req.session.userID }})
  res.status(200).render('dashboard', {
    page_name: 'dashboard',
    user,
  });
}