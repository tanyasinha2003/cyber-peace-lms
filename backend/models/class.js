const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  class_id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  trainer_name: { type: String, required: true },
  desc: { type: String, required: true },
  link: { type: String, required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' }
});

module.exports = mongoose.model('Class', classSchema);
