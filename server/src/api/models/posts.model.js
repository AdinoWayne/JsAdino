const mongoose = require('mongoose');

const roles = ['user', 'mod', 'admin'];

const postsSchema = new mongoose.Schema({
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
  body: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  topics: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topics',
    required: true,
  },
  users: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tags',
    required: true,
  }],
  slug: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  published: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  role: {
    type: String,
    enum: roles,
    default: 'user',
  },
}, {
  timestamps: true,
});

/**
 * @typedef Posts
 */
module.exports = mongoose.model('Posts', postsSchema);
