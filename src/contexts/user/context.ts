import { User } from "domain/models";
import { createContext, Dispatch } from "react";
import { UserAction } from "./reducer";

export const defaultUserContext: UserContextType = {
  state: { isLoggedIn: false, age: 0, mode: undefined },
  dispatch: () => {},
};

export type UserContextType = {
  state: User;
  dispatch: Dispatch<UserAction>;
};

export const UserContext = createContext<UserContextType>(defaultUserContext);
