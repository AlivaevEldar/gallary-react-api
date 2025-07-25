import styles from "./style.module.scss";
import heart from "../../assets/icon/heart.svg";

function Card({ data }) {
  return (
    <section className={styles.card}>
      <div className={styles.card__wrapperImg} style={{backgroundImage: `url(${data.urls.small_s3})`}}></div>
      <div className={styles.card__body}>
        <div className={styles.card__profile}>
          <img
            className={styles.card__profileImg}
            src={data.user.profile_image.small}
            alt=""
            width={28}
            height={28}
          />
          <div className={styles.card__info}>
            <h5 className={styles.card__name}>{data.user.name}</h5>
            <div className={styles.card__tag}>@{data.user.username}</div>
          </div>
        </div>
        <div className={styles.card__social}>
          <div className={styles.card__socialCount}>{data.likes}</div>
          <img
            className={styles.card__socialHeart}
            src={heart}
            alt=""
            width={16}
            height={14}
          />
        </div>
      </div>
    </section>
  );
}

export default Card;
