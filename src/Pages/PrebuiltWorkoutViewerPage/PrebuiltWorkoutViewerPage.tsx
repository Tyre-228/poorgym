import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import styles from "./PrebuiltWorkoutViewerPage.module.scss"

const PrebuiltWorkoutViewerPage = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <div className={styles.topBar}>
                    <h1 className={styles.workoutTitle}>Push</h1>
                    <GoBackButton width={100} height={42}/>
                </div>
                <ul className={styles.exerciseList}>
                    <li className={styles.exercise + " container"}>
                        <h2 className={styles.exerciseTitle}>Bench press</h2>
                        <button className={styles.viewButton + " primaryButton"}>View</button>
                    </li>
                    <li className={styles.exercise + " container"}>
                        <h2 className={styles.exerciseTitle}>Bench press</h2>
                        <button className={styles.viewButton + " primaryButton"}>View</button>
                    </li>
                    <li className={styles.exercise + " container"}>
                        <h2 className={styles.exerciseTitle}>Bench press</h2>
                        <button className={styles.viewButton + " primaryButton"}>View</button>
                    </li>
                </ul>
                <button className={styles.pickWorkoutButton + " primaryButton"}>Pick this workout</button>
            </div>
        </div>
    )
}

export default PrebuiltWorkoutViewerPage