import { ACTIONS } from '@/app/types/user.type';

export const userActions = {
  changeInputValue: (value: string) => ({
    type: ACTIONS.changeInputValue,
    payload: value,
  }),
  addPoints: (points: number) => ({
    type: ACTIONS.addPoints,
    payload: points,
  }),
};
