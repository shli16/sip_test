// /utils/hashPassword.js
const bcrypt = require("bcrypt");

/**
 * Hash a plaintext password.
 * @param {string} password - The plaintext password.
 * @param {number} saltRounds - The cost factor (default = 10).
 * @returns {Promise<string>} The hashed password.
 */
async function hashPassword(password, saltRounds = 10) {
  if (!password) {
    throw new Error("Password is required for hashing.");
  }
  const hashed = await bcrypt.hash(password, saltRounds);
  return hashed;
}

module.exports = hashPassword;
