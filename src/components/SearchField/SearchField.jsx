import Button from "../Button/Button";
import styles from "./style.module.scss";
import image from "../../assets/icon/search.svg";
import { useState } from "react";
import Gallary from "../Gallary/Gallary";

function SearchField({ onSearch }) {
  const [value, setValue] = useState("");

  function handleCLick() {
    if (value.trim()) {
      onSearch(value.trim());
    }
  }

  return (
    <div className={`${styles.searchFieldInner} container`}>
      <div className={`${styles.searchField}`}>
        <img
          className={styles.searchField__icon}
          src={image}
          alt=""
          width={14}
          height={14}
        />
        <input
          className={styles.searchField__placeholder}
          type="text"
          placeholder="Search for the desired photo..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button size="small" style="search" onClick={() => handleCLick()}>
          Search
        </Button>
      </div>
    </div>
  );
}

export default SearchField;
