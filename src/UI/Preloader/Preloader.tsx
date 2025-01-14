import React from "react"
import { useState } from 'react'
import styles from "./Preloader.module.scss"
import logo from "../../assets/images/logo.svg"

const Preloader: React.FC = () => {
  const [imageClass, setImageClass] = useState<string>(`${styles.logo__image} ${styles.logo__image_appear}`)
  const [isReady, setIsReady] = useState<boolean>(false)

  setTimeout(() => {
    setImageClass(`${styles.logo__image} ${styles.logo__image_idle}`)
  }, 1000)

  // setTimeout(() => {
  //   setIsReady(true)
  // }, 4000)

  if(isReady === true && imageClass === `${styles.logo__image} ${styles.logo__image_idle}`) {
    setImageClass(`${styles.logo__image} ${styles.logo__image_disappear}`)
  }
  
  return (
    <div className={styles.logo__container}>
        <img src={logo} alt="Logo" className={imageClass} />
    </div>
  );
}

export default Preloader