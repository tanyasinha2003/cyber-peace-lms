const mongoose = require('mongoose');

const moduleSchema = new mongoose.Schema({
  module_id: mongoose.Schema.Types.ObjectId,
  module_name: { type: String, required: true },
  resources: [{
    resource_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }
  }],
  time_to_complete_module: { type: Number, default: 0 } // in hours or minutes
});

module.exports = mongoose.model('Module', moduleSchema);
