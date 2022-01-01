
const EricaServer = require('../model/ericaserver')


const getServers = async (req, res, next) => {


    const server = await EricaServer.find();

    return res.status(200).json(server)


 
}


exports.getServers = getServers;
