import { AppState } from "@/app/types/store.type"
import { WordsActions } from "@/app/types/words.type"

export const wordsReducer = {
  setWords: (state: AppState, action: WordsActions) => {
    return {
      ...state,
      words: {
        ...state.words,
        data: action.payload,
      }
    }
  }
}