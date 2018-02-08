const path = require('path');
const express = require('express');

var wwwroot = path.join(__dirname, '..', 'wwwroot');

var app = express();

app.use(express.static(wwwroot));

app.get('/', (request, response) => {
    response.send('<p>Hello world!</p>');
})

app.listen(3000, () => {
    console.log('Started Express on Port 3000');
})