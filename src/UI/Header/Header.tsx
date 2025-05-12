import { NavLink } from "react-router"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Poor Gym</div>
            <div className={styles.authentication}>
                <NavLink to="/login" end>
                    <button className="primaryButton">Login</button>
                </NavLink>
                <NavLink to="/registration/goalType" end>
                    <button className="primaryButton">Sign up</button>
                </NavLink>
            </div>
        </header>
    )
}

export default Header