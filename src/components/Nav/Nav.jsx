import styles from "./styles.module.scss";

function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">Home</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">Features</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">Community</a>
        </li>
        <li className={styles.nav__item}>
          <a className={styles.nav__link} href="#">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
