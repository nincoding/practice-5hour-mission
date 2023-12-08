export const splitString = (input) => {
  return input.split(',').map((item) => item.trim());
};

export const splitArray = (inputArray) => {
  const [keyArray, valueArray] = inputArray.reduce(
    (result, item) => {
      const [key, value] = item.split('-');

      result[0].push(String(key));
      result[1].push(Number(value));

      return result;
    },
    [[], []]
  );

  return [keyArray, valueArray];
};

export const sumArray = (inputArray) => {
  return inputArray.reduce((acc, value) => acc + value, 0);
};
