const express = require('express')
const routerRegister = require('./routerRegister')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// fake user middleware
app.use((req, res, next) => {
  req.user = {
    name: 'Daniel Bonifacio',
    id: 'qoiaskdnalkdj1290381'
  }
  next()
})

const port = process.env.PORT || 3000

app.boot = function () {
  routerRegister(this)
  this.listen(port, (err) => {
    if (err) {
      return console.log('Error on service boot: ' + err.message)
    }
    console.log(`Service started at: http://localhost:${port}`)
  })
}

module.exports = app