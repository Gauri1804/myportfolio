import React from 'react'

import { FaCode, FaLaptopCode, } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import styles from './About.module.css'
function About({ blur }) {
    return (
        <section id="about" className={blur ? styles.blurred : ''}>
            <h2 style={{ textAlign: 'center' }}>About Me</h2>

            <div className={styles.container}>

                <section className={styles.subContainer}>
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
                            <p className={styles.sectionOneCardText}>Writing maintainable and efficient code</p>
                        </div>

                        <div className={styles.sectionOneCard}>
                            <FaLaptopCode size={35} />
                            <h5>Modern Tech</h5>
                            <p className={styles.sectionOneCardText}>Using latest frameworks and tools</p>
                        </div>

                        <div className={styles.sectionOneCard}>
                            <FaMobileAlt size={35} />
                            <h5>Responsive</h5>
                            <p className={styles.sectionOneCardText}>Mobile-first development approach</p>
                        </div>




                    </section>
                </section>


            </div>
        </section>

    )
}

export default About