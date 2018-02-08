const path = require('path');
const express = require('express');

const homeController = require('./../../controllers/homeController.js');

// Set the root folder for static files
var wwwroot = path.join(__dirname, '..', 'wwwroot');

module.exports.routeConfig = (app) => {
    app.use(express.static(wwwroot));

    app.get('/', (request, response) => {
       homeController.index(request, response);
    });
}
