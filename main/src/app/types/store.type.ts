import { Dispatch } from "react";
import { UserActions, UserState } from "./user.type";
import { WordsActions, WordsState } from "./words.type";
import { storeReducer } from "../state/reducers";

export type AppState = UserState & WordsState;

export type AppDispatch = Dispatch<AppActions>;

export type StoreKey = keyof typeof storeReducer;

type AppActions = UserActions | WordsActions;
