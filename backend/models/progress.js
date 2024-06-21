const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  resource_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource' },
  completed: { type: Boolean, default: false },
  completed_date: { type: Date }
});

module.exports = mongoose.model('Progress', progressSchema);
