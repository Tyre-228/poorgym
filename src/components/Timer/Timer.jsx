import { useState, useEffect } from "react"
import styles from "./Timer.module.css"


function Timer() {
    const originalTimerValue = 10
    const [timerValue, setTimerValue] = useState(originalTimerValue)
    const [circleValue, setCircleValue] = useState(0)

    useEffect(() => {

    }, [])

    useEffect(() => {
        if(circleValue < 100) {
            setTimeout(() => {
                setCircleValue(circleValue+0.1)
            }, originalTimerValue)
        }
    }, [circleValue])

    useEffect(() => {
        setTimeout(() => {
            if(timerValue !== 0) {
                setTimerValue(timerValue-1)
            }
        }, 1000)
    }, [timerValue])


    return (
        <div className={styles.timer}>
            <div className={styles.circleTimer} style={{'background': `conic-gradient(#008780 ${circleValue}%, 0, white)`}}>
                <div className={styles.innerCircle}>
                    <span className={styles.time}>{timerValue}</span>
                </div>
            </div>
        </div>
    )
}

export default Timer