const express = require('express');
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./database/connections');
require('dotenv').config();


/* ***********************
 * Middleware for express sessions
 * ************************/


// Express Messages Middleware


// will allow the cookie parser to be
// implemented throughout the project.


// JWT mildware



/* ***********************
 * View Engine and Template
 *************************/
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layouts', './layouts/layout')

/* ***********************
 * Routes
 *************************/


/****************** 
*  Gets and renders the index page at the root of the folder
*********************/





// File Not Found Route - must be last route in list


// JWT mildware


/* ***********************
* Express Error Handler
* Place after all other middleware
*************************/


// Start server
const host = process.env.HOST;
const port = process.env.PORT || 8080;
const app = express();

// Connect to mongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server running on ${host}:${port}`);
});
