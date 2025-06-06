import SideBar from "../../UI/SideBar/SideBar"
import styles from "./WorkoutPlannerPage.module.scss"
import { NavLink } from "react-router"

const WorkoutPlannerPage = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <ul className={styles.workoutList}>
                    <li className={styles.workoutContainer}>
                        <div className={styles.workoutInfo}>
                            <h2 className={styles.workoutTitle}>Push</h2>
                            <p>Day: Monday</p>
                            <p>Muscle groups: shoulders, triceps, chests</p>
                        </div>
                        <div className={styles.workoutInteraction}>
                            <button className={styles.startWorkoutButton + " primaryButton"}>Start</button>
                            <button className={styles.editWorkoutButton + " secondaryButton"}>Edit</button>
                        </div>
                    </li>
                    <li className={styles.workoutContainer}>
                        <div className={styles.workoutInfo}>
                            <h2 className={styles.workoutTitle}>Push</h2>
                            <p>Day: Monday</p>
                            <p>Muscle groups: shoulders, triceps, chests</p>
                        </div>
                        <div className={styles.workoutInteraction}>
                            <button className={styles.startWorkoutButton + " primaryButton"}>Start</button>
                            <button className={styles.editWorkoutButton + " secondaryButton"}>Edit</button>
                        </div>
                    </li>
                    <li className={styles.workoutContainer}>
                        <div className={styles.workoutInfo}>
                            <h2 className={styles.workoutTitle}>Push</h2>
                            <p>Day: Monday</p>
                            <p>Muscle groups: shoulders, triceps, chests</p>
                        </div>
                        <div className={styles.workoutInteraction}>
                            <button className={styles.startWorkoutButton + " primaryButton"}>Start</button>
                            <button className={styles.editWorkoutButton + " secondaryButton"}>Edit</button>
                        </div>
                    </li>
                </ul>
                <NavLink to="/newWorkout">
                    <button className={styles.createWorkoutButton + " primaryButton"}>Create a workout</button>
                </NavLink>
            </div>
            <SideBar currentPage="3" />
        </div>
    )
}

export default WorkoutPlannerPage