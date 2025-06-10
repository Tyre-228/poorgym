import styles from "./WarningPopup.module.scss"

const WarningPopup = () => {
    return (
        <div className={styles.popup}>
            <h1 className={styles.title}>Warning!</h1>
            <p className={styles.text}>If you have an injury or medical condition you should talk to your doctor before starting to work out.</p>
        </div>
    )
}

export default WarningPopup