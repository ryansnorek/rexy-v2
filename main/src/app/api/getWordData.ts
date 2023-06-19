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

const API_KEY_DICT = '2198e857-77d1-4b12-95fa-0cb2b0e41640';
const API_KEY_THES = '48a1c6e6-220e-47be-9819-8b12a0b13001';
const BASE_URL = 'https://www.dictionaryapi.com/api/v3/references';
const getData = (word: string) => ({
  dictionary: `${BASE_URL}/collegiate/json/${word}?key=${API_KEY_DICT}`,
  thesaurus: `${BASE_URL}/thesaurus/json/${word}?key=${API_KEY_THES}`,
});
const words = ["sad", "safe", "sail", "salt", "same", "sand", "save", "say", "school", "science", "scissors", "search", "seat", "second", "see", "seem", "sell", "send", "sentence", "serve", "seven", "several", "sex", "shade", "shadow", "shake", "shape", "share", "sharp"];

const randomWordUrl = "https://random-words-api.vercel.app/word"
export async function getRandomWord() {
  const max = words.length;
  const min = 0;
  const rand = Math.floor(Math.random() * (max - min + 1)) + min
  // const res = await fetch(randomWordUrl);
  // const data = await res.json();
  return words[rand];
}

export async function getWordData(word: string) {
  const res = await fetch(getData(word).thesaurus, { cache: "no-store"});
  const data = await res.json();
  return data;
}