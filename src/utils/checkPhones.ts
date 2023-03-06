import { getFlatPhonesString } from './getFlatPhonesString';

export const checkPhones = (value: string) => {
  const regExp = /(\+7|8)[0-9]{10}/gm;
  const flatValue = getFlatPhonesString(value);

  return regExp.test(flatValue);
};
