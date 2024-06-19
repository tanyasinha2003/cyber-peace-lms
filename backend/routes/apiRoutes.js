
const express = require('express');
const router = express.Router();

const authController = require('../controllers/userController');

const authMiddleware = require('../middleware/authMiddleware'); // Import JWT middleware


// Login route
router.post('/login', authController.login);

// Route to register a new user
router.post('/register', authController.register);


module.exports = router;
