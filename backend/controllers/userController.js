// backend/controllers/authController.js
require('dotenv').config();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import User model

const jwtKey= process.env.JWT_SECRET;

// Function to handle user login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user in database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id },
      jwtKey,
      { expiresIn: '1h' } // Token expires in 1 hour
    );

    res.status(200).json({  message:"logged in",token:token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};


// Function to add a new user
exports.register = async (req, res) => {
  const { name, password, email, age } = req.body;

  try {
    // Check if user with the same email exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    

    // Create a new user instance
    user = new User({
      name,
      password,
      email,
      age,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

  
    // Save user to database
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
