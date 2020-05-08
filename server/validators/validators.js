const {isValidDate} = require('../helpers/common');
const AppError = require('../errors/AppError');

exports.validateArray = array => {
  if (!Array.isArray(array)) {
    throw new AppError('The value should contain an array.', 422);
  }
};

exports.validateDate = date => {
  if (!isValidDate(date)) {
    throw new AppError('The value should contain a date in YYYY-MM-DD format.', 422);
  }
};
