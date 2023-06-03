import React, {
  PropsWithChildren,
  createContext,
  useReducer,
} from 'react';
import { storeReducer } from '../reducers';
import { AppState, AppDispatch, StoreKey } from '@/app/types/store.type';

interface StoreProvider extends PropsWithChildren {
  store: AppState;
}

export const StoreContext = createContext<{
  state: AppState;
  dispatch: AppDispatch;
}>({
  state: {} as AppState,
  dispatch: () => {},
});

function reducer(state: AppState, action: any) {
  return storeReducer[action.type as StoreKey](state, action);
}

export function StoreProvider({ store, children }: StoreProvider) {
  const [state, dispatch] = useReducer(reducer, store);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}


