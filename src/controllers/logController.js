const { getLogs } = require("../models/logModel");

exports.getLogs = async (req, res) => {
  try {
    const logs = await getLogs();
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
