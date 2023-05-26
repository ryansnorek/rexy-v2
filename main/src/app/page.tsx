'use client';
import styles from './page.module.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { useReducer, useRef } from 'react';
import { isMatch } from './utils';
import { userReducer, wordsReducer } from './state/reducers';

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

const initialUser = {
  name: '',
  points: 0,
};

export default function Home() {
  const [words, wordsDispatch] = useReducer(wordsReducer, initialWords);
  const [user, userDispatch] = useReducer(userReducer, initialUser);
  const toast = useRef<Toast | null>(null);

  const onChangeInput = ({ target: payload }: any) => {
    wordsDispatch({ type: 'onChangeInput', payload });
  };

  const handleClick = (id: number, word: string) => {
    if (!id || !initialWords[id]) return;
    const value = words[id][word];

    if (isMatch(initialWords[id], value)) {
      const { points } = initialWords[id];
      toast?.current?.show({ summary: `wordcel +${points}` });
      userDispatch({ type: "addPoints", payload: points })
    }
  };
  return (
    <main className={styles.main}>
      <Toast ref={toast} />
      {Object.entries(initialWords).map(([_id, item]: any) => {
        return (
          <div key={_id}>
            <div>{item.word}</div>
            <InputText id={_id} name={item.word} onChange={onChangeInput} />
            <Button label="w" onClick={() => handleClick(_id, item.word)} />
          </div>
        );
      })}
    </main>
  );
}
