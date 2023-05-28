import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
import { userReducer } from '../state/reducers';
import { UserDispatch, UserState } from '../types/user.type';

interface UserContextProps {
  state: UserState;
  dispatch: UserDispatch;
}

const initialState: UserState = {
  name: '',
  currentInputValue: '',
  points: 0,
};

const UserContext = createContext<UserContextProps>({
  state: initialState,
  dispatch: () => {},
});

export const useUserContext = () => useContext(UserContext);

export function UserProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}
