exports.createPermission = async (name, description) => {
    const query = `
      INSERT INTO permissions (name, description)
      VALUES ($1, $2) RETURNING *`;
    const values = [name, description];
    const result = await pool.query(query, values);
    return result.rows[0];
  };
  
  exports.getPermissions = async () => {
    const query = `SELECT * FROM permissions`;
    const result = await pool.query(query);
    return result.rows;
  };
  
  exports.assignPermissionToRole = async (roleId, permissionId) => {
    const query = `
      INSERT INTO role_permissions (role_id, permission_id)
      VALUES ($1, $2)`;
    await pool.query(query, [roleId, permissionId]);
  };
  