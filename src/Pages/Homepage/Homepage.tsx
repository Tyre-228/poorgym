import { NavLink } from "react-router"
import Header from "../../UI/Header/Header"
import styles from "./Homepage.module.scss"
import PopupWrapper from "../../UI/PopupWrapper/PopupWrapper"
import LogoutPopup from "../../UI/Popups/LogoutPopup/LogoutPopup"
import WarningPopup from "../../UI/Popups/WarningPopup/WarningPopup"
import DeleteAccountPopup from "../../UI/Popups/DeleteAccountPopup/DeleteAccountPopup"
import DeleteAccountForm from "../../UI/Popups/DeleteAccountForm/DeleteAccountForm"
import DeleteAccountFeedback from "../../UI/Popups/DeleteAccountFeedback/DeleteAccountFeedback"
import ExercisePopup from "../../UI/Popups/ExercisePopup/ExercisePopup"

const Homepage = () => {
    return (
        <div className="page">
            {/* <Popup/> */}
            <Header/>
            {/* <PopupWrapper isVisible={true}>
                <LogoutPopup/>
            </PopupWrapper> */}
            <div className={styles.homepageContent}>
                <h1 className={styles.title}>Start working out with PoorGym</h1>
                <NavLink to="/registration/goalType" end>
                    <button className={styles.startButton + "  primaryButton"}>Start</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Homepage