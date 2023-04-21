import React from 'react';

// Components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Connect from '../components/Connect/Connect';

import styles from '../components/Connect/Connect.module.css';

export default function login() {
  return (
    <div className="login">
      <Header />
      <div className={styles.box}>
        <Connect />
      </div>
      <Footer />
    </div>
  );
}
