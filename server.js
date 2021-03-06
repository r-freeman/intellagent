const express = require('express');
const jwt = require('express-jwt');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongooseConnect = require('./mongoose_connect');
const webhooks = require('./twitter/webhooks');

import passport from 'passport';
import passportUseStrategy from './passport';

// custom middleware modules
const unauthorised = require('./middleware/error_handling/unauthorised');
const notFound = require('./middleware/router_level/not_found');

// setting up passport
passportUseStrategy(passport);
const PUB_KEY = fs.readFileSync('id_rsa_pub.pem', 'utf8');

// initialise the app and port
const app = express();
const PORT = process.env.PORT || 5000;

// contains all the routes
const routes = require('./routes');

// serve the front end from react build directory
app.use(express.static(path.join(__dirname, './client/build')));

// built-in middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// third-party middleware
app.use(cors());
app.use(passport.initialize());

// third-party middleware, checks for valid bearer token on protected routes
app.use('/api/v1', jwt({
    secret: PUB_KEY,
    algorithms: ['RS256']
    // applies to all routes except where path contains auth
}).unless({path: new RegExp('/auth/', 'i')}), routes);

// custom middleware
app.use(unauthorised());
app.use(notFound());

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`);
});

