export const validateWordMatch = (synonyms: string[][], input: string) => {
  const syns = synonyms.flatMap(array => array);
  return syns.includes(input);
};
export const isEmpty = (obj: object) => {
  return Object.keys(obj).length === 0;
};
