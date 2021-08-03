const express = require('express');
const morganLogger = require('morgan');
const corsHeader = require('cors');

// Initialize express App
const app = express();

// Add all supported routers here
const ticketsRouter = require('./routes/tickets');

app.use(corsHeader()); // Add CORS Header to API call retuned
app.use(morganLogger('dev')); // Pass request through logger for easier debugging
app.use(express.json()); // Recognize incoming requests as JSON objects

//Route used
app.use('/tickets', ticketsRouter);

// Variable to store supported end points
const supportedEndpointList = {
  'tickets': 'GET',
}

// Catch-all error handler
app.use(function(req, res, next) {
  const error = 'Oops, you reached an unsupported endpoint. Currently supported endpoints include: \n'
      + JSON.stringify(supportedEndpointList)
  res.status(404).send(error);
});


module.exports = app;
