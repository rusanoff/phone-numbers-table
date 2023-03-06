export const getFlatPhonesString = (value: string) => {
  return value
    .replace(/\s/g, '')
    .replace(/-/g, '')
    .replace(/\(/g, '')
    .replace(/\)/g, '')
};
