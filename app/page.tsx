import Image from "next/image";
import styles from "./page.module.css"

export default function Home() {
  return (
        <div className={styles.wrapper}>
            <div className={`${styles.box} ${styles['bar-top']}`}></div>
            <div className={`${styles.box} ${styles['bar-left']}`}></div>
            <div className={`${styles.box} ${styles['content-b']}`}></div>
            <div className={`${styles.box} ${styles['bar-right-a']}`}></div>
            <div className={`${styles.box} ${styles['content-a']}`}></div>
            <div className={`${styles.box} ${styles['content-c']}`}></div>
            <div className={`${styles.box} ${styles['content-d']}`}></div>
            <div className={`${styles.box} ${styles['bar-right-b']}`}></div>
        </div>
  );
}
