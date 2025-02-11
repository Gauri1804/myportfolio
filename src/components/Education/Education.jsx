import React from 'react'
import styles from './Education.module.css'
import { FcGraduationCap } from "react-icons/fc";

const data = [
    {
        curseName: "Master of Computer Applications",
        collegeName: "DIT, Univistry",
        startDate: "2023",
        endDate: "2025",
        courseDetails: [
            { description: "Major in Computer Science" },
            { description: "Machine Learning Applications" },
            { description: "Computer Network" },
            { description: "7.1/10" }
        ]
    }
]


function Education() {
    return (
        <div className={styles.container}>
            <h2 style={{ textAlign: 'center' }}>Education</h2>
            <h1 style={{ textAlign: 'center' }}>Academic Background</h1>

            {data.map((section, index) => (

                <div key={index} className={styles.card}>
                    {/* icon and year container*/}
                    <div className={styles.iconContainer}>
                        <FcGraduationCap size={40} />  <aside> <span style={{ color: 'gray', fontSize: 14 }}>{section.startDate}-</span><span style={{ color: 'gray', fontSize: 14 }}>{section.endDate}</span> </aside>
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
    )
}

export default Education