const mongoose = require("mongoose");

const User = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 2,
    required: true,
  },
});

// Exports the schema as the default value
module.exports = mongoose.model('user', User);

// Exporting multiple values
// exports.User = mongoose.model('user', User);