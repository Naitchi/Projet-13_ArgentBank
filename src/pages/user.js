import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

// Components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Account from '../components/Account/Account';

// Css
import styles from '../styles/User.module.css';

// Services
import { getProfile, modifyProfile } from '../services/user.service';

// Store
import { useDispatch, useSelector } from 'react-redux';
import { setToken } from '../store/slices/authSlice';
import { setUser } from '../store/slices/userSlice';

export default function User() {
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
    <div className={styles.Connect}>
      <Header />

      <div className={styles.box}>
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
                  placeholder={state.user.firstName}
                  onChange={(event) =>
                    setState({
                      ...state,
                      newUser: { ...state.newUser, firstName: event.target.value },
                    })
                  }
                />
                <input
                  placeholder={state.user.lastName}
                  onChange={(event) =>
                    setState({
                      ...state,
                      newUser: { ...state.newUser, lastName: event.target.value },
                    })
                  }
                />
              </div>
              <button onClick={modifyUser}>Save</button>
              <button onClick={changeEdit}>Cancel</button>
            </div>
          )}
          {state.user && !state.edit && <button className={styles.edit} onClick={changeEdit}>Edit Name</button>}
        </div>
        <Account name="test" id="test" count="test" statut="test" />
        <Account name="test" id="test" count="test" statut="test" />
        <Account name="test" id="test" count="test" statut="test" />
      </div>
      <Footer />
    </div>
  );
}
