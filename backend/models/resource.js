const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  resource_id: mongoose.Schema.Types.ObjectId,
  resource_name: { type: String, required: true },
  resource_file: { type: String, required: true },
  file_type: { type: String, required: true },
  language: { type: String, required: true }
});

module.exports = mongoose.model('Resource', resourceSchema);
