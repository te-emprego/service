require('module-alias/register');
require('dotenv').config();
const mapping = require('../mapping.json');

const { app } = require('@sdk');

app.boot(mapping);
