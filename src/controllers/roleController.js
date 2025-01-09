const { createRole, getRoles, assignRoleToUser } = require("../models/roleModel");

exports.createRole = async (req, res) => {
  const { name, description } = req.body;
  try {
    const role = await createRole(name, description);
    res.status(201).json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getRoles = async (req, res) => {
  try {
    const roles = await getRoles();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.assignRole = async (req, res) => {
  const { userId, roleId } = req.body;
  try {
    await assignRoleToUser(userId, roleId);
    res.status(200).json({ message: "Role assigned successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
