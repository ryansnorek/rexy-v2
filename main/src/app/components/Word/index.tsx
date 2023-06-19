'use client'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { ChangeEvent } from "react";

interface WordProps {
  id: string;
  word: string;
  onClick: (id: string) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Word({ id, word, onClick, onChange }: WordProps) {  
  return (
    <div className="container">
      <div>{word}</div>
      <InputText id={id} name={word} onChange={onChange} />
      <Button label="w" onClick={() => onClick(id)} />
    </div>
  );
}
