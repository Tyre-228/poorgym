import styles from "./DeleteAccountFeedback.module.scss"

const DeleteAccountFeedback = () => {
    return (
        <div className={styles.popup}>
            <h1 className={styles.popupTitle}>Why did you decide to delete your account?</h1>
            <form action="" className={styles.popupForm}>
                <div className="field">
                    <input className="choice" type="radio" name="choice" id="choice1" value="I switched to a different app" required />
                    <label htmlFor="choice1">I switched to a different app</label>
                </div>
                <div className="field">
                    <input className="choice" type="radio" name="choice" id="choice2" value="I don't workout anymore" required />
                    <label htmlFor="choice2">I don't workout anymore</label>
                </div>
                <div className="field">
                    <input className="choice" type="radio" name="choice" id="choice3" value="Health problems" required />
                    <label htmlFor="choice3">Health problems</label>
                </div>
                <div className="field">
                    <input className="choice" type="radio" name="choice" id="choice4" value="Other" required />
                    <label htmlFor="choice4">Other</label>
                </div>
                <textarea placeholder="Other..." style={{display: "block"}}></textarea>
                <button type="submit" className={styles.submitButton + " primaryButton"}>Submit</button>
            </form>
        </div>
    )
}

export default DeleteAccountFeedback