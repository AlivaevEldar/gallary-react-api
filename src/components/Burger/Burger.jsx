import { useState } from "react";
import styles from "./style.module.scss";

function Burger() {
  const [isActive, SetIsActive] = useState(false);

  return (
    <div
      className={`${styles.burger} ${isActive ? "isActive" : ''}`}
      onClick={() => SetIsActive((prev) => !prev)}
    >
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
      <span className={styles.burger__line}></span>
    </div>
  );
}

export default Burger;
