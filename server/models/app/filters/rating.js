const {wait} = require('../../../helpers/common');

exports.filter = async (item, field, val) => {
  // Make some async requests
  await wait(100); // TODO Remove

  return item[field] >= val;
};
