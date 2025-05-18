import styles from "./Popup.module.scss"

const Popup = () => {
    return (
        <div className={styles.popup}>
            <div className={styles.popupWindow}>
                <h1 className={styles.title}>Warning!</h1>
                <p className={styles.text}>If you have an injury or medical condition you should talk to your doctor before starting to work out.</p>
            </div>
        </div>
    )
}

export default Popup