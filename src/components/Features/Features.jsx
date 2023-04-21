import styles from './Features.module.css';

function Features() {
  return (
    <div className={styles.features}>
      <div className={styles.feature}>
        <img
          className={styles.icon}
          src="/img/icon-chat.png"
          alt="Icone de bulle de conversation"
        />
        <h3 className={styles.title}>You are our #1 priority</h3>
        <p className={styles.text}>
          Need to talk to a representative? You can get in touch through our 24/7 chat or through a
          phone call in less than 5 minutes.
        </p>
      </div>
      <div className={styles.feature}>
        <img className={styles.icon} src="/img/icon-money.png" alt="Icone de plusieurs billets" />
        <h3 className={styles.title}>More savings means higher rates</h3>
        <p className={styles.text}>
          The more you save with us, the higher your interest rate will be!
        </p>
      </div>
      <div className={styles.feature}>
        <img className={styles.icon} src="/img/icon-security.png" alt="Icone de bouclier" />
        <h3 className={styles.title}>Security you can trust</h3>
        <p className={styles.text}>
          We use top of the line encryption to make sure your data and money is always safe.
        </p>
      </div>
    </div>
  );
}

export default Features;
