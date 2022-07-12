const express = require('express');
// const cookieParser = require('cookie-parser');

const authController = {};

// middleware for verifying 
authController.verifyUser = (req,res, next) => {
  console.log('I am at verifyUser');
  console.log(req.body);

  // desctructing user, pass from request body
  const { username, password } = req.body;


}

authController.test = (req, res, next) => {
  console.log('testing auth middleware');
  return next();
}

authController.auth1 = (req, res, next) => {
  passport.authenticate('google', { scope : ['email', 'profile'] });
  return next();
}

authController.auth2 = (req, res, next) => {
  console.log("testing goog callback middleware");
  passport.authenticate("google", { successRedirect: "/success", failureRedirect: "/error" });
  return next();
};
// authController.tokenChecking = (req,res,next) => {

//   if(req.cookie.)

// } 

module.exports = authController;