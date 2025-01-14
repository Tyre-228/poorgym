import React from "react"
import { useState, useEffect } from "react"
import styles from "./Timer.module.scss"


const Timer: React.FC = () => {
    const originalTimerValue: number = 5
    const [timerValue, setTimerValue] = useState<number>(originalTimerValue)
    const [circleValue, setCircleValue] = useState<number>(0)
    const [startTime, setStartTime] = useState<number>(Date.now())

    useEffect(() => {
        const interval = setInterval(() => {
            const elapsed = (Date.now() - startTime) / 1000
            const remaininagTime = Math.max(originalTimerValue - elapsed, 0)
            const progress = ((originalTimerValue - remaininagTime) / originalTimerValue)

            setTimerValue(Math.ceil(remaininagTime))
            setCircleValue(progress*100)

            if(remaininagTime <= 0) {
                clearInterval(interval)
            }
        }, 10)

        return () => clearInterval(interval)
    }, [startTime])


    return (
        <div className={styles.timer}>
            <div className={styles.circleTimer} style={{'background': `conic-gradient(#008780 ${circleValue}%, 0, #ffffff)`}}>
                <div className={styles.innerCircle}>
                    <span className={styles.time}>{timerValue}</span>
                </div>
            </div>
        </div>
    )
}

export default Timer