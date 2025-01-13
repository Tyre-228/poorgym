import { useState } from "react"
import styles from "./HamburgerMenu.module.css"
import HamburgerMenuImage from "../../assets/images/hamburger-menu.svg"
import closeImage from "../../assets/images/close.svg"


function HamburgerMenu(props) {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            {showMenu === false ?
            <div className={styles.hamburgermenu__button} onClick={() => {setShowMenu(true)}}>
                <img src={HamburgerMenuImage} alt="hamburger menu" />
            </div>  :
            <div className={styles.hamburgermenu}>
                <div className={styles.hamburgermenu__content}>
                    <ul className={styles.hamburgermenu__options}>
                        <li className={styles.options__item}>Timer</li>
                        <li className={styles.options__item}>Blank</li>
                        <li className={styles.options__item}>Blank</li>
                        <li className={styles.options__item}>Blank</li>
                    </ul>
                    <div className={styles.hamburgermenu__registration}>
                        <a href="/" className={styles.login}>Login</a>
                        <a href="/"><button className={`${styles.signup} button`}>Sign-up</button></a>
                    </div>
                </div>
                <div className={styles.hamburgermenu__close} onClick={() => {setShowMenu(false)}}>
                    <img src={closeImage} alt="close menu" />
                </div>
            </div>
            }
        </>
    )
}

export default HamburgerMenu