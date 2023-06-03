import { isNumber, isString } from "@/app/types/guards";
import { AppState } from "@/app/types/store.type";
import { UserActions } from "@/app/types/user.type";

export const userReducer = {
  changeInputValue: (state: AppState, action: UserActions) => {
    if (isNumber(action.payload)) return state;
    return {
      ...state,
      user: {
        ...state.user,
        currentInputValue: action.payload,
      },
    };
  },
  addPoints: (state: AppState, action: UserActions) => {
    if (isString(action.payload)) return state;
    return {
      ...state,
      user: {
        ...state.user,
        points: state.user.points + action.payload,
      },
    };
  },
}
