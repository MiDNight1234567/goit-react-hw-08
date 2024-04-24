import { useDispatch } from "react-redux";

import css from "./UserMenu.module.css";

import { useAuth } from "../../hooks";
import { apiLogoutUser } from "../../redux/auth/operations";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.userMenu}>
      <p className={css.welcome}>Welcome, {user.name}!</p>
      <button
        className={css.logoutBtn}
        type="button"
        onClick={() => dispatch(apiLogoutUser())}
      >
        Logout
      </button>
    </div>
  );
};
