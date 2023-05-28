import { Dispatch } from 'react';
import { userActions } from '../state/user/actions';

export interface UserState {
  name: string;
  currentInputValue: string;
  points: number;
}

export enum ACTIONS {
  changeInputValue = 'changeInputValue',
  addPoints = 'addPoints',
}

type Actions = typeof userActions;

export type UserActions = ReturnType<Actions[keyof Actions]>;

export type UserDispatch = Dispatch<UserActions>;
