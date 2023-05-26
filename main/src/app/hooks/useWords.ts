import { useReducer } from "react";
import { wordsReducer } from "../state/reducers";
import { isWordMatch } from "../utils";
import { useUser } from "./useUser";
const words: any = {
  1: {
    id: 1,
    word: 'maybe',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 1,
  },
  2: {
    id: 2,
    word: 'help',
    synonyms: ['assist', 'aid', 'help out', 'succor'],
    points: 3,
  },
  3: {
    id: 3,
    word: 'mad',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 1,
  },
  4: {
    id: 4,
    word: 'check',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 1,
  },
  5: {
    id: 5,
    word: 'get',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 1,
  },
  6: {
    id: 6,
    word: 'choose',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 1,
  },
  7: {
    id: 7,
    word: 'ask',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 1,
  },
  8: {
    id: 8,
    word: 'tell',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 1,
  },
};

export function useWords() {
  const [inputWords, dispatch] = useReducer(wordsReducer, {});
  const { addPoints } = useUser();

  const changeWordInput = (payload: any) => {
    dispatch({ type: 'onChangeInput', payload });
  };

  const checkWordMatch = (id: string, input: string) => {
    if (!id || !inputWords[id]) return;
    const inputValue = inputWords[id][input];
    if (isWordMatch(words[id], inputValue)) {
      const { points } = words[id];
      addPoints(points);
    }
  }

  return {
    words,
    inputWords,
    changeWordInput,
    checkWordMatch,
  };
}