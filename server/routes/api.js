const express = require('express');
const passport = require('passport');
let userProfile;

const router = express.Router();

// router.post('/signup', userController.addUser, (req, res) => {
//   return res.status(200).send(res.locals.data.user);
// });

// router.get('/login', userController.checkUser, (req, res) => {
//   return res.status(200).send(res.locals.data.user);
// });


//passport 
router.get('/', (req, res) => res.render('pages/auth'));

router.get('/success', (req, res) => res.send(userProfile));
router.get('/error', (req, res) => res.send('error logging in'));

//oauth
router.get('/auth/google', authController.test, passport.authenticate('google', { scope : ['profile', 'email'] }));

router.get('/auth/google/callback', passport.authenticate("google", { failureRedirect: "/error/" }), (req, res) => {
    //successful authentication, redirect success.
    return res.redirect("/success");
  }
);

module.exports = router;