import React from "react"
import styles from "./TimerPage.module.scss"
import Timer from "../../components/Timer/Timer"


const TimerPage: React.FC = () => {
    return (
        <div className={styles.timerpage}>
            <h1 className={styles.timerpage__title}>Timer</h1>
            <div className={styles.timerpage__container}>
                <Timer />
            </div>
        </div>
    )
}

export default TimerPage