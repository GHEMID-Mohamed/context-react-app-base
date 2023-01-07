import { User } from "domain/models";
import { useReducer } from "react";
import { defaultUserContext, UserContext } from "./context";
import userReducer from "./reducer";

type UserProviderProps = {
  children: JSX.Element;
  defaultValue?: User;
};

const UserProvider = ({ children, defaultValue }: UserProviderProps) => {
  const initValue = defaultValue || defaultUserContext.state;
  const [state, dispatch] = useReducer(userReducer, initValue);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider };
