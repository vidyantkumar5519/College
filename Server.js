const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();
const port = 4000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse incoming JSON requests
app.use(session({ secret: "your-session-secret", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Mock user data (You should store users in a database in production)
const users = [
  {
    email: "test@example.com",
    password: bcrypt.hashSync("password123", 8), // bcrypt hashed password
  },
  {
    email: "vidyant01@gmail.com",
    password: bcrypt.hashSync("vidyant123", 8), // bcrypt hashed password
  },
];

// JWT Secret Key
const JWT_SECRET = "your-secret-key"; // In production, store this in environment variables

// Passport Google Strategy Configuration
passport.use(
  new GoogleStrategy(
    {
      clientID: "YOUR_GOOGLE_CLIENT_ID", // Your Google OAuth Client ID
      clientSecret: "YOUR_GOOGLE_CLIENT_SECRET", // Your Google OAuth Client Secret
      callbackURL: "http://localhost:4000/auth/google/callback", // Callback URL after Google login
    },
    function (accessToken, refreshToken, profile, done) {
      // You can save the user to the database here
      const user = {
        email: profile.emails[0].value,
        name: profile.displayName,
      };
      return done(null, user);
    }
  )
);

// Serialize and deserialize user for session handling
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// Google Login Route
app.get("/auth/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google Callback Route
app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // On success, generate JWT and send it to frontend
    const token = jwt.sign({ email: req.user.email }, JWT_SECRET, {
      expiresIn: "1h", // Token expires in 1 hour
    });
    res.json({ message: "Login successful with Google!", token });
  }
);

// Login Route (Using local authentication)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;

  // Find the user with the given email
  const user = users.find((u) => u.email === email);

  if (user) {
    // Compare hashed password using bcrypt
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        // If password matches, create a JWT token
        const token = jwt.sign({ email: user.email }, JWT_SECRET, {
          expiresIn: "1h", // Token expires in 1 hour
        });

        return res.json({
          message: "Login successful!",
          token: token, // Send the token back to the frontend
        });
      } else {
        return res.status(401).json({ message: "Invalid password." });
      }
    });
  } else {
    return res.status(401).json({ message: "Invalid email." });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
