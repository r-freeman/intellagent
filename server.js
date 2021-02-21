const express = require('express');
const mongooseConnect = require('./mongoose_connect');
const webhooks = require('./twitter/webhooks');

const routes = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/v1', routes);

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