const express = require('express');
const configureServer = require('./config/server');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Configure middleware
configureServer(app);

// API routes
app.use('/api/users', userRoutes);

module.exports = app;
