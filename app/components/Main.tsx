import styles from './Main.module.css'

export default function Main() {
    return (
        <div className={`${styles['main-wrapper']} grid-wrapper`}>
            <div className={`${styles['bar-a']}`}></div>
            <div className={`${styles['bar-b']}`}></div>
            <div className={`${styles['rotated-text']}`}>
                <p>Some text</p>
            </div>
            <div className={`${styles['dot-a']}`}></div>
            <div className={`${styles['dot-b']}`}></div>
            <div></div>
            <div></div>
        </div>
    )
}
