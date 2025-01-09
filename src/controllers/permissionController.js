const { createPermission, getPermissions, assignPermissionToRole } = require("../models/permissionModel");

exports.createPermission = async (req, res) => {
  const { name, description } = req.body;
  try {
    const permission = await createPermission(name, description);
    res.status(201).json(permission);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getPermissions = async (req, res) => {
  try {
    const permissions = await getPermissions();
    res.status(200).json(permissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignPermission = async (req, res) => {
  const { roleId, permissionId } = req.body;
  try {
    await assignPermissionToRole(roleId, permissionId);
    res.status(200).json({ message: "Permission assigned successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
