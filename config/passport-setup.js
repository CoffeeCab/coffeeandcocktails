const passport = require('passport');
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const GOOGLE_CLIENT_ID = "1019334193895-6ujped2u51h8ughttdmhkcepenbdupse.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
let userProfile;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
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