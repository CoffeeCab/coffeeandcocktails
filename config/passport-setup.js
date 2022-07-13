const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
let userProfile;

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env['GOOGLE_CLIENT_ID'],
      clientSecret: process.env['GOOGLE_CLIENT_SECRET'],
      callbackURL: "http://localhost:3000/auth/google/callback",
      scope: ['email', 'profile'],
      passReqToCallback: true
    },
    function (request, accessToken, refreshToken, profile, done) {
      userProfile = profile;
      console.log(userProfile, 'this is profile')
      return done(null, userProfile);
    }
  )
);

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((obj, done) => done(null, obj));

function getUserProfile() {
  return userProfile;
}
module.exports = getUserProfile;