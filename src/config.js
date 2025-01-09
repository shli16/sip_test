// src/config.js
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mongoUri: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
  port: process.env.PORT || 5000,
};
