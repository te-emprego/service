require('module-alias/register')
require('dotenv').config()

const { app, routerRegister } = require('@sdk')

routerRegister(app)

app.init()