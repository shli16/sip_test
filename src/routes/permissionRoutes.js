const express = require("express");
const { createPermission, getPermissions, assignPermission } = require("../controllers/permissionController");

const router = express.Router();

router.post("/", createPermission); // Create a new permission
router.get("/", getPermissions); // Get all permissions
router.post("/assign", assignPermission); // Assign a permission to a role

module.exports = router;
