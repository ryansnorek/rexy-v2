import WordList from '@/app/components/WordList';
import { useWords } from '@/app/hooks/useWords';

export default function Landing() {
  const { words, changeWordInput, checkWordMatch } = useWords();

  const onChangeInput = ({ target: payload }: any) => {
    changeWordInput(payload);
  };

  const handleClick = (id: string, input: string) => {
    checkWordMatch(id, input);
  };
  return (
    <div className="container">
      <WordList words={words} onChange={onChangeInput} onClick={handleClick} />
    </div>
  );
}
