import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthNav.module.css";

const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.authLink, {
    [css.active]: isActive,
  });

export const AuthNav = () => {
  return (
    <div className={css.authNav}>
      <NavLink className={getNavLinkClassNames} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
