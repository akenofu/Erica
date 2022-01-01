const express = require("express");
const { addServer, addSongRequest } = require("../controllers/submit");

const router = express.Router();


router.route("/")

        .post(addServer)
        .put(addSongRequest);

module.exports = router;
