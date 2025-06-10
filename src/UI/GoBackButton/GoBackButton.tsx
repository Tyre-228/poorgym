import styles from "./GoBackButton.module.scss"

interface SizeProp {
    width?: number,
    height?: number
}

const GoBackButton = (props: SizeProp) => {
    const style = {
        width: props.width || "auto",
        height: props.height || "auto"
    }

    return (
        <button className={styles.goBackButton +  " primaryButton"} style={style} onClick={() => {history.back()}}>Go back</button>
    )
}

export default GoBackButton