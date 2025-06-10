import styles from "./WorkoutEditorExercisesPage.module.scss"
import exerciseImage from "../../assets/images/exercise image.png"

const WorkoutEditorExercisesPage = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <div className={styles.exerciseFilters}>
                    <input type="text" placeholder="Exercises" />
                    <input type="text" placeholder="Muscle group" />
                </div>
                <ul className={styles.exerciseList}>
                    <li className={styles.exerciseContainer}>
                        <div className={styles.exerciseInfo}>
                            <div className={styles.exerciseImage}>
                                <img src={exerciseImage} alt="" />
                            </div>
                            <div className={styles.exerciseDescription}>
                                <h2 className={styles.exerciseTitle}>Bench press</h2>
                                <p className={styles.muscleGroup}>Chests</p>
                            </div>
                        </div>
                        <div className={styles.exerciseInteraction}>
                            <button className={styles.viewExerciseButton + " primaryButton"}>Add</button>
                            <button className={styles.viewExerciseButton + " secondaryButton"}>View</button>
                        </div>
                    </li>
                    <li className={styles.exerciseContainer}>
                        <div className={styles.exerciseInfo}>
                            <div className={styles.exerciseImage}>
                                <img src={exerciseImage} alt="" />
                            </div>
                            <div className={styles.exerciseDescription}>
                                <h2 className={styles.exerciseTitle}>Bench press</h2>
                                <p className={styles.muscleGroup}>Chests</p>
                            </div>
                        </div>
                        <div className={styles.exerciseInteraction}>
                            <button className={styles.viewExerciseButton + " primaryButton"}>Add</button>
                            <button className={styles.viewExerciseButton + " secondaryButton"}>View</button>
                        </div>
                    </li>
                    <li className={styles.exerciseContainer}>
                        <div className={styles.exerciseInfo}>
                            <div className={styles.exerciseImage}>
                                <img src={exerciseImage} alt="" />
                            </div>
                            <div className={styles.exerciseDescription}>
                                <h2 className={styles.exerciseTitle}>Bench press</h2>
                                <p className={styles.muscleGroup}>Chests</p>
                            </div>
                        </div>
                        <div className={styles.exerciseInteraction}>
                            <button className={styles.viewExerciseButton + " primaryButton"}>Add</button>
                            <button className={styles.viewExerciseButton + " secondaryButton"}>View</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default WorkoutEditorExercisesPage