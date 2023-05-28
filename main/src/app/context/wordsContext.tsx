import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { wordsReducer } from '../state/reducers';
import { WordData, WordsDispatch, WordsState } from '../types/words.type';

interface WordsContextProps {
  state: WordsState;
  dispatch: WordsDispatch;
}

const initialState: WordsState = {
  currentWord: {} as WordData,
  data: {},
};

const WordsContext = createContext<WordsContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const useWordsContext = () => useContext(WordsContext);

export function WordsProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(wordsReducer, initialState);

  return (
    <WordsContext.Provider value={{ state, dispatch }}>
      {children}
    </WordsContext.Provider>
  );
}
