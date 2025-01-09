const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "iam",
  password: "Zoom2018",
  port: 5432,
});

(async () => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log(result.rows);
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    pool.end();
    
  }
})();
