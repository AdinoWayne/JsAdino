const mongoose = require('mongoose');

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
    author: {
        type: String,
        maxlength: 128,
        index: true,
        trim: true,
    },
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
