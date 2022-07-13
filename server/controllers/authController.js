const express = require('express');
const passport = require('passport');
const userProfile = require("../../config/passport-setup");
const db = require('../models/pg');
require('dotenv').config();

const authController = {};

// middleware for verifying 
authController.verifyUser = async (req, res, next) => {
  const user = userProfile();
  console.log(user);
  if (user) {
    const { id } = user;
    const { familyName, givenName } = user.name;
    const { email } = user._json;

    // const value = [id];
    const query = `SELECT * FROM public.user WHERE google_id = '${id}'`;
    const data = await db.query(query);

    if (data === undefined) {
      const query2 = `INSERT INTO public.user (first_name, last_name, google_id, email) VALUES (${givenName}, ${familyName}, ${id}, ${email})`;
      await db.query(query2);
      res.locals.userProfile = {
        firstName: givenName,
        lastName: familyName,
        email: email,
      }
      return next();
    }
    else {
      res.locals.userProfile = {
        firstName: givenName,
        lastName: familyName,
        email: email,
      }
      return next();
    }
  }
}

authController.test = (req, res, next) => {
  console.log('testing auth middleware');
  passport.authenticate("google", { successRedirect: "success", failureRedirect: "error" })
  return next();
}

// authController.auth1 = (req, res, next) => {
//   console.log('Iam at auth1')
//   try {
//    passport.authenticate('google', { scope: ['email', 'profile'] });
//   } catch (err) {
//     console.log(err)
//   }

//   console.log('I am after the passport')
//   return next();
// }

// authController.auth2 = (req, res, next) => {
//   console.log("testing goog callback middleware");
//   passport.authenticate("google", { successRedirect: "/success", failureRedirect: "/error" });
//   return next();
// };
// authController.tokenChecking = (req,res,next) => {

//   if(req.cookie.)

// } 

module.exports = authController;