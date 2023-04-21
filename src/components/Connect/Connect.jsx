import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../services/user.service';
import { setToken } from '../../store/slices/authSlice';

// Css
import styles from './Connect.module.css';

export default function Connect() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [state, setState] = useState({
    user: { email: '', password: '' },
    token: '',
    remember: false,
  });
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    setState({ ...state, token: token });
    if (token) router.push('/user');
  }, [token]);

  const handleClick = async () => {
    const token = await login(state.user);
    if (token) {
      if (state.remember) localStorage.setItem('token', JSON.stringify(token));
      else localStorage.removeItem('token');
      dispatch(setToken(token));
    }
  };

  return (
    <div className={styles.connect}>
      <i className={'fa fa-user-circle ' + styles.icon}></i>
      <h1>Sign In</h1>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="username">
          Username
        </label>
        <input
          onChange={(event) =>
            setState({
              ...state,
              user: { ...state.user, email: event.target.value },
            })
          }
          className={styles.input}
          id="username"
          type="text"
        />
      </div>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor="password">
          Password
        </label>
        <input
          onChange={(event) =>
            setState({
              ...state,
              user: { ...state.user, password: event.target.value },
            })
          }
          className={styles.input}
          id="password"
          type="password"
        />
      </div>
      <div className={styles.remember}>
        <input
          id="remember"
          type="checkbox"
          onChange={(event) =>
            setState({
              ...state,
              remember: event.target.checked,
            })
          }
        />
        <label className={styles.labelcheckbox} htmlFor="remember">
          Remember me
        </label>
      </div>
      <button onClick={handleClick} className={styles.button}>
        Sign In
      </button>
    </div>
  );
}
