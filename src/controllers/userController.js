// /controllers/userController.js

const hashPassword = require("../utils/hashPassword");
const { validateUserRegistration } = require("../utils/validate");
const { sendSuccess, sendError } = require("../utils/responseHandler");

// Example Model: userModel.js (Assuming you already have it)
const userModel = require("../models/userModel");

/**
 * Add a new user to the database.
 * @route POST /api/users
 */
async function addUser(req, res) {
  try {
    const { username, email, password } = req.body;
    // 1. Validate input
    const { valid, errors } = validateUserRegistration({ email, password });
    if (!valid) {
      return sendError(res, 400, errors.join(" "));
    }

    // 2. Hash password
    const hashed = await hashPassword(password);
    // 3. Insert into DB (example userModel function)
    const newUser = await userModel.createUser(username, email, hashed);

    // 4. Respond with success
    return sendSuccess(res, 201, {
      message: "User created successfully",
      user: newUser
    });
  } catch (err) {
    console.error("Error in addUser controller:", err);
    return sendError(res, 500, "Internal Server Error");
  }
}

module.exports = {
  addUser
};
