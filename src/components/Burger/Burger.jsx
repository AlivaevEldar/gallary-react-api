import styles from "./style.module.scss";

function Burger() {
  return (
    <div className={`${styles.burger} `}>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
    </div>
  );
}

export default Burger;