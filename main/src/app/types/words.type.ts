import { Dispatch } from 'react';
import { wordsActions } from '../state/words/actions';

export interface WordsState {
  currentWord: WordData;
  data: {
    [key: string]: WordData;
  };
}

export enum ACTIONS {
  setWords = 'setWords',
}

type Actions = typeof wordsActions;

export type WordsActions = ReturnType<Actions[keyof Actions]>;

export type WordsDispatch = Dispatch<WordsActions>;

export interface WordData {
  id: number;
  word: string;
  synonyms: Array<string>;
  points: number;
}
