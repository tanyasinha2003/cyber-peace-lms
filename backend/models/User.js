

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: Number,
  name: String,
  password: String,
  email: String,
  age: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
