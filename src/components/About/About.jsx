import React from 'react'

import { FaCode, FaLaptopCode, } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import styles from './About.module.css'
function About() {
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>About Me</h2>

            <div className={styles.container}>

                <section >
                    <p>
                        I recently completed my Master's in Computer Applications (MCA) after my BCA
                        degree. During my academic journey, I developed a strong foundation in
                        programming and web development technologies. I completed a 2-month
                        internship where I gained practical experience in real-world development.
                    </p>

                    <section className={styles.iconCard}>
                        <div className={styles.sectionOneCard}>
                            <FaCode size={35} />
                            <h5>Clean Code</h5>
                            <p>Writing maintainable and efficient code</p>
                        </div>

                        <div className={styles.sectionOneCard}>
                            <FaLaptopCode size={35} />
                            <h5>Modern Tech</h5>
                            <p>Using latest frameworks and tools</p>
                        </div>

                        <div className={styles.sectionOneCard}>
                            <FaMobileAlt size={35} />
                            <h5>Responsive</h5>
                            <p>Mobile-first development approach</p>
                        </div>




                    </section>
                </section>

                <section className={styles.gridContainer}>
                    <div className={styles.gridItem}>
                        <h1>2</h1>
                        <p>Months Internship</p>
                    </div>

                    <div className={styles.gridItem}>
                        <h1>5+</h1>
                        <p>Academic Projects</p>
                    </div>

                    <div className={styles.gridItem}>
                        <h1>2</h1>
                        <p>Certifications</p>
                    </div>

                    <div className={styles.gridItem}>
                        <h1>MCA</h1>
                        <p>pursuing</p>
                    </div>
                </section>
            </div>
        </>

    )
}

export default About