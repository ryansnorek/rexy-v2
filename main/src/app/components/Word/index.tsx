import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';

interface WordProps {
  id: string;
  word: string;
  onChange: ({ target }: any) => void;
  onClick: (id: string, word: string) => void;
}

export default function Word(props: WordProps) {
  const { id, word } = props;
  return (
    <div className='container'>
      <div>{word}</div>
      <InputText id={id} name={word} onChange={props.onChange} />
      <Button label="w" onClick={() => props.onClick(id, word)} />
    </div>
  );
}
