// /routes/userRoutes.js
const express = require("express");
const { addUser } = require("../controllers/userController");

const router = express.Router();

// POST /api/users to create a new user
router.post("/", addUser);

module.exports = router;
