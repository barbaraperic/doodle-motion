import styles from './Button.module.css'

export default function Button({
    children,
    className,
}: {
    children: React.ReactNode
    className: string
}) {
    return (
        <button className={`${styles.button} ${className}`}>{children}</button>
    )
}
