import Gallary from "../../components/Gallary/Gallary";
import SearchField from "../../components/SearchField/SearchField";
import styles from "./style.module.scss";

function Main() {
  return (
    <section className={styles.main}>
      <SearchField />
      <p className={`${styles.p} container`}>
        This site was created for you to manage and find the desired photo
        uploaded by people at the highest price and lowest price
      </p>
      <Gallary />
    </section>
  );
}

export default Main;
