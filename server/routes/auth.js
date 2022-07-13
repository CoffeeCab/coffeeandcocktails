const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");
const userProfile = require("../../config/passport-setup");

const router = express.Router();

//passport 

router.get('/google/success', authController.verifyUser, (req, res) => {
  // console.log('succeed', userProfile())
  // console.log(res.locals.userProfile, 'res.locals inside of success');
  res.status(300).redirect('http://localhost:8080/');
  //res.status(200).send(res.locals.userProfile);
});
router.get('/google/error', (req, res) => res.send('error logging in'));

//oauth
router.get('/google', passport.authenticate("google", { scope: ['email', 'profile'] }), (req, res) => {
  return res.status(200).send('hi');
});

router.get('/google/callback', passport.authenticate("google", { successRedirect: "success", failureRedirect: "error" }), (req, res) => {
  // successful authentication, redirect success.
  console.log('I am after passport');
  //.redirect("auth/success");
  return res.status(300);
});

module.exports = router;