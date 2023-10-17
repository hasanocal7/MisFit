const { User } = require('../models');
const { query, validationResult } = require('express-validator');

exports.createUser = async (req, res, next) => {
  try {
      const user = await User.create(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()){
        res.status(400).send({errors: errors.array()});
      }
      res.status(201).redirect('/login');
  } catch (error) {
      throw new Error(error.message);
  }
};