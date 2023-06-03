import { wordsActions } from '../state/words/actions';

export type WordsState = {
  words: {
    currentWord: WordData;
    data: {
      [key: string]: WordData;
    };
  }
}

export enum ACTIONS {
  setWords = 'setWords',
}

type Actions = typeof wordsActions;

export type WordsActions = ReturnType<Actions[keyof Actions]>;

export interface WordData {
  id: string;
  word: string;
  synonyms: Array<string>;
  points: number;
}
