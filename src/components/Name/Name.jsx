import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Services
import { getProfile, modifyProfile } from '../../services/user.service';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { removeToken, setToken } from '../../store/slices/authSlice';
import { removeUser, setUser } from '../../store/slices/userSlice';

// Css
import styles from './Name.module.css';

export default function Name() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [state, setState] = useState({ user: {}, edit: false, newUser: {} });
  let token = useSelector((state) => state.auth.token);

  const changeEdit = () => {
    setState({ ...state, edit: !state.edit });
  };

  const modifyUser = async () => {
    const response = await modifyProfile(state.newUser, token);
    if (response === true)
      setState({
        ...state,
        edit: false,
        user: {
          ...state.user,
          firstName: state.newUser.firstName,
          lastName: state.newUser.lastName,
        },
      });
  };

  useEffect(() => {
    const getUser = async () => {
      if (token) {
        const data = await getProfile(token);
        if (!data) {
          dispatch(removeUser());
          dispatch(removeToken());
          localStorage.removeItem('token');
          router.push('/login');
        }
        setState({ ...state, user: data });
        dispatch(setUser(data));
      }
    };
    if (!token && typeof window !== 'undefined') {
      token = JSON.parse(localStorage.getItem('token'));
      if (!token) router.push('/login');
      else dispatch(setToken(token));
    }
    getUser();
  }, [dispatch, router, token]);

  return (
    <div className={styles.top}>
      <p>Welcome back</p>
      {state.user && !state.edit && (
        <p>
          {state.user.firstName} {state.user.lastName} !
        </p>
      )}
      {state.user && state.edit && (
        <div>
          <div>
            <input
              className={styles.input}
              placeholder={state.user.firstName}
              onChange={(event) =>
                setState({
                  ...state,
                  newUser: { ...state.newUser, firstName: event.target.value },
                })
              }
            />
            <input
              className={styles.input}
              placeholder={state.user.lastName}
              onChange={(event) =>
                setState({
                  ...state,
                  newUser: { ...state.newUser, lastName: event.target.value },
                })
              }
            />
          </div>
          <button className={`${styles.edit} ${styles.save}`} onClick={modifyUser}>
            Save
          </button>
          <button className={styles.edit} onClick={changeEdit}>
            Cancel
          </button>
        </div>
      )}
      {state.user && !state.edit && (
        <button className={styles.edit} onClick={changeEdit}>
          Edit Name
        </button>
      )}
    </div>
  );
}
