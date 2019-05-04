require('module-alias/register')
require('dotenv').config()

const { app } = require('@sdk')

app.boot()