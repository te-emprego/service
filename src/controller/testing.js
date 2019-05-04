const { User } = require('@model')

module.exports = async (id) => {
  const message = 'testing' + id
  const data = await User.find()

  return {
    message,
    data,
  }
}