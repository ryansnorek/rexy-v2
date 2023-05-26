import Word from "../Word";

interface WordListProps {
  words: any;
  onChange: ({ target }: any) => void;
  onClick: (id: string, word: string) => void;
}

export default function WordList(props: WordListProps) {
  const { words, onChange, onClick } = props;
  return (
   <div className="container">
     {Object.entries(words).map(([id, { word }]: any) => {
      return (
        <Word
          key={id}
          id={id}
          word={word}
          onChange={onChange}
          onClick={onClick}
        />
      );
    })}
   </div>
  )
}