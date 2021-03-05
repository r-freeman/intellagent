const express = require('express');
const jwt = require('express-jwt');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const mongooseConnect = require('./mongoose_connect');

import passport from 'passport';
import passportUseStrategy from './passport';
// const webhooks = require('./twitter/webhooks');

passportUseStrategy(passport);

const PUB_KEY = fs.readFileSync('id_rsa_pub.pem', 'utf8');

const routes = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// serve the front end from react build directory
app.use(express.static(path.join(__dirname, './client/build')));

// middleware for protecting all routes except auth routes
app.use('/api/v1', jwt({
    secret: PUB_KEY,
    algorithms: ['RS256']
}).unless({path: new RegExp('/auth/', 'i')}), routes);

// custom error handler for jwt route guard
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
        res.status(401).send({error: 'Unauthorised'});
    }
    // next();
})

// return not found error if route does not exist
app.use(function (req, res, next) {
    if (!req.route) {
        res.status(404).send();
        return;
    }
    next();
});

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`);
});

