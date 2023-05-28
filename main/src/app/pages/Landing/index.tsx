import Word from '@/app/components/Word';
import { useUser } from '@/app/hooks/useUser';
import { useWords } from '@/app/hooks/useWords';
import { wordsActions } from '@/app/state/words/actions';
import { isEmpty, validateWordMatch } from '@/app/utils';
import { useEffect, ChangeEvent } from 'react';
const initialWords: any = {
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
export default function Landing() {
  const { userState, changeInputValue, addPoints } = useUser();
  const { wordsState, wordsDispatch } = useWords();

  const onChange = function changeInputWord(e: ChangeEvent<HTMLInputElement>) {
    changeInputValue(e.target.value);
  };

  const onClick = function handleClickWord(id: string) {
    const wordObj = wordsState.data[id];
    const input = userState.currentInputValue;
    const isMatch = validateWordMatch(wordObj, input);
    if (isMatch) addPoints(wordObj.points);
  };

  useEffect(() => {
    wordsDispatch(wordsActions.setWords(initialWords));
  }, [wordsDispatch]);

  if (isEmpty(wordsState.data)) {
    return <div></div>;
  }
  return (
    <div className="container">
      <Word
        id={'1'}
        word={wordsState.data[1].word}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}
