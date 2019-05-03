const express = require('express')
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

app.init = function () {
  this.listen(3000, (err) => {
    if (err) {
      return console.log('Error on service boot: ' + err.message)
    }
    console.log('Service started at: http://localhost:3000')
  })
}

module.exports = app