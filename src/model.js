const { Schema, model } = require('@sdk/database')

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = {
  User: model('user', UserSchema)
}
