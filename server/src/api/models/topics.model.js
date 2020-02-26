const mongoose = require('mongoose');

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
    role: {
      type: String,
      enum: roles,
      default: 'user',
    },
  }, {
    timestamps: true,
}, {
    timestamps: true,
});
