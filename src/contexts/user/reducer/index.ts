import { User } from "domain/models";
import { UserActions } from "./actions";

export type UserAction = {
  type: UserActions;
  payload?: any;
};

const userReducer = (state: User, action: UserAction): User => {
  switch (action.type) {
    case UserActions.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
      };
    case UserActions.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    case UserActions.CHANGE_AGE:
      return {
        ...state,
        age: action.payload,
      };
    case UserActions.CHANGE_MODE:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
