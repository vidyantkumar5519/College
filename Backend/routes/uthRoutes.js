const express = require('express');
const { login } = require('../controllers/authController');
const router = express.Router();

// POST /api/auth/login route for logging in
router.post('/login', login);

module.exports = router;
