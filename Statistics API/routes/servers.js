const express = require("express");
const { getServers } = require("../controllers/servers");

const router = express.Router();


router.route("/")
        .get(getServers)
     
        router.route("/{id}")
        .get(getServerByID)

module.exports = router;
