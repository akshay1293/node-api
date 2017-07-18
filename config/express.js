const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const routes = require('../server/routes');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes);

module.exports = app;







