import styles from './Account.module.css';

export default function Account(props) {
  const { name, id, count, statut } = props;
  return (
    <div className={styles.Account}>
      <div className={styles.box}>
        <div className={styles.left}>
          <p className={styles.title}>
            Argent Bank {name} (x{id})
          </p>
          <p className={styles.count}>${count}</p>
          <p className={styles.statut}>{statut} Balance</p>
        </div>
        <button className={styles.view}>View transactions</button>
      </div>
    </div>
  );
}
