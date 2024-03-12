import Button from './Button'
import styles from './Header.module.css'

export default function Header() {
    return (
        <div className={`grid-wrapper ${styles['header-wrapper']} `}>
            <div className={`${styles.box} ${styles['bar-top']}`}></div>
            <div className={`${styles.box} ${styles['bar-left']}`}></div>
            <div className={`${styles.box} ${styles['subtitle-a']}`}>
                <p>Experiments with desing layouts</p>
            </div>
            <div className={`${styles.box} ${styles['title']}`}>
                <h2>Title</h2>
            </div>
            <div className={`${styles.box} ${styles['subtitle-b']}`}>
                <p>Typography and layouts </p>
            </div>
            <Button className={styles['content-a']}>see more</Button>
            <div className={`${styles.box} ${styles['bar-right-a']}`}></div>
            <div className={`${styles.box} ${styles['bar-right-b']}`}></div>
        </div>
    )
}
