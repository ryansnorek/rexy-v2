import { useUserContext } from '../context/userContext';
import { userActions } from '../state/user/actions';
import { useToast } from './useToast';

export function useUser() {
  const { state, dispatch } = useUserContext();
  console.log('user: ', state);

  const { showToast } = useToast();

  const changeInputValue = (value: string) => {
    dispatch(userActions.changeInputValue(value));
  };
  const addPoints = (points: number) => {
    dispatch(userActions.addPoints(points));
    showToast({ summary: `wordcel +${points}` });
  };

  return {
    userState: state,
    userDispatch: dispatch,
    changeInputValue,
    addPoints,
  };
}
