const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  course_id: mongoose.Schema.Types.ObjectId,
  course_name: { type: String, required: true },
  modules: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Module' }],
  trainer: { type: String, required: true },
  level: { type: String, default: 'Beginner' },
  rating: { type: Number, default: 0 },
  tools: [{ type: String }],
  date_created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
