require('module-alias/register');
require('dotenv').config();

const { app, path } = require('te-emprego-sdk');
const mapping = require('../mapping.json');

app.boot(mapping, path(__dirname));
