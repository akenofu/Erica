const mongoose = require("mongoose");

const song = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    min: 2,
    required: true,
  }



  
});

// Exports the schema as the default value
module.exports = mongoose.model('song', song);

// Exporting multiple values
// exports.User = mongoose.model('user', User);