import React from "react"
import styles from "./HomePage.module.scss"
import Header from "../../components/Header/Header"

const HomePage: React.FC = () => {
    return (
        <div className={styles.home__container}>
            <Header />
        </div>
    )
}

export default HomePage