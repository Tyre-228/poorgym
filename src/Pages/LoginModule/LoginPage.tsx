import styles from "./LoginPage.module.scss"

const LoginPage = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.loginContent}>
                <h1 className={styles.title}>Login</h1>
                <form action="POST">
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className={styles.submit + " primaryButton"}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage