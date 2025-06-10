import styles from "./DeleteAccountForm.module.scss"

const DeleteAccountForm = () => {
    return (
        <div className={styles.popup}>
            <h1 className={styles.popupTitle}>Enter your email and password</h1>
            <form action="" className={styles.popupForm}>
                <input type="text" placeholder="Email" required />
                <input type="text" placeholder="Password" required />
                <button type="submit" className={styles.submitButton + " primaryButton"}>Submit</button>
            </form>
            <button className={styles.goBackButton + " secondaryButton"}>Go back</button>
        </div>
    )
}

export default DeleteAccountForm