const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Listen for successful connection
pool.on("connect", () => {
  console.log("Connected to PostgreSQL successfully!");
});

// Listen for errors
pool.on("error", (err) => {
  console.error("PostgreSQL error:", err);
});

module.exports = pool;
