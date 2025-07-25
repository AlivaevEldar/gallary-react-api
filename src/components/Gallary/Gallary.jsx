import { useEffect, useState } from "react";
import Card from "../Card.jsx/Card";
import styles from "./style.module.scss";


function Gallary() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/photos/random?count=9&client_id=${ACCESS_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className={`${styles.gallaryInner} container`}>
      <div className={styles.gallary}>
        <h1 className={styles.gallary__title}>EXPLORE MOST POPULAR UPLOADS</h1>
        <div className={styles.gallary__body}>
          {isLoading
            ? null
            : data.map((item) => <Card key={item.id} data={item} />)}
        </div>
      </div>
    </section>
  );
}

export default Gallary;
