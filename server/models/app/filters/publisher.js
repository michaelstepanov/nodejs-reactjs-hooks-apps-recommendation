exports.filter = async (item, field, val) => {
  // Make some async requests
  await wait(300); // TODO Remove

  return item.publisher === 'The result of the check above';
};
