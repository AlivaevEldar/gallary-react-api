import styles from "./styles.module.scss";

function Button({ children, size = "medium", style = "LogIn" }) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[style]}`}
      type="button"
    >
      {children}
    </button>
  );
}

export default Button;
