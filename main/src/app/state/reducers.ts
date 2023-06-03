import { userReducer } from './user/reducer';
import { wordsReducer } from './words/reducer';

export const storeReducer = { ...userReducer, ...wordsReducer };
