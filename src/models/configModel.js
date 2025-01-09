exports.setConfiguration = async (key, value) => {
    const query = `
      INSERT INTO configurations (key, value, updated_at)
      VALUES ($1, $2, NOW())
      ON CONFLICT (key) DO UPDATE
      SET value = EXCLUDED.value, updated_at = NOW()
      RETURNING *`;
    const result = await pool.query(query, [key, value]);
    return result.rows[0];
  };
  
  exports.getConfiguration = async (key) => {
    const query = `SELECT * FROM configurations WHERE key = $1`;
    const result = await pool.query(query, [key]);
    return result.rows[0];
  };
  
  exports.getAllConfigurations = async () => {
    const query = `SELECT * FROM configurations`;
    const result = await pool.query(query);
    return result.rows;
  };
  