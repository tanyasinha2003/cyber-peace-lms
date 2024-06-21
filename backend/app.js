const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const db = require("./services/database");

const passport = require("./services/authService"); // Import passport configuration
const authRoutes = require("./routes/authRoutes");

// Initialize passport middleware
app.use(passport.initialize());

// Use OAuth routes
app.use("/auth", authRoutes);

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use("/api", apiRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
