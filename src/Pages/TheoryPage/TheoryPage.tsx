import SideBar from "../../UI/SideBar/SideBar"
import styles from "./TheoryPage.module.scss"

const TheoryPage = () => {
    return (
        <div className="page">
            <div className={styles.content}>
                <ul className={styles.theoryList}>
                    <li className={styles.theory + " container"}>
                        <div className={styles.topBar}>
                            <h2 className={styles.theoryTitle}>How muscles are built</h2>
                            <button className={styles.theoryToggleButton + " primaryButton"}>Open</button>
                        </div>
                        <div className={styles.theoryContent}>
                            <p className={styles.theoryArticle}>
                                Time is brutal. It moves whether you act or not. Most people live in denial, 
                                pretending they have more of it than they do. Meanwhile, industries, technology,
                                 and competition advance relentlessly. If you’re not learning, building, and adapting
                                every day, you’re becoming irrelevant — even if you can’t see it yet. Comfort is a
                                lie that leads straight to mediocrity. Waiting for motivation, permission, or “the
                                right time” guarantees failure. Winners move early, fail fast, and adjust constantly.
                                 Losers wait, dream, and explain later why it "wasn’t their fault." Choose your side.
                                 The clock doesn’t care either way.
                            </p>
                            <iframe 
                                className={styles.video}
                                src="https://www.youtube.com/embed/XIYuxAeKSM0?si=5KTWvud3TPUvOvS9" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </li>
                    <li className={styles.theory + " container"}>
                        <div className={styles.topBar}>
                            <h2 className={styles.theoryTitle}>How muscles are built</h2>
                            <button className={styles.theoryToggleButton + " primaryButton"}>Open</button>
                        </div>
                        <div className={styles.theoryContent}>
                            <p className={styles.theoryArticle}>
                                Time is brutal. It moves whether you act or not. Most people live in denial, 
                                pretending they have more of it than they do. Meanwhile, industries, technology,
                                 and competition advance relentlessly. If you’re not learning, building, and adapting
                                every day, you’re becoming irrelevant — even if you can’t see it yet. Comfort is a
                                lie that leads straight to mediocrity. Waiting for motivation, permission, or “the
                                right time” guarantees failure. Winners move early, fail fast, and adjust constantly.
                                 Losers wait, dream, and explain later why it "wasn’t their fault." Choose your side.
                                 The clock doesn’t care either way.
                            </p>
                            <iframe 
                                className={styles.video}
                                src="https://www.youtube.com/embed/XIYuxAeKSM0?si=5KTWvud3TPUvOvS9" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </li>
                    <li className={styles.theory + " container"}>
                        <div className={styles.topBar}>
                            <h2 className={styles.theoryTitle}>How muscles are built</h2>
                            <button className={styles.theoryToggleButton + " primaryButton"}>Open</button>
                        </div>
                        <div className={styles.theoryContent}>
                            <p className={styles.theoryArticle}>
                                Time is brutal. It moves whether you act or not. Most people live in denial, 
                                pretending they have more of it than they do. Meanwhile, industries, technology,
                                 and competition advance relentlessly. If you’re not learning, building, and adapting
                                every day, you’re becoming irrelevant — even if you can’t see it yet. Comfort is a
                                lie that leads straight to mediocrity. Waiting for motivation, permission, or “the
                                right time” guarantees failure. Winners move early, fail fast, and adjust constantly.
                                 Losers wait, dream, and explain later why it "wasn’t their fault." Choose your side.
                                 The clock doesn’t care either way.
                            </p>
                            <iframe 
                                className={styles.video}
                                src="https://www.youtube.com/embed/XIYuxAeKSM0?si=5KTWvud3TPUvOvS9" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerPolicy="strict-origin-when-cross-origin" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </li>
                </ul>
                <SideBar currentPage="1" />
            </div>
        </div>
    )
}

export default TheoryPage