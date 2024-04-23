const mongoose = require('mongoose');

const murtiSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    enum: ['pop', 'mud'],
    required: true,
  },
  additionalRequirements: {
    type: String,
  },
});

module.exports = mongoose.model('Murti', murtiSchema);
