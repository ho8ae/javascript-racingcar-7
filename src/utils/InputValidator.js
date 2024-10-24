import { ERROR_MESSAGE } from "../static/Static.js";

export default class InputValidator {
    static validateCarNames(names) {
      const carNames = names.split(',').map(name => name.trim());
      
      if (carNames.some(name => name.length > 5)) {
        throw new Error(ERROR_MESSAGE.nameLengthError);
      }
      
      if (carNames.some(name => name.length === 0)) {
        throw new Error(ERROR_MESSAGE.nameInputError);
      }
      
      if (new Set(carNames).size !== carNames.length) {
        throw new Error(ERROR_MESSAGE.nameDuplicateError);
      }
      
      return carNames;
    }
  
    static validateAttempts(attempts) {
      const number = Number(attempts);
      
      if (isNaN(number)) {
        throw new Error(ERROR_MESSAGE.triesNumberError);
      }
      
      if (number <= 0) {
        throw new Error(ERROR_MESSAGE.triesZeroError);
      }
      
      return number;
    }
  }