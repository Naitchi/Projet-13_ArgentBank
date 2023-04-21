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

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.auth.token);

  const logout = () => {
    dispatch(removeUser());
    dispatch(removeToken());
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className={styles.header}>
      <a href="/">
        <img className={styles.logo} src="/img/argentBankLogo.png" alt="Logo de ArgentBank" />
      </a>
      {!token && (
        <a href="/login" className={styles.connect}>
          <i className="fa fa-user-circle"></i>
          Sign in
        </a>
      )}
      {token && (
        <div>
          <a href="/user">
            <i className="fa fa-user-circle"></i>
            {user.firstName}
          </a>
          <a onClick={logout}>
            <i className="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
