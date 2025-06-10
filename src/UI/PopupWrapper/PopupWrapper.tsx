import styles from "./PopupWrapper.module.scss"
import { ReactNode } from "react"

type Props = {
  children: ReactNode | ReactNode[]
  isVisible: boolean
}

const PopupWrapper = (props: Props) => {
    return (
        <div className={styles.popupWrapper} style={{ display: props.isVisible === true ? "block" : "none" }}>
            <div className={styles.popupContent}>
                {props?.children}
            </div>
        </div>
    )
}

export default PopupWrapper