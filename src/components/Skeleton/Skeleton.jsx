import styles from "./style.module.scss"

function Skeleton({width = 300, height = 300}) {
  return <div className={styles.skeleton} style={{width: width, height: height}}></div>;
}

export default Skeleton