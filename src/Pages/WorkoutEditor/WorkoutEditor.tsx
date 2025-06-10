import styles from "./WorkoutEditor.module.scss"

const WorkoutEditor = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <div className={styles.workoutTopbar}>
                    <h1 className={styles.workoutTitle}>Push</h1>
                    <button className={styles.saveWorkout + " primaryButton"}>Save workout</button>
                </div>
                <ul className={styles.exerciseList}>
                    <li className={styles.exerciseItem}>
                        <div className={styles.exerciseInfo}>
                            <h3 className={styles.exerciseTitle}>Bench press</h3>
                            <p>Muscle group: chests</p>
                            <p>Sets: 3</p>
                            <p>Rest: 2:00</p>
                        </div>
                        <div className={styles.exerciseInteraction}>
                            <button className={styles.viewButton + " primaryButton"}>View</button>
                            <button className={styles.removeButton + " secondaryButton"}>Remove</button>
                        </div>
                    </li>
                    <li className={styles.exerciseItem}>
                        <div className={styles.exerciseInfo}>
                            <h3 className={styles.exerciseTitle}>Bench press</h3>
                            <p>Muscle group: chests</p>
                            <p>Sets: 3</p>
                            <p>Rest: 2:00</p>
                        </div>
                        <div className={styles.exerciseInteraction}>
                            <button className={styles.viewButton + " primaryButton"}>View</button>
                            <button className={styles.removeButton + " secondaryButton"}>Remove</button>
                        </div>
                    </li>
                    <li className={styles.exerciseItem}>
                        <div className={styles.exerciseInfo}>
                            <h3 className={styles.exerciseTitle}>Bench press</h3>
                            <p>Muscle group: chests</p>
                            <p>Sets: 3</p>
                            <p>Rest: 2:00</p>
                        </div>
                        <div className={styles.exerciseInteraction}>
                            <button className={styles.viewButton + " primaryButton"}>View</button>
                            <button className={styles.removeButton + " secondaryButton"}>Remove</button>
                        </div>
                    </li>
                    <li className={styles.exerciseItem}>
                        <div className={styles.exerciseInfo}>
                            <h3 className={styles.exerciseTitle}>Bench press</h3>
                            <p>Muscle group: chests</p>
                            <p>Sets: 3</p>
                            <p>Rest: 2:00</p>
                        </div>
                        <div className={styles.exerciseInteraction}>
                            <button className={styles.viewButton + " primaryButton"}>View</button>
                            <button className={styles.removeButton + " secondaryButton"}>Remove</button>
                        </div>
                    </li>
                </ul>
                <div className={styles.workoutInteraction}>
                    <button className={styles.addExerciseButton + " primaryButton"}>Add an exercise</button>
                    <button className={styles.choosePlan + " primaryButton"}>Choose a plan</button>
                </div>
            </div>
        </div>
    )
}

export default WorkoutEditor