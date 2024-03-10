import Image from 'next/image'
import styles from './page.module.scss'

export default function Home() {
    return (
        <div className={styles.wrapper}>
            <div className={`${styles.box} ${styles['bar-top']}`}></div>
            <div className={`${styles.box} ${styles['bar-left']}`}></div>
            <div className={`${styles.box} ${styles['title']}`}>
                <h1>Experiments with desing layouts</h1>
            </div>
            <div className={`${styles.box} ${styles['subtitle']}`}>
                <p>I am a subtitle</p>
            </div>
            <div className={`${styles.box} ${styles['content-a']}`}>
                <h1>I am a side text</h1>
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
