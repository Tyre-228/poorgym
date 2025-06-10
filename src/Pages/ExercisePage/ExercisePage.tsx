import styles from "./ExercisePage.module.scss"
import closeImage from "../../assets/images/Close.svg"
import exerciseImage from "../../assets/images/Exercise Image.png"

const ExercisePage = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <div className={styles.topBar}>
                    <h1 className={styles.title}>Bench press</h1>
                    <button className={styles.closeButton}>
                        <img src={closeImage} alt="Close" />
                    </button>
                </div>
                <div className={styles.content}>
                    <div className={styles.exerciseDescription}>
                        <div>
                            <h2>Equipment</h2>
                            <p>Barbell</p>
                        </div>
                        <div>
                            <h2>Body part</h2>
                            <p>Waist</p>
                        </div>
                        <div>
                            <h2>Muscles worked</h2>
                            <p>Primary: chests</p>
                            <p>Secondary: shoulders, triceps</p>
                        </div>
                    </div>
                    <div className={styles.exerciseImage}>
                        <img src={exerciseImage} alt="Exercise Image" />
                    </div>
                    <div className={styles.exerciseInstruction}>
                        <h2 className={styles.instructionTitle}>Instructions</h2>
                        <ul className={styles.instructionList}>
                            <li>1. Lie flat on your back with your knees bent and feet flat on the ground.</li>
                            <li>2. Place your hands behind your head with your elbows pointing outwards.</li>
                            <li>3. Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.</li>
                            <li>4. Pause for a moment at the top, then slowly lower your upper body back down to the starting position.</li>
                            <li>5. Repeat for the desired number of repetitions.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExercisePage