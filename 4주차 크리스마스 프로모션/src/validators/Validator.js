import CustomError from '../errors/CustomError.js';
import Validation from './Validation.js';

const Validator = {
  validateDate(input) {
    const validateEmptyString = Validation.isEmptyString(input);
    const validateInteger = Validation.isValidInteger(input);
    const validateRange = Validation.isValidRange(input, 1, 31);

    if (validateEmptyString || !validateInteger || !validateRange) {
      throw new CustomError('유효하지 않은 날짜입니다. 다시 입력해 주세요.');
    }
  },

  validateOrder(input) {
    const validateEmptyString = Validation.isEmptyString(input);

    if (validateEmptyString) {
      throw new CustomError('유효하지 않은 주문입니다. 다시 입력해 주세요.');
    }
  },
};

export default Validator;
