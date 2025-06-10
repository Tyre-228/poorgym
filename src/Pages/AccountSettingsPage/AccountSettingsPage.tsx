import styles from "./AccountSettingsPage.module.scss"


const AccountSettingsPage = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <h1 className={styles.username}>Tyre228</h1>
                <section className={styles.settingSection}>
                    <h2 className={styles.sectionTitle}>Private data</h2>
                    <div className={styles.sectionContent}>
                        <ul className={styles.settingList}>
                            <li className={styles.settingField}>
                                <div className={styles.settingContent}>
                                    <h3 className={styles.settingName}>Username:</h3>
                                    <p className={styles.settingValue}>Tyre228</p>
                                </div>
                                <div className={styles.interaction}>
                                    <button className={styles.editButton + " primaryButton"}>Edit</button>
                                </div>
                            </li>
                            <li className={styles.settingField}>
                                <div className={styles.settingContent}>
                                    <h3 className={styles.settingName}>Email:</h3>
                                    <p className={styles.settingValue}>email.example@gmail.com</p>
                                </div>
                                <div className={styles.interaction}>
                                    <button className={styles.editButton + " primaryButton"}>Edit</button>
                                </div>
                            </li>
                            <li className={styles.settingField}>
                                <div className={styles.settingContent}>
                                    <h3 className={styles.settingName}>Date of birth:</h3>
                                    <p className={styles.settingValue}>12/03/2006</p>
                                </div>
                                <div className={styles.interaction}>
                                    <button className={styles.editButton + " primaryButton"}>Edit</button>
                                </div>
                            </li>
                            <li className={styles.settingField}>
                                <div className={styles.settingContent}>
                                    <h3 className={styles.settingName}>Password:</h3>
                                    <p className={styles.settingValue}>************</p>
                                </div>
                                <div className={styles.interaction}>
                                    <button className={styles.editButton + " primaryButton"}>Reset</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className={styles.settingSection}>
                    <h2 className={styles.sectionTitle}>Goal</h2>
                    <ul className={styles.settingList}>
                        <li className={styles.settingField}>
                            
                        </li>
                    </ul>
                </section>
                <section className={styles.settingSection}>
                    <h2 className={styles.sectionTitle}>Health information</h2>
                    <div className={styles.sectionContent}>
                        
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AccountSettingsPage