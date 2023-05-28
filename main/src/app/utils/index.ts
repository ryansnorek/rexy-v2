export const validateWordMatch = (word: any, input: string) => {
  return word.synonyms.includes(input);
};
export const isEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};
