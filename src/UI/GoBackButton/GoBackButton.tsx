import styles from "./GoBackButton.module.scss"

const GoBackButton = () => {
    return (
        <button className={styles.goBackButton +  " primaryButton"} onClick={() => {history.back()}}>Go back</button>
    )
}

export default GoBackButton