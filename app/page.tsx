import Image from 'next/image'
import styles from './page.module.scss'
import Button from './components/Button'

export default function Home() {
    return (
        <div className={styles.wrapper}>
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
            <Button className={styles['content-a']}>See more</Button>
            <div className={`${styles.box} ${styles['bar-right-a']}`}></div>
            <div className={`${styles.box} ${styles['bar-right-b']}`}></div>
        </div>
    )
}
