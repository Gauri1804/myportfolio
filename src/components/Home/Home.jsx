import React from 'react'
import styles from './Home.module.css'
import { Typewriter } from 'react-simple-typewriter'
function Home({ blur }) {
    return (
        <div id='home' className={`${styles.container}  ${blur ? styles.blurred : ' '}`}>


            <img className={styles.img} src='https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Images%2Flogoport.png?alt=media&token=fa7057bd-4bfd-4b26-b528-d507de34db43' />


            <section className={styles.subContainer}>
                <h1>Hi, I'm Gaurav Singh</h1>
                <h3>MCA Student & Aspiring  <Typewriter
                    words={['Software Developer', 'React-Native Developer']}
                    loop={5}
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}

                /> </h3>
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