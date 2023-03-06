import { getFlatPhonesString } from './getFlatPhonesString';
import { flatten } from './flatten';

export const getPhonesArrayForExcel = (phones) => {
  const phonesArray = getFlatPhonesString(phones)
    .split(',')
    .map((item) => (item.includes('M') ? item.split('M') : item));

  return (flatten(phonesArray) as string[])
    .filter((item) => /^(\+7|8)[0-9]{10}$/.test(item))
    .map((item) => ({['Телефон']: item}));
};
