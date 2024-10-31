
import clsx from 'clsx';
import s from './AuthNav.module.css'
import { NavLink } from 'react-router-dom';

const AuthNav = () => {

  const buildLinkClass = ({ isActive }) => {
  return clsx(s.unActive, isActive && s.active);
};
  return (
      <>
          <nav className={s.nav}>
              <ul className='flex gap-x-4'>
                  <li className={s.item}>
                    <NavLink className={buildLinkClass} to="/register">Register</NavLink>
                </li>
                  <li className={s.item}>
                    <NavLink className={buildLinkClass} to="/login">Log in</NavLink>
                </li>
              </ul>
        </nav>
    </>
  )
}

export default AuthNav