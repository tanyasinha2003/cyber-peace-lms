const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User'); // Import your User model

// Configure Google OAuth2 strategy
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'  // Your callback URL
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Check if user already exists in your database
      let user = await User.findOne({ googleId: profile.id });

      if (!user) {
        // Create a new user if not found
        user = new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value // Assuming you want to store the email
        });
        await user.save();
      }

      return done(null, user);
    } catch (error) {
      return done(error, null);
    }
  }
));

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
