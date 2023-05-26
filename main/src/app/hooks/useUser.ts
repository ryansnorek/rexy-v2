import { useReducer } from "react";
import { userReducer } from "../state/reducers";
import { useToast } from "../context/toastNotifications";
const initialUser = {
  name: '',
  points: 0,
};

export function useUser() {
  const [user, dispatch] = useReducer(userReducer, initialUser);
  const { showToast } = useToast()

  const addPoints = (points: number) => {
    dispatch({ type: 'addPoints', payload: points });
    showToast({ summary: `wordcel +${points}` });
  };
  return {
    user,
    addPoints,
  };
}