const express = require('express');
const cookieParser = require('cookie-parser');

const authController = {};

authController.verifyUser = (req,res, next) => {
  console.log('I am at verifyUser');
  console.log(req.body);

  // desctructing user, pass from request body
  const { id, password } = req.body;


}

authController.tokenChecking = (req,res,next) => {

  if(req.cookie.)

} 
