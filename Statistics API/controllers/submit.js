
const EricaServer = require('../model/ericaserver')



const addServer = async (req, res, next) => {
    try {
        const newServer = new EricaServer(req.body);
        await newServer.save();
        res.send(newServer);
    }
    catch (err) {
        res.status(400).send({ message: err });
    }
}

const addSongRequest = async (req, res, next) => {
    try {
     
        console.log(req.body.id);
        const server = await EricaServer.findOneAndUpdate({ id: req.body.id }, {
            $push: {
                song: { name: req.body.song.name }


            }
        })
        res.status(200).json(server)
    }
    catch (err) {
        res.status(400).send({ message: err });
    }
}

exports.addServer = addServer;
exports.addSongRequest = addSongRequest;