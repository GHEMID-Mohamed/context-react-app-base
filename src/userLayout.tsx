import { UserActions } from "contexts/user/reducer/actions";
import { useUserContext } from "contexts/user/useUserContext";

const UserLayout = () => {
  const { state, dispatch } = useUserContext();

  const incrementAge = () => {
    dispatch({
      type: UserActions.CHANGE_AGE,
      payload: state.age + 1,
    });
  };

  return (
    <div>
      <div>age : {state.age}</div>
      <button onClick={incrementAge}>increment age</button>
    </div>
  );
};

export { UserLayout };
