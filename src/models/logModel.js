exports.logEvent = async (userId, eventType, message) => {
    const query = `
      INSERT INTO logs (user_id, event_type, message, timestamp)
      VALUES ($1, $2, $3, NOW())`;
    await pool.query(query, [userId, eventType, message]);
  };
  
exports.getLogs = async () => {
    const query = `SELECT * FROM logs ORDER BY timestamp DESC`;
    const result = await pool.query(query);
    return result.rows;
  };
  