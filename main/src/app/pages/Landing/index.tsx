import Word from '@/app/components/Word';
import { useUser } from '@/app/hooks/useUser';
import { useWords } from '@/app/hooks/useWords';
import { wordsActions } from '@/app/state/words/actions';
import { isEmpty, validateWordMatch } from '@/app/utils';
import { useEffect, ChangeEvent, useState } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { useStore } from '@/app/state/store';

const initialWords: any = {
  1: {
    id: 1,
    word: 'maybe',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 10,
  },
  2: {
    id: 2,
    word: 'help',
    synonyms: ['assist', 'aid', 'help out', 'succor'],
    points: 30,
  },
  3: {
    id: 3,
    word: 'mad',
    synonyms: ['angry', 'furious', 'infuriating', 'irate', 'raging', 'enraged'],
    points: 10,
  },
  4: {
    id: 4,
    word: 'check',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 10,
  },
  5: {
    id: 5,
    word: 'get',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 10,
  },
  6: {
    id: 6,
    word: 'choose',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 10,
  },
  7: {
    id: 7,
    word: 'ask',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 10,
  },
  8: {
    id: 8,
    word: 'tell',
    synonyms: ['perhaps', 'possibility', 'conceivably', 'happen'],
    points: 10,
  },
};
export default function Landing() {
  const { dispatch } = useStore();
  const { user, changeInputValue, addPoints } = useUser();
  const { words } = useWords();
  const [activeIndex, setActiveIndex] = useState(1);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeInputValue(e.target.value);
  };

  const onClick = function handleWordValidation(id: string) {
    const wordObj = words.data[id];
    const input = user.currentInputValue;
    const isMatch = validateWordMatch(wordObj, input);
    if (isMatch) addPoints(wordObj.points);
  };

  useEffect(() => {
    dispatch(wordsActions.setWords(initialWords));
  }, [dispatch]);

  useEffect(() => {
    setActiveIndex((prev) => prev + 1);
  }, [user.points]);

  if (isEmpty(words.data)) {
    return <div></div>;
  }
  return (
    <div className="container">
      <ProgressBar
        value={user.points}
        displayValueTemplate={(value) => (
          <>
            {value}/<b>100</b>
          </>
        )}
      />
      <Word
        id={words.data[activeIndex]?.id}
        word={words.data[activeIndex]?.word}
        onChange={onChange}
        onClick={onClick}
      />
    </div>
  );
}
