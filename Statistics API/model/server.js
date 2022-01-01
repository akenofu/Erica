const mongoose = require("mongoose");

const EricaServer = new mongoose.Schema(
  {
    serverID: {
      type: String,
      required: true
    },
    serverName: {
      type: String,
      required: true
    },
    songRequests: [
      {
        songName: String,
        numberOfTimesRequested: Number
      }
    ]
  }
);

// Exports the schema as the default value
module.exports = mongoose.model('servers', EricaServer);

