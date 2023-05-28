import { WordsActions, WordsState } from '@/app/types/words.type';

export default function wordsReducer(state: WordsState, action: WordsActions) {
  switch (action.type) {
    case 'setWords': {
      return {
        ...state,
        data: action.payload,
      };
    }
    default:
      return state;
  }
}
