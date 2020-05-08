const {dateToAge} = require('../../../helpers/common');
const {validateDate} = require('../../../validators/validators');
const yup = require('yup');

exports.filter = async (item, field, date) => {
  // TODO Replace with Yup validation
  validateDate(date);

  const age = dateToAge(date);
  // TODO Remove
  // const valid = await yup.date().isValid(date);

  return item.min_age < age;
};
