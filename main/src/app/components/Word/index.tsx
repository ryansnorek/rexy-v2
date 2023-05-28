import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent } from "react";

interface WordProps {
  id: string;
  word: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (id: string) => void;
}

export default function Word(props: WordProps) {
  const { id, word } = props;
  return (
    <div className="container">
      <div>{word}</div>
      <InputText id={id} name={word} onChange={props.onChange} />
      <Button label="w" onClick={() => props.onClick(id)} />
    </div>
  );
}
