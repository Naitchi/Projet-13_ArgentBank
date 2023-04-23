

// Components
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Account from '../components/Account/Account';
import Name from '../components/Name/Name';

// Css
import styles from '../styles/User.module.css';


export default function User() {
  return (
    <div className={styles.Connect}>
      <Header />
      <div className={styles.box}>
        <Name />
        <Account name="Checking" id="8349" count="2,082.79" statut="Available" />
        <Account name="Savings" id="6712" count="10,928.42" statut="Available" />
        <Account name="Credit Card" id="8349" count="184.30" statut="Current" />
      </div>
      <Footer />
    </div>
  );
}
