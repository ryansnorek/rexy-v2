import { ACTIONS, WordData } from '@/app/types/words.type';

export const wordsActions = {
  setWords: (words: { [key: string]: WordData }) => ({
    type: ACTIONS.setWords,
    payload: words,
  }),
};
