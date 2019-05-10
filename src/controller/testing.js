const { User } = require('@model');
const { res, log } = require('te-emprego-sdk');

module.exports = async (id) => {
  log.info(`Requested id: ${id}`);

  return res.send({
    message: `testing: ${id}`,
    data: await User.find(),
  }, 200);
};
