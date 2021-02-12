const express = require('express');
const routes = require('./routes/index.js');

const app = express();
const PORT = process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`);
});


