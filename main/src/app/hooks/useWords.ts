import { useWordsContext } from '../context/wordsContext';

export function useWords() {
  const { state, dispatch } = useWordsContext();
  console.log('words: ', state);

  return {
    wordsState: state,
    wordsDispatch: dispatch,
  };
}
