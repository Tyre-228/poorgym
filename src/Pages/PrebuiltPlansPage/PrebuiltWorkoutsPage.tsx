import GoBackButton from "../../UI/GoBackButton/GoBackButton"
import styles from "./PrebuiltPlansPage.module.scss"

const PrebuiltWorkoutsPage = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <div className={styles.interaction}>
                    <div className={styles.workoutFilters}>
                        <input type="text" placeholder="Muslce group" />
                        <input type="text" placeholder="Type" />
                    </div>
                    <GoBackButton/>
                </div>
                <ul className={styles.workoutList}>
                    <li className={styles.workout}>
                        <div className={styles.workoutInfo}>
                            <h2 className={styles.workoutTitle}>Push</h2>
                            <p>Muscle groups: shoulders, triceps, chests</p>
                            <p>Approximate time: 1:30h</p>
                        </div>
                        <div className={styles.workoutInteraction}>
                            <button className="primaryButton">View</button>
                        </div>
                    </li>
                    <li className={styles.workout}>
                        <div className={styles.workoutInfo}>
                            <h2 className={styles.workoutTitle}>Push</h2>
                            <p>Muscle groups: shoulders, triceps, chests</p>
                            <p>Approximate time: 1:30h</p>
                        </div>
                        <div className={styles.workoutInteraction}>
                            <button className="primaryButton">View</button>
                        </div>
                    </li>
                    <li className={styles.workout}>
                        <div className={styles.workoutInfo}>
                            <h2 className={styles.workoutTitle}>Push</h2>
                            <p>Muscle groups: shoulders, triceps, chests</p>
                            <p>Approximate time: 1:30h</p>
                        </div>
                        <div className={styles.workoutInteraction}>
                            <button className="primaryButton">View</button>
                        </div>
                    </li>
                    <li className={styles.workout}>
                        <div className={styles.workoutInfo}>
                            <h2 className={styles.workoutTitle}>Push</h2>
                            <p>Muscle groups: shoulders, triceps, chests</p>
                            <p>Approximate time: 1:30h</p>
                        </div>
                        <div className={styles.workoutInteraction}>
                            <button className="primaryButton">View</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default PrebuiltWorkoutsPage