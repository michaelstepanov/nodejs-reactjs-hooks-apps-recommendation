exports.filter = async (item, field, val) => {
  return item[field] == val;
};
