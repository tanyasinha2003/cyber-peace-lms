

const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

const uri = process.env.MONGO_URI;

console.log(uri + 'this is the uri');

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;
