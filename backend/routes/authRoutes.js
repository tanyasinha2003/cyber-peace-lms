const express = require('express');
const passport = require('../services/authService'); // Import passport configuration
const router = express.Router();

// Auth with Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Google OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    // Successful authentication, redirect home or send token
    const token = generateToken(req.user); // Example function to generate JWT token
    res.redirect(`/home?token=${token}`);
  });

module.exports = router;
