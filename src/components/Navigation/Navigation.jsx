import clsx from "clsx";
import s from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const buildLinkClass = ({ isActive }) => {
    return clsx(s.unActive, isActive && s.active);
  };

  return (
    <>
      <nav className="flex  items-center">
        <ul className="flex gap-x-4">
          <li className={s.item}>
            <NavLink className={buildLinkClass} to="/">
              Домашня
            </NavLink>
          </li>
          {isLoggedIn && (
            <li className={s.item}>
              <NavLink className={buildLinkClass} to="/contacts">
                Контакти
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
