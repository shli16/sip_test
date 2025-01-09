const { setConfiguration, getConfiguration, getAllConfigurations } = require("../models/configModel");

exports.setConfiguration = async (req, res) => {
  const { key, value } = req.body;
  try {
    const config = await setConfiguration(key, value);
    res.status(201).json(config);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getConfiguration = async (req, res) => {
  const { key } = req.params;
  try {
    const config = await getConfiguration(key);
    if (!config) return res.status(404).json({ message: "Configuration not found" });
    res.status(200).json(config);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllConfigurations = async (req, res) => {
  try {
    const configs = await getAllConfigurations();
    res.status(200).json(configs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
