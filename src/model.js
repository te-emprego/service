const { Schema, model } = require('te-emprego-sdk').database;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = {
  User: model('user', UserSchema),
};
