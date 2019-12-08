/**
 * Load modules
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");

/**
 * Routers for endpoints
 */
const eventRouter = require('./routes/events');


/**
 * Set up app
 */
const app = express();

app.use(bodyParser.json());
app.use(cors());


/**
 * Route to endpoints
 */
app.use('/events', eventRouter);


/**
 * Connect to local database
 */
mongoose
  .connect('mongodb://localhost:27017/kiskalesi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error.bind(err));


/**
 * Start app
 */
app.listen(3001, () => console.log('Launching Server on port 3001'));
