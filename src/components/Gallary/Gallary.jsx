import { useEffect, useState } from "react";
import Card from "../Card.jsx/Card";
import styles from "./style.module.scss";
import Button from "../Button/Button";
import Skeleton from "../skeleton/Skeleton";

const BASE_URL = import.meta.env.VITE_BASE_URL;
const ACCESS_KEY = import.meta.env.VITE_ACCESS_KEY;

function Gallary({ searchQuery }) {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  function apiGet(options = "random", append = true) {
    let url = "";

    if (options === "random") {
      url = `${BASE_URL}/photos/random?count=9&client_id=${ACCESS_KEY}`;
    } else {
      url = `${BASE_URL}/search/photos?query=${searchQuery}&client_id=${ACCESS_KEY}&per_page=9`;
    }

    fetch(url)
      .then((response) => response.json())
      .then((dataResult) => {
        const photos = options === "random" ? dataResult : dataResult.results;

        // Удаление дубликатов
        setData((prevData) => {
          const existingIds = new Set(prevData.map((item) => item.id));
          const newPhotos = photos.filter((item) => !existingIds.has(item.id));
          return append ? [...prevData, ...newPhotos] : newPhotos;
        });

        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при загрузке:", err);
        setIsLoading(false);
      });
  }

  // Загружаем фото при первом рендере или при изменении поискового запроса
  useEffect(() => {
    setIsLoading(true);
    if (searchQuery && searchQuery.trim() !== "") {
      apiGet("search", false); // Новый поиск → заменить старые
    } else {
      apiGet("random", false); // Случайные фото
    }
  }, [searchQuery]);

  return (
    <section className={`${styles.gallaryInner} container`}>
      <div className={styles.gallary}>
        <h1 className={styles.gallary__title}>EXPLORE MOST POPULAR UPLOADS</h1>

        <div className={styles.gallary__body}>
          {isLoading ? (
            <Skeleton />
          ) : (
            data.map((item) => <Card key={item.id} data={item} />)
          )}
        </div>

        <Button
          size="pulledOut"
          style="showMore"
          onClick={() => apiGet(searchQuery ? "search" : "random", true)}
        >
          Show more
        </Button>
      </div>
    </section>
  );
}

export default Gallary;