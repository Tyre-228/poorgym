import { Link } from "react-router"
import styles from "./sideBar.module.scss"

// import TheoryPageImage from "../../assets/images/Theory Page.svg"
// import WorkoutHistoryImage from "../../assets/images/Workout History Page.svg"
// import WorkoutPlannerImage from "../../assets/images/Workout Planner Page.svg"
// import ExercisesImage from "../../assets/images/Exercises Page.svg"
// import AccountImage from "../../assets/images/Account Page.svg"

type CurrentPageProps = {
    currentPage: string
}

const SideBar = (props: CurrentPageProps) => {
    return (
        <div className={styles.sideBar}>
            <ul className={styles.sideBarOptions}>
                <li className={`${styles.sideBarOption} ${props.currentPage === "1" ? styles.current : ""}`}>
                    <Link to="/">
                        <button className={styles.navButton}></button>
                    </Link>
                </li>
                <li className={`${styles.sideBarOption} ${props.currentPage === "2" ? styles.current : ""}`}>
                    <Link to="/">
                        <button className={styles.navButton}></button>
                    </Link>
                </li>
                <li className={`${styles.sideBarOption} ${props.currentPage === "3" ? styles.current : ""}`}>
                    <Link to="/workoutPlanner">
                        <button className={styles.navButton}></button>
                    </Link>
                </li>
                <li className={`${styles.sideBarOption} ${props.currentPage === "4" ? styles.current : ""}`}>
                    <Link to="/exercises">
                        <button className={styles.navButton}></button>
                    </Link>
                </li>
                <li className={`${styles.sideBarOption} ${props.currentPage === "5" ? styles.current : ""}`}>
                    <Link to="/accountSettings">
                        <button className={styles.navButton}></button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default SideBar