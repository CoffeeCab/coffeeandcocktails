const express = require("express");
const passport = require("passport");
const authController = require("../controllers/authController");
const userProfile = require("../../config/passport-setup");

const router = express.Router();

//passport 

router.get('/success', (req, res) => res.send(userProfile));
router.get('/error', (req, res) => res.send('error logging in'));

//oauth
router.get('/google', authController.auth1, (req, res) => {
  return res.status(200).send('hi');
});

router.get('/google/callback', authController.auth2, (req, res) => {
    //successful authentication, redirect success.
    return res.status(300).redirect("/success");
  }
);

module.exports = router;