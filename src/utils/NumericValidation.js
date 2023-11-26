const isNumeric = (input) => {
  const allNumberRegExp = /^\d+$/;

  return allNumberRegExp.test(input) && !Number.isNaN(Number(input));
};

const isInteger = (input) => {
  return Number.isInteger(Number(input));
};

export { isNumeric, isInteger };
