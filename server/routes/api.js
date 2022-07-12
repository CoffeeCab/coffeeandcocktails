const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const userProfile = require ('../../config/passport-setup');

const router = express.Router();

// router.post('/signup', userController.addUser, (req, res) => {
//   return res.status(200).send(res.locals.data.user);
// });

// router.get('/login', userController.checkUser, (req, res) => {
//   return res.status(200).send(res.locals.data.user);
// });

//passport 

router.get('/success', (req, res) => res.send(userProfile));
router.get('/error', (req, res) => res.send('error logging in'));

//oauth
router.get('/auth/google', authController.test, passport.authenticate('google', { scope : ['email', 'profile'] }));

router.post('/auth/google/callback', authController.test2, passport.authenticate("google", { successRedirect: '/success', failureRedirect: '/error' }), (req, res) => {
    //successful authentication, redirect success.
    return res.status(300).redirect("/success");
  }
);

module.exports = router;