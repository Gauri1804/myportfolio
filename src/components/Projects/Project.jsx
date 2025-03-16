import React from 'react'
import styles from './Project.module.css'
import { FaGithubSquare } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
function Project({ blur }) {


    const projectDetails = [
        {
            p_name: "Tourism Website for Uttarakhand",
            p__s_description: "This project is related to the Smart India Hackathon ",
            p__l_description: "During my BCA, I developed a Smart India Hackathon project on Uttarakhand tourism, using AI, GPS, and React.js to enhance travel with smart itineraries, emergency alerts, and eco-tourism support. 🚀",
            p_img: "https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Portfoilo%2Fpro1.png?alt=media&token=99d50602-3973-4189-b4b1-ff6b6b527f37",
            github: "https://github.com/Gauri1804/React",
            demo: "https://gauri1804.github.io/React/"
        },
        {
            p_name: "Student Portal For Collage",
            p__s_description: "Student Portal for College – A Winter Live Project.",
            p__l_description: "A Student Portal for college providing notes, previous year question papers, announcements, and resources, ensuring easy access to academic materials and essential information in one place. 📚✨",
            p_img: "https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Portfoilo%2Fpro2.png?alt=media&token=1e07c2e2-b8a0-4345-a28d-3ea5422edc1b",
            github: "https://github.com/Gauri1804/React",
            demo: "https://gauri1804.github.io/React/"
        },


    ]

    return (
        <div id='projects' className={`${styles.container} ${blur ? styles.blurred : ''} `}>

            <h1>Featured Project</h1>
            <div className={styles.grid}>

                {
                    projectDetails.map((data, index) => {
                        return (

                            <div id={index} className={styles.card}>
                                <div className={styles.cardImage}>
                                    <img src={data.p_img} alt='IMG' />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{data.p_name}</h3>
                                    <p className={styles.description}>{data.p__s_description}</p>
                                </div>
                                <div className={styles.cardOverlay}>
                                    <h3 className={styles.cardTitle}>{data.p_name}</h3>

                                    <p className={styles.cardDescription}>{data.p__l_description}</p>
                                    <br />
                                    <div className={styles.btnDiv}>


                                        <div className={styles.buttonView}>
                                            <FaGithubSquare size={15} />
                                            <a > View Code</a>
                                        </div>

                                        <div className={styles.buttonCode}>
                                            <GoProjectSymlink size={15} />
                                            <a >View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Project






