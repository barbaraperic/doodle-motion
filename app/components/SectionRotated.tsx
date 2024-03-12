import styles from './SectionRotated.module.css'

export default function SectionRotated() {
    return (
        <div className={`${styles['gallery']} grid-wrapper`}>
            <div className={`${styles['bar3-a']}`}></div>
            <div className={`${styles['bar3-b']}`}></div>
            <div></div>
            <div></div>
            <div className={`${styles['circle']}`}></div>
        </div>
    )
}
