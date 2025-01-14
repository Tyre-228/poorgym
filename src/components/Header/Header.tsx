import React from "react"
import { useState } from "react"
import styles from "./Header.module.scss"
import logo from "../../assets/images/logo.svg"
import HamburgerMenu from "../../UI/HamburgerMenu/HamburgerMenu"

const Header: React.FC = () => {
  const [hideMenu, setHideMenu] = useState<boolean>(window.innerWidth < 720 ? true : false)

  window.addEventListener("resize", () => {
    if(window.innerWidth < 720) {
      setHideMenu(true)
    }
    else {
      setHideMenu(false)
    }
  })

  return (
    <header className={styles.header}>
      <div className={styles.logo__container}>
        <a href="/" className={styles.logo__link}>
          <img src={logo} alt="Logo" className={styles.logo__image} />
        </a>
      </div>
      {
        hideMenu === true ?
        <HamburgerMenu/> :
        <>
          <ul className={styles.header__options}>
            <li className={styles.options__item}>Timer</li>
            <li className={styles.options__item}>Blank</li>
            <li className={styles.options__item}>Blank</li>
            <li className={styles.options__item}>Blank</li>
          </ul>
          <div className={styles.header__registration}>
            <a href="/" className={styles.login}>Login</a>
            <a href="/"><button className={`${styles.signup} button`}>Sign-up</button></a>
          </div>
        </>
      }
    </header>
  );
}

export default Header