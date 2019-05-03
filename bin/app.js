require('module-alias/register')

const { app, routerRegister } = require('@sdk')

routerRegister(app)

app.init()