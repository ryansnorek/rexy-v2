import { useContext } from "react";
import { StoreContext } from "./context/StoreContext";
import { AppState } from "../types/store.type";

const initialState: AppState = {
  user: {
    name: '',
    currentInputValue: '',
    points: 0,
  },
  words: {
    currentWord: {
      id: '',
      word: '',
      synonyms: [],
      points: 0,
    },
    data: {},
  },
};

export const useStore = () => useContext(StoreContext);

export { initialState as store }