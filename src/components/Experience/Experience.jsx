import React from 'react'
import styles from './Experience.module.css'
import { IoLocationSharp } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { IoIosTime } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa6";
const data = [
    {
        companyName: "SSJ IT Solutions",
        companyIcon: "https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Images%2Flogo-white1.png?alt=media&token=ccb8fae8-cf0e-4333-849d-ec66e3e5869f",
        location: "23-A, Shaheed Nagar Colony, Lucknow, 226025",
        startDate: "July 4,2022-",
        endDate: "August 04, 2022 (2 Months)",
        companyNumber: "(+91) 8948313502",
        companyEmail: "contactus.ssj@gmail.com",
        supervisorName: "Suraj Jaswal",
        supervisorD: "Technical Lead",
        supervisorEmail: "contactus.ssj@gmail.com",
        roleOverView: [
            { overViewText: "Frontend Development Intern" },
            { overViewText: " UI/UX Design Implementation" },
            { overViewText: " Web Application Development" }
        ],
        project: [
            //project 1
            {
                projectTitle: "Music Player",
                projectDescription: "Developed a responsive admin dashboard for managing online store operations, including inventory, orders, and customer data.",
                techUsed: [
                    {
                        techName: "React Js",
                        techIcon: <FaReact size={20} color='#61DAFB' />,
                    }
                ],
                achievements: [
                    {
                        achievement: "Improved dashboard loading speed by 40%"
                    },
                    {
                        achievement: "Implemented real-time data updates"
                    },
                ],
                projectDuration: "1 month"

            },
            //project 2
            {
                projectTitle: "Blog Website",
                projectDescription: "Developed a responsive admin dashboard for managing online store operations, including inventory, orders, and customer data.",
                techUsed: [
                    {
                        techName: "React Js",
                        techIcon: <FaReact size={20} color='#61DAFB' />,
                    }
                ],
                achievements: [
                    {
                        achievement: "Improved dashboard loading speed by 40%"
                    },
                    {
                        achievement: "Implemented real-time data updates"
                    },
                ],

                projectDuration: "1 month",
            }
        ],

        skills: [
            {
                skillName: "React.js",
                skillIcon: <FaReact size={35} color='#61DAFB' />,
                skillLevel: "Intermediate"
            },
            {
                skillName: "Firebase",
                skillIcon: <IoLogoFirebase size={35} color='#FFCA28' />,
                skillLevel: "Intermediate"
            }]


    },

]



function Experience() {
    return (
        // main cointainer
        <div className={styles.container}>
            {/* title container */}
            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Professional Experience</h1>
                <p className={styles.companyName}>Internship Journey at SSJ IT Solutions</p>
            </div>

            {/* company Details Container */}

            {data.map((item, index) => (
                <>
                    <div key={index} className={styles.companyDetailsContainer}>
                        {/* icon Container */}

                        <div className={styles.iconContainer}>

                            <img style={{ width: 120, height: 60 }} src={item.companyIcon} alt={item.companyName} />
                            <h2>{item.companyName}</h2>
                            <IoLocationSharp />   <span> {item.location}</span> <br /> <br />
                            <MdDateRange /> <span> {item.startDate}  -  {item.endDate}</span>
                        </div>

                        {/* role Overview container */}

                        <div className={styles.roleContainer}>

                            <h4 style={{ margin: 0 }} > Role Overview</h4>
                            {item.roleOverView.map((role, idx) => (
                                <div key={idx}  >
                                    <span className={styles.flex}> <FaCheckCircle /> {role.overViewText}</span>
                                </div>
                            ))}


                        </div>
                    </div>



                    {/* project section */}
                    < h2 className={styles.projectHeading}> Projects Completed</h2>
                    {/* project container */}
                    {/* project 1  */}
                    <div className={styles.projectContainer}>
                        {item.project.map((projects, i) => (
                            <div key={i} className={styles.projectCard}>
                                <div className={styles.projectTDContainer}>
                                    <h3>{projects.projectTitle}</h3>
                                    <img style={{ width: 120, height: 60 }} src={item.companyIcon} alt={item.companyName} />
                                </div>
                                <p>{projects.projectDescription}</p>
                                <h5>Technologies Used:</h5>
                                {projects.techUsed.map((tech, idx) => (
                                    <span className={styles.techUsed} key={idx}> {tech.techIcon} {tech.techName}</span>
                                ))}

                                <h5>Key Achievements:</h5>
                                <div className={styles.achievementsList}>
                                    {projects.achievements.map((achievement, idx) => (
                                        <ul key={idx}>
                                            <li>{achievement.achievement}</li>


                                        </ul>
                                    ))}
                                </div>
                                <div className={styles.durationContainer}>
                                    <IoIosTime size={20} />
                                    <span>Duration:  {projects.projectDuration}</span>
                                </div>




                            </div>





                        ))}





                    </div>


                    {/* Skills Gained Container*/}
                    <div className={styles.skillsContainer}>
                        <h2 className={styles.skillHeading}>Skills Gained</h2>
                        <div className={styles.skillCardContainer}>
                            {item.skills.map((skill, idx) => (

                                <div className={styles.card}>
                                    <span className={styles.skillIcon}>{skill.skillIcon}</span>
                                    <span className={styles.skillName}>{skill.skillName}</span>
                                    <span className={styles.skillLevel}>{skill.skillLevel}</span>
                                </div>

                            ))}

                        </div>


                        <div className={styles.contactContainer}>
                            <h1>Contact Information</h1>
                            <div className={styles.contactSubContainer}>
                                <div className={styles.companyContactDetailsContainer}>
                                    <h3>Company Details</h3>
                                    <span> <FaBuilding /> {item.companyName} </span>
                                    <span> <IoLocationSharp /> {item.location} </span>
                                    <span><FaPhoneAlt /> {item.companyNumber}</span>
                                    <span><MdEmail /> {item.companyEmail}</span>
                                </div>

                                <div className={styles.supervisorContainer}>
                                    <h3>Supervisor Reference</h3>
                                    <span><FaUser />  {item.supervisorName} </span>
                                    <span> <FaToolbox />  {item.supervisorD}</span>
                                    <span><MdEmail /> {item.supervisorEmail}</span>
                                </div>
                            </div>
                        </div>

                    </div>


                </>

            ))
            }



        </div >
    )
}

export default Experience