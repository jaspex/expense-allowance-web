const path = require('path');
const express = require('express');

var wwwroot = path.join(__dirname, '..', 'wwwroot');

var app = express();

app.use(express.static(wwwroot));

app.get('/', (request, response) => {
    response.send('<p>Hello world!</p>');
})

// Move this to config file
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Started Express on port ${port}`);
})