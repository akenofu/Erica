const express = require("express");
const { getServers, postServers, getServerByID } = require("../controllers/servers");

const router = express.Router();

router.route("/").get(getServers);

router.route("/").post(postServers);

router.route("/:id").get(getServerByID);

module.exports = router;
