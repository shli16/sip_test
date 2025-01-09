const express = require("express");
const { setConfiguration, getConfiguration, getAllConfigurations } = require("../controllers/configController");

const router = express.Router();

router.post("/", setConfiguration); // Create or update a configuration
router.get("/:key", getConfiguration); // Get a specific configuration
router.get("/", getAllConfigurations); // Get all configurations

module.exports = router;
