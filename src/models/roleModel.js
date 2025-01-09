const pool = require("../config/db");

exports.createRole = async (name, description) => {
  const query = `
    INSERT INTO roles (name, description)
    VALUES ($1, $2) RETURNING *`;
  const values = [name, description];
  const result = await pool.query(query, values);
  return result.rows[0];
};

exports.getRoles = async () => {
  const query = `SELECT * FROM roles`;
  const result = await pool.query(query);
  return result.rows;
};

exports.assignRoleToUser = async (userId, roleId) => {
  const query = `
    INSERT INTO user_roles (user_id, role_id)
    VALUES ($1, $2)`;
  await pool.query(query, [userId, roleId]);
};
