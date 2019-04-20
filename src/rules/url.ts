import { isURL } from 'validator';
import { assign, isNullOrUndefined } from '../utils';

const validate = (value: any, options: any = {}) => {
  if (isNullOrUndefined(value)) {
    value = '';
  }

  const validatorOptions = assign({}, options);

  if (Array.isArray(value)) {
    return value.every(val => isURL(val, validatorOptions));
  }

  return isURL(value, validatorOptions);
};

export {
  validate
};

export default {
  validate
};