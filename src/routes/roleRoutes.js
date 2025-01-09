const express = require("express");
const { createRole, getRoles, assignRole } = require("../controllers/roleController");

const router = express.Router();

router.post("/", createRole); // Create a new role
router.get("/", getRoles); // Get all roles
router.post("/assign", assignRole); // Assign a role to a user

module.exports = router;
