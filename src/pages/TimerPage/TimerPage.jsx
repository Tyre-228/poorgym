import styles from "./TimerPage.module.css"
import Timer from "../../components/Timer/Timer"


function TimerPage() {
    return (
        <div className={styles.timerpage}>
            <h1 className={styles.timerpage__title}>Timer</h1>
            <eiv className={styles.timerpage__container}>
                <Timer />
            </eiv>
        </div>
    )
}

export default TimerPage