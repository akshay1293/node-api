const app = require('./config/express');
const config = require('./config/env');
const mongoose = require('mongoose');

mongoose.connect(config.db);
mongoose.connection.on('error', () => {
    throw new Error(`unable to connect to database: ${config.db}`);
});
mongoose.connection.on('connected', () => {
    console.log(`Connected to database: ${config.db}`);
});

if (config.env === 'development') {
    mongoose.set('debug', true);
}


app.listen(config.port, () => {

    console.log(`API Server started and listening on port ${config.port} (${config.env})`);
});

module.exports = app;