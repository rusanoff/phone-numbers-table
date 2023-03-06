export const flatten = <T>(array: T[]): T[] => {
  return array.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
};
