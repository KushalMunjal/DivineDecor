// models/Mandap.js

const mongoose = require('mongoose');

const mandapSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  decorations: {
    type: String,
    required: true
  },
  additionalRequirements: String
});

const Mandap = mongoose.model('Mandap', mandapSchema);

module.exports = Mandap;
