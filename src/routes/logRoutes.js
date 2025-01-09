const express = require("express");
const { getLogs } = require("../controllers/logController");

const router = express.Router();

router.get("/", getLogs); // Get all logs

module.exports = router;
