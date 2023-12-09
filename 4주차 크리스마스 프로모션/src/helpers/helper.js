export const addCommasToAmount = (amount) => {
  const formattedNumber = new Intl.NumberFormat('ko-KR').format(amount);

  return formattedNumber;
};
