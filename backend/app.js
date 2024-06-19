

const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const db = require('./services/database');

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api', apiRoutes);

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
