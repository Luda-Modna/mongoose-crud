const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },

    model: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
    },

    releaseYear: {
      type: Number,
      required: true,
      min: 2000,
      max: new Date().getFullYear(),
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    color: {
      type: String,
      trim: true,
      default: 'black',
    },
    description: {
      type: String,
      trim: true,
      maxlength: 1000,
    },
    userId: {
      type: mongoose.ObjectId,
      ref: 'User',
    },
  },
  {
    versionKey: false,
  }
);

const Phone = mongoose.model('Phone', phoneSchema);

module.exports = Phone;
