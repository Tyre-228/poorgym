import styles from "./HomePage.module.css"
import Header from "../../components/Header/Header"

function HomePage() {
    return (
        <div className={styles.home__container}>
            <Header />
        </div>
    )
}

export default HomePage