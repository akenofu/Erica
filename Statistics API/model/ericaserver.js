const mongoose = require("mongoose");
const song = require("./song");
const song2 = new song();

const EricaServer = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    mostRequestedSong:
    {
      type:String,
    
    },
numberOfSongsRequestedInServer: {
  type: String,
},
    song:[
      {
        name:{
        type:String
        },
        playcount:{
          type:Number
        }

      }
    ]





  }
);

// Exports the schema as the default value
module.exports = mongoose.model('ericaserver', EricaServer);

// Exporting multiple values
// exports.User = mongoose.model('user', User);