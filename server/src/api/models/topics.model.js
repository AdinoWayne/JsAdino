const mongoose = require('mongoose');

const roles = ['user', 'mod', 'admin'];

const topicsSchema = new mongoose.Schema({
  title: {
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
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts',
    required: true,
  }],
  role: {
    type: String,
    enum: roles,
    default: 'user',
  },
}, {
  timestamps: true,
});

/**
 * @typedef Topics
 */
module.exports = mongoose.model('Topics', topicsSchema);
