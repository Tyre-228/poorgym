import { NavLink } from "react-router"
import Header from "../../UI/Header/Header"
import styles from "./Homepage.module.scss"

const Homepage = () => {
    return (
        <div className={styles.homepage}>
            {/* <Popup/> */}
            <Header/>
            <div className={styles.homepageContent}>
                <h1 className={styles.title}>Start working out with PoorGym</h1>
                <NavLink to="/register" end>
                    <button className={styles.startButton + "  primaryButton"}>Start</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Homepage