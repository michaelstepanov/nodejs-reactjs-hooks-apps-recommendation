require('dotenv').config();
const express = require('express');
const app = express();
const nocache = require('nocache');
const logger = require('./config/winston');
const port = process.env.PORT || 3001;

require('./config/app')(app);

// Routes
app.use('/api/v1', nocache(), require('./routes/index'));

// Error handler
app.use((err, req, res, next) => {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = (req.app.get('env') === 'development') ? err : {};

  // Add this line to include winston logging
  logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

  // Render the error page
  res.status(err.status || 500);
  res.json({
    message: 'An error occurred',
  });
});

// Unhandled routes
app.all('*', (req, res) => {
  res.status(404).send({message: 'Not Found'})
});

app.listen(port, () => {
    console.log(`Listening on *:${port}...`);
});

process
  .on('unhandledRejection', (reason, p) => {
      console.error(reason, 'Unhandled Rejection at Promise', p);
      // TODO Send an alert message to email or Slack
  })
  .on('uncaughtException', err => {
      console.error(err, 'Uncaught Exception thrown');
      // TODO Send an alert message to email or Slack
      process.exit(1);
  });
