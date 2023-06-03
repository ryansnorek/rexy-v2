import { useEffect } from 'react';
import { prisma } from '../db';
import { userActions } from '../state/user/actions';
import { useToast } from './useToast';
import { useStore } from '../state/store';

export function useUser() {
  const { state, dispatch } = useStore();

  console.log('user: ', state.user);
  
  const { showToast } = useToast();
  
  const changeInputValue = (value: string) => {
    dispatch(userActions.changeInputValue(value));
  };
  const addPoints = (points: number) => {
    dispatch(userActions.addPoints(points));
    showToast({ summary: `wordcel +${points}` });
  };
  // prisma.user.create({ data: { name: "ryan" }})
  
  const getData = () => {
    //return prisma.user.findMany()
  }

  // const userData = await getData()

  
  return {
    user: state.user,
    changeInputValue,
    addPoints,
  };
}
