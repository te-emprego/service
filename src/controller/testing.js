const Testing = require('@model')

const removeUserId = (user) => {
  const userWithoutId = { ...user }
  delete userWithoutId.id
  return userWithoutId
}

module.exports = async (id, user) => {
  const message = 'testing' + id
  const newUser = removeUserId(user)

  const data = await Testing.find()

  return {
    message,
    data,
    user: newUser
  }
}