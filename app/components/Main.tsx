import styles from './Main.module.css'

export default function Main() {
    return (
        <div className={`${styles['main-wrapper']} grid-wrapper`}>
            <div className={`${styles['bar-a']}`}></div>
            <div className={`${styles['bar-b']}`}></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
