import Burger from "../Burger/Burger";
import Button from "../Button/Button";
import Logo from "../logo/Logo";
import Nav from "../Nav/Nav";
import styles from "./styles.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <ul className={styles.header__list}>
        <li className={styles.header__item}>
          <Logo />
        </li>
        <li className={styles.header__item}>
          <Nav />
        </li>
        <div className={styles.header__wrapper}>
          <li className={styles.header__item}>
            <div className={styles.header__authButtons}>
              <Button>Log in</Button>
              <Button style="SignUp">Sign up</Button>
            </div>
          </li>
          <li className={styles.header__item}>
            <Burger />
          </li>
        </div>
      </ul>
    </header>
  );
}

export default Header;
