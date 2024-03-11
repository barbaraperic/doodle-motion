import styles from './Main.module.scss'

export default function Main() {
    return (
        <div className={`${styles['main-wrapper']}`}>
            <div className={`${styles['bar-a']}`}></div>
            <div className={`${styles['bar-b']}`}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
