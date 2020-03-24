/**
 * Load modules
 */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require("cors");
const morgan = require('morgan');
const helmet = require('helmet');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const path = require("path")


require('dotenv').config();



/**
 * Routers for endpoints
 */
const eventRouter = require('./routes/events');


/**
 * Set up app
 */
const app = express();
const port = process.env.PORT || 3001;

// enhance security with helmet
app.use(helmet());

// parse application/json content-type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// enable all CORS requests
app.use(cors());

app.use('/public', express.static('public'));

// Log HTTP requests
app.use(morgan('combined'));




/**
 * Auth0 Setup
 */
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://`+ process.env.DOMAIN + `/.well-known/jwks.json`
  }),

  // validate the audience and the issuer
  audience: process.env.CLIENT_ID,
  issuer: `https://` + process.env.DOMAIN + '/'
  // algorithms: ['RS256']
});




/**
 * Route to endpoints
 */
app.use(express.static(path.join(__dirname, "..", "client", "build")))

app.use('/events', eventRouter);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});


/**
 * Connect to local database
 */
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/kiskalesi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error.bind(err));


/**
 * Start app
 */
app.listen(port, () => console.log(`Launching Server on port ${port}`));
