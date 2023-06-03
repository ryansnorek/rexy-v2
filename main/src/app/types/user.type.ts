import { userActions } from '../state/user/actions';

export type UserState = {
  user: {
    name: string;
    currentInputValue: string;
    points: number;
  }
}

export enum ACTIONS {
  changeInputValue = 'changeInputValue',
  addPoints = 'addPoints',
}

type Actions = typeof userActions;

export type UserActions = ReturnType<Actions[keyof Actions]>;

