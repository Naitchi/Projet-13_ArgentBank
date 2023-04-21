import styles from './Hero.module.css';

export default function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.box}>
        <p className={styles.highlighted}>No fees.</p>
        <p className={styles.highlighted}>No minimum deposit.</p>
        <p className={styles.highlighted}>High interest rates.</p>
        <p className={styles.text}>Open a savings account with Argent Bank today!</p>
      </div>
    </div>
  );
}
