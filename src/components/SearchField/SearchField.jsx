import Button from "../Button/Button";
import styles from "./style.module.scss";
import image from "../../assets/icon/search.svg";

function SearchField() {
  return (
    <div className={`${styles.searchFieldInner} container`}>
      <div className={`${styles.searchField}`}>
        <img className={styles.searchField__icon} src={image} alt="" width={14} height={14}/>
        <input className={styles.searchField__placeholder} type="text" placeholder="Search for the desired photo..." />
        <Button size="small" style="search">
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchField;
