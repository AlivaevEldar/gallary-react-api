import styles from "./styles.module.scss";

function Button({ children, size = "medium", style = "LogIn", onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[style]}`}
      type="button"
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
}

export default Button;
