const jwt = require("jsonwebtoken");
require("dotenv").config(); // Load environment variables from .env file

const secret = process.env.JWT_SECRET;

// Generate a JWT
exports.generateToken = (payload) => {
  try {
    if (!secret) {
      throw new Error('JWT_SECRET is not defined in environment variables');
    }
    // If payload is just a number or string, wrap it in an object
    const tokenPayload = typeof payload === 'object' ? payload : { id: payload };

    return jwt.sign(tokenPayload, secret,  { expiresIn: "1h" });
  } catch (err) {
    console.error("Error generating token:", err);
    throw err;
  }
};

// Verify a JWT
exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    console.error("Error verifying token:", err);
    throw err;
  }
};

// Decode a JWT (without verification)
exports.decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (err) {
    console.error("Error decoding token:", err);
    throw err;
  }
};
