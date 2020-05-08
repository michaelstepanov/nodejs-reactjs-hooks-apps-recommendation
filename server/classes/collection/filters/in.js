const {validateArray} = require('../../../validators/validators');

exports.filter = async (item, field, val) => {
  validateArray(val);

  return val.includes(item[field]);
};
