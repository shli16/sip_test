const { verifyToken } = require("../utils/jwt");

exports.authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(403).json({ message: "No token provided" });

  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
