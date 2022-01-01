const server = require("../model/server");

const getServers = async (req, res, next) => {
  const discordServers = await server.find();

  const responseServers = discordServers.map((discordServer) => {
    return {
      serverID: discordServer.serverID,
      serverName: discordServer.serverName,
      mostRequestedSong:
        discordServer.songRequests.length !== 0
          ? discordServer.songRequests.reduce(
              (prev, curr) => {
                console.log(prev, curr);
                if (curr.numberOfTimesRequested > prev.numberOfTimesRequested)
                  return curr;
                else return prev;
              },
              {
                songName: "",
                numberOfTimesRequested: 0,
              }
            )
          : {
              songName: "",
              numberOfTimesRequested: 0,
            },
      numberOfSongsRequests: discordServer.songRequests.length,
    };
  });


  res.status(200).json(responseServers);
};

const postServers = async (req, res, next) => {
  console.log(req.body);

  const { serverID, serverName } = req.body.server;

  const query = { serverID };
  const update = { $set: { serverID, serverName, songRequests: [] } };
  const options = { upsert: true };

  const updatedServer = await server.updateOne(query, update, options);

  return res.status(200).json(updatedServer);
};

const getServerByID = async (req, res, next) => {
  const serverID = req.params.id;
  const foundServers = await server.findOne({ serverID });

  return res.status(200).json(foundServers);
};

exports.getServers = getServers;
exports.postServers = postServers;
exports.getServerByID = getServerByID;
