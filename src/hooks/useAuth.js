import { useSelector } from "react-redux";
import {
  selectUserIsRefreshing,
  selectUserData,
  selectUserIsSignedIn,
} from "../redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectUserIsSignedIn);
  const isRefreshing = useSelector(selectUserIsRefreshing);
  const user = useSelector(selectUserData);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
