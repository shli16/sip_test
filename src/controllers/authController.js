const { createUser, findUserByEmail } = require("../models/userModel");
const { generateToken } = require("../utils/jwt");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(username, email, hashedPassword);
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await findUserByEmail(email);
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const payload = {
      userId: user.id,  // or user._id if using MongoDB
      email: user.email,
      // other user data you want to include
    };
    const token = generateToken(payload);
    res.status(200).json({ token });
    
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
