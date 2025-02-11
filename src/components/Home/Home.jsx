import React from 'react'
import styles from './Home.module.css'
function Home() {
    return (
        <div className={styles.container}>

            <section>
                <img className={styles.img} src='https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
            </section>

            <section>
                <h1>Hi, I'm Gaurav Singh</h1>
                <h3>MCA Student & Aspiring Software Developer</h3>
                <p>Currently pursuing MCA with a passion for web development and modern<br /> technologies. Eager to contribute and learn in a professional environment.</p>
                <div className={styles.btnContainer}>
                    <button className={styles.getButton}>Get Resume</button>
                    <button className={styles.viewButton}>View Projects</button>
                </div>
            </section>
        </div>
    )
}

export default Home