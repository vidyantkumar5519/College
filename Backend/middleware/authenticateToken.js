const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

// Middleware to authenticate JWT token
module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];

  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info to the request object
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
