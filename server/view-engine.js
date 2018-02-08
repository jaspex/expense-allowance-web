const path = require('path');
const handlebars = require('hbs');

var hbs = (app) => {
    // Configure the handlebars view engine
    var views = path.join(__dirname, '..', 'views');

    // Set the view engine to handlebars
    app.set('viewengine', 'hbs');
    app.set('views', views);
    app.set('view options', {
        layout: 'shared/_layout.hbs'
    });

    // Register helpers
    handlebars.registerHelper('copyrightYear', () => {
        return new Date().getFullYear();
    });
}

module.exports = { hbs }
