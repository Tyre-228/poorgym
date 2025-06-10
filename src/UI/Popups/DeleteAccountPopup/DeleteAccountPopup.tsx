import styles from "./DeleteAccountPopup.module.scss"

const DeleteAccountPopup = () => {
    return (
        <div className={styles.popup}>
            <h1 className={styles.popupTitle}>Are you sure you want to delete your account?</h1>
            <div className={styles.popupInteraction}>
                <button className="secondaryButton">Yes</button>
                <button className="primaryButton">No</button>
            </div>
        </div>
    )
}

export default DeleteAccountPopup