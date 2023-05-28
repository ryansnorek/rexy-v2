import { isNumber, isString } from "@/app/types/guards";
import { UserActions, UserState } from "@/app/types/user.type";

export default function userReducer(state: UserState, action: UserActions): UserState {
  switch (action.type) {
    case 'changeInputValue': {
      if (isNumber(action.payload)) return state;
      return {
        ...state,
        currentInputValue: action.payload,
      };
    }
    case 'addPoints': {
      if (isString(action.payload)) return state;
      return {
        ...state,
        points: state.points + action.payload,
      };
    }
    default: return state;
  }
}
