const httpRequest = require('request');

var apiUrl = 'https://safe-sierra-84428.herokuapp.com';

module.exports.index = (request, response) => {
    // Get all finances from the database
    var options = {
        url: `${apiUrl}/expenses`
      , json: true
      , headers: {
          'x-auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTdjYjMwY2E3Nzg5MTAwMTQwMTlmNzYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTE4MTIxNzQxfQ.UgQxBuIwXB4kYLwd9tfjDAPI9k49JZepG_K7CU9nOT4'
      }
    };

    httpRequest(options, (error, httpResponse, body) => {
        if (error) {
            return response
                    .status(400)
                    .send();
        }

        response.render('home/index.hbs', {
            expenses: body
        });
    });
}