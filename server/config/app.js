const morgan = require('morgan');
const logger = require('../config/winston');

module.exports = (app) => {
    // Beautify JSON response
    app.set('json spaces', 4);

    // Remove unsecure header
    app.disable('x-powered-by');

    // Add headers
    app.use((req, res, next) => {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });

    app.use(morgan('combined', { stream: logger.stream }));
};
