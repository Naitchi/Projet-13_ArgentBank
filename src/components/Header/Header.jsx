import { useRouter } from 'next/router';
import React from 'react';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { removeToken } from '../../store/slices/authSlice';
import { removeUser } from '../../store/slices/userSlice';

// Css
import styles from './Header.module.css';

function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const home = '/';
  const login = '/login';
  const profile = '/user';

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.token);

  const logout = (e) => {
    e.preventDefault();
    dispatch(removeUser());
    dispatch(removeToken());
    localStorage.removeItem('token');
    router.push(login);
  };

  const redirectHome = (e) => {
    e.preventDefault();
    router.push(home);
  };

  const redirectProfile = (e) => {
    e.preventDefault();
    router.push(profile);
  };

  const redirectLogin = (e) => {
    e.preventDefault();
    router.push(login);
  };

  return (
    <div className={styles.header}>
      <a href={home} onClick={redirectHome}>
        <img className={styles.logo} src="/img/argentBankLogo.png" alt="Logo de ArgentBank" />
      </a>
      {!token && (
        <a href={login} onClick={redirectLogin} className={styles.connect}>
          <i className="fa fa-user-circle"></i>
          Sign in
        </a>
      )}
      {token && (
        <div>
          <a href={profile} onClick={redirectProfile} className={styles.connect}>
            <i className={`fa fa-user-circle ${styles.icon}`}></i>
            {user.firstName}
          </a>
          <a href={login} onClick={logout} className={styles.connect}>
            <i className={`fa fa-sign-out ${styles.icon}`}></i>
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
