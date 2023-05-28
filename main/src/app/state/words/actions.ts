import { ACTIONS, WordData } from "@/app/types/words.type";

export const wordsActions = {
  setWords: (words: WordData[]) => ({ 
    type: ACTIONS.setWords, 
    payload: words,
  }),
};
