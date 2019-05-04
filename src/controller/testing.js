const { User } = require('@model')

module.exports = async (id) => ({
  message: 'testing' + id,
  data: await User.find(),
})
