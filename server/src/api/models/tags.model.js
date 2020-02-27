const mongoose = require('mongoose');

const tagsSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  description: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
}, {
  timestamps: true,
});

/**
 * @typedef Tags
 */
module.exports = mongoose.model('tagsSchema', tagsSchema);
