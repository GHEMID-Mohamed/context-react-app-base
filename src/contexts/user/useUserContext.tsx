import { useContext } from "react"
import { UserContext } from "./context";

const useUserContext = () => {
    const { state, dispatch } = useContext(UserContext);
    return { state, dispatch }
}

export { useUserContext }