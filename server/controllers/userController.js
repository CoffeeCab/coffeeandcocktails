const userController = {};
const db = require('../models/pg');

userController.checkUser = async (req, res, next) => {
  const query = ('');
  try {
    return next();
  }
  catch(err) {
    console.log(err, 'err in checkUser');
    return next(err);
  }
};

userController.addUser = async (req, res, next) => {

  try {
    return next();
  }
  catch(err) {
    console.log(err, 'err in addUser');
    return next(err);
  }
};


module.exports = userController;