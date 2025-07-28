const express = require('express');
const connectDB = require('./database/connections');
require('dotenv').config();

// Start server
const host = process.env.HOST;
const port = process.env.PORT || 8080;
const app = express();

// Connect to mongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server running on ${host}:${port}`);
});
