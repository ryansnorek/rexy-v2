export const isWordMatch = (word: any, input: string) => {
  return word.synonyms.includes(input);
}