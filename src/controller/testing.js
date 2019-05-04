const { User } = require('@model');
const { res } = require('@sdk');

module.exports = async id => res.send({
  message: `testing${id}`,
  data: await User.find(),
}, 200);
