

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date_of_registration: { type: Date, default: Date.now },
  active_hours: { type: Number, default: 0 },
  courses: [{
    course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    no_of_modules_completed: { type: Number, default: 0 },
    date_of_course_enrollment: { type: Date, default: Date.now },
    total_no_of_modules: { type: Number, default: 0 }
  }],
  region: { type: String, required: true },
  level: { type: String, default: 'Beginner' },
  rating: { type: Number, default: 0 },
  tools: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);
