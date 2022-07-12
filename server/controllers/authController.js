const express = require('express');
const cookieParser = require('cookie-parser');

const authController = {};

// middleware for verifying 
authController.verifyUser = (req,res, next) => {
  console.log('I am at verifyUser');
  console.log(req.body);

  // desctructing user, pass from request body
  const { username, password } = req.body;


}

authController.test = (req, res, next) => {
  console.log('testing auth middleware')
}

// authController.tokenChecking = (req,res,next) => {

//   if(req.cookie.)

// } 
