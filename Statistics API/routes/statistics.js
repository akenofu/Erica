const express = require("express");
const { putSubmit } = require("../controllers/statistics");

const router = express.Router();

router.route("/submit").put(putSubmit);

module.exports = router;
