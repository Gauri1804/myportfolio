import React from 'react'
import styles from './Education.module.css'
import { FaGraduationCap } from "react-icons/fa";

const data = [
    {
        curseName: "Master of Computer Applications",
        collegeName: "DIT Univistry, Dehradun",
        startDate: "2023",
        endDate: "2025",
        collageIcon: "",
        courseDetails: [
            { description: "Major in Computer Science" },
            { description: "Machine Learning Applications" },
            { description: "Computer Network" },
            { description: "7.1/10" }
        ]
    },
    {
        curseName: "Bachelor of Computer Applications",
        collegeName: "DBS Global University, Dehradun",
        startDate: "2020",
        endDate: "2023",
        courseDetails: [
            { description: "Major in Computer Science" },
            { description: "Machine Learning Applications" },
            { description: "Computer Network" },
            { description: "6.3/10" }
        ]
    },
]


function Education({ blur }) {
    return (
        <div id='education' className={`${styles.container} ${blur ? styles.blurred : ''} `}>
            <h2 style={{ textAlign: 'center' }}>Education</h2>
            <h1 style={{ textAlign: 'center' }}>Academic Background</h1>

            <div className={styles.cardContainer}>
                {data.map((section, index) => (

                    <div key={index} className={styles.card}>

                        {/* icon and year container*/}
                        <div className={styles.iconContainer}>
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#0688d4" />
                                        <stop offset="100%" stopColor="#00d4ff" />
                                    </linearGradient>
                                </defs>
                                <FaGraduationCap size={40} fill="url(#gradient)" />
                            </svg>  <aside> <span className={styles.dateItems} >{section.startDate}-</span><span className={styles.dateItems} >{section.endDate}</span> </aside>
                        </div>

                        {/* course name */}
                        <h3>{section.curseName}</h3>
                        {/* college name */}
                        <div className={styles.collegeNameContainer}>
                            <h4 className={styles.collegeNameTitle}>{section.collegeName}</h4>
                        </div>

                        {/* Details Section */}

                        <div className={styles.educationDetails}>
                            <ul >
                                {section.courseDetails.map((items, idx) => (

                                    <li key={idx} style={{ color: 'gray' }}>{items.description}</li>


                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education