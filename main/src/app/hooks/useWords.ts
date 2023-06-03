import { useEffect } from 'react';
import { useStore } from '../state/store';

const API_KEY_DICT = '2198e857-77d1-4b12-95fa-0cb2b0e41640';
const API_KEY_THES = '48a1c6e6-220e-47be-9819-8b12a0b13001';
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references';
const url = {
  dictionary: `${BASE_URL}/collegiate/json/voluminous?key=${API_KEY_DICT}`,
  thesaurus: `${BASE_URL}/thesaurus/json/umpire?key=${API_KEY_THES}`,
};
const words = ["sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school", "science", "scissors", "search", "seat", "second", "see", "seem", "sell", "send", "sentence", "serve", "seven", "several", "sex", "shade", "shadow", "shake", "shape", "share", "sharp"];



export function useWords() {
  const { state, dispatch } = useStore();
  console.log('words: ', state.words);

  useEffect(() => {

  }, [])


  return {
    words: state.words,
  };
}
