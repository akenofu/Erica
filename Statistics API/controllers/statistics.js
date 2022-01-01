const server = require("../model/server");

const putSubmit = async (req, res, next) => {
  try {
    const query = { serverID: req.body.songRequest.serverID };

    const discordServer = await server.findOne(query);
    console.log(discordServer);
    const songExists = discordServer.songRequests.some((songRequest) => {
      return songRequest.songName === req.body.songRequest.songName;
    });


    if (songExists) {
      const updatedSongRequests = discordServer.songRequests.map(
        (songRequest) => {
          if (songRequest.songName === req.body.songRequest.songName) {
            songRequest.numberOfTimesRequested++;
          }
          return songRequest;
        }
      );

      discordServer.songRequests = updatedSongRequests;

    } else {
      discordServer.songRequests.push({
        songName: req.body.songRequest.songName,
        numberOfTimesRequested: 1,
      });
    }

    const updatedServer = await server.findOneAndUpdate(query, discordServer);

    res.status(200).json(updatedServer);
  } catch (err) {
    res.status(400).send({ message: err });
  }
};

exports.putSubmit = putSubmit;
