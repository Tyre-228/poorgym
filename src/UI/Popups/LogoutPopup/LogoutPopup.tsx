import styles from "./LogoutPopup.module.scss"

const LogoutPopup = () => {
    return (
        <div className={styles.popup}>
            <h1 className={styles.popupTitle}>Are you sure you want to log out?</h1>
            <div className={styles.popupInteraction}>
                <button className="secondaryButton">Yes</button>
                <button className="primaryButton">No</button>
            </div>
        </div>
    )
}

export default LogoutPopup