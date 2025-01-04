const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config');

// Fake user database (replace with actual DB logic)
const users = [
  { username: 'johnDoe', password: '$2a$10$Y2pM3Y2Cz9Fw9Eft9HgeH./eHoJqK8wL39AG3g.y2BbA4RQqe3KnC' } // password: 'password123'
];

// Login controller
exports.login = async (req, res) => {
  const { username, password } = req.body;

  // Check if user exists
  const user = users.find((u) => u.username === username);
  if (!user) return res.status(400).json({ message: 'User not found' });

  // Verify password
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  // Generate JWT token
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
  res.json({ token });
};
