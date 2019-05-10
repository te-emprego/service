const { User } = require('@model');
const { res } = require('te-emprego-sdk');

const getUser = async (name) => {
  const user = await User.find({ name });
  return user
    ? ' You\'re part of this site'
    : ' You\'re not part of this site';
};

module.exports = async name => res.send({
  message: `Hello, ${name || 'World'}
  ${getUser(name)}`,
}, 200);
