export const isMatch = (word: any, input: string) => {
  return word.synonyms.includes(input);
}