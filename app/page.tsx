import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.box} ${styles['bar-top']}`}></div>
            <div className={`${styles.box} ${styles['bar-left']}`}></div>
            <div className={`${styles.box} ${styles['title-a']}`}>
                <p>Experiments with desing layouts</p>
            </div>
            <div className={`${styles.box} ${styles['title-b']}`}>
                <p>Typography and layouts </p>
            </div>
            <div className={`${styles.box} ${styles['content-a']}`}>
                <h3>special edition</h3>
            </div>

            <div className={`${styles.box} ${styles['content-b']}`}>
                <p>
                    I am a longer text Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit.
                </p>
            </div>
            <div className={`${styles.box} ${styles['bar-right-a']}`}></div>
            <div className={`${styles.box} ${styles['bar-right-b']}`}></div>
        </div>
    )
}
