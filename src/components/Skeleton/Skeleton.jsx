import styles from "./style.module.scss"

function Skeleton({width = 300, height = 300, radius = 0}) {
  return <div className={styles.skeleton} style={{width: width, height: height, borderRadius: radius}}></div>;
}

export default Skeleton