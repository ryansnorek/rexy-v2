'use client';
import { useUser } from '@/app/hooks/useUser';
import { useStore } from '@/app/state/store';
import { validateWordMatch } from '@/app/utils';
import { Button } from 'primereact/button';
import { ProgressBar } from 'primereact/progressbar';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent } from 'react';

type WordDisplayProps = {
  id: string;
  word: string;
  synonyms: string[][];
};

export default function WordDisplay({ id, word, synonyms }: WordDisplayProps) {
  const { dispatch } = useStore();
  const { user, changeInputValue, addPoints } = useUser();
  console.log(user, ' user');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeInputValue(e.target.value);
  };

  const onClick = function handleWordValidation() {
    const input = user.currentInputValue;
    const isMatch = validateWordMatch(synonyms, input);
    if (isMatch) addPoints(1);
  };
  
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
      <div>{word}</div>
      <InputText id={id} name={word} onChange={onChange} />
      <Button label="w" onClick={onClick} />
    </div>
  );
}
