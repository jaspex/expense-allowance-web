const path = require('path');
const express = require('express');

const {hbs} = require('./view-engine.js');
const routes = require('./routes/routes.js');

// Create our ExpressJs app
var app = express();

// Register and configure the view engine
hbs(app);

// Register routes
routes.routeConfig(app);

// Move this to config file
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started Express on port ${port}`);
});

