import React, { useContext } from "react";
import styles from "./Project.module.css";
import { FaGithubSquare } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { ThemeContext } from "../../App";
import { colors } from "../../constraint/colors";
function Project({ blur }) {
  const projectDetails = [
    {
      p_name: "Personal Portfolio website",
      p__s_description:
        "✅ Dark Mode ✅ Form Handling   ✅Animations & Interactivity",
      p__l_description:
        "A Personal Portfolio Website built in React is a modern, interactive web application that showcases an individual's skills, projects, experience, and contact details. It typically includes sections like About Me, Skills, Projects, Resume, and Contact.",

      p_img:
        "https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Portfoilo%2Fport.png?alt=media&token=2da374ac-cb11-4160-bdbd-a66fb9e312c8",
      github: "https://github.com/Gauri1804/myportfolio",
      demo: "https://myportfolio-gauri1804s-projects.vercel.app/",
    },
    {
      p_name: "Personal Blog Website",
      p__s_description:
        "✅ Add Blog ✅ Edit Blog ✅ Delete Blog ✅ Contact Form",
      p__l_description:
        "A Personal Blog Website built with React.js and Firebase allows users to create, edit, and delete their personal blogs seamlessly. The project also includes a contact form for easy communication and is hosted using Firebase Hosting for reliable performance.",

      p_img:
        "https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Portfoilo%2FScreenshot%202025-08-24%20161735.png?alt=media&token=d4402547-819b-4a4d-a7cf-6fe727bc6f62",
      github: "https://github.com/Gauri1804/Personal-Blog-Website",
      demo: "https://fbhk-ee131.web.app/",
    },
    // {
    //     p_name: "Tourism Website for Uttarakhand",
    //     p__s_description: "This project is related to the Smart India Hackathon ",
    //     p__l_description: "During my BCA, I developed a Smart India Hackathon project on Uttarakhand tourism, using AI, GPS, and React.js to enhance travel with smart itineraries, emergency alerts, and eco-tourism support. 🚀",
    //     p_img: "https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Portfoilo%2Fpro1.png?alt=media&token=99d50602-3973-4189-b4b1-ff6b6b527f37",
    //     github: "https://github.com/Gauri1804/React",
    //     demo: "https://gauri1804.github.io/React/"
    // },
    // {
    //     p_name: "Student Portal For Collage",
    //     p__s_description: "Student Portal for College – A Winter Live Project.",
    //     p__l_description: "A Student Portal for college providing notes, previous year question papers, announcements, and resources, ensuring easy access to academic materials and essential information in one place. 📚✨",
    //     p_img: "https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Portfoilo%2Fpro2.png?alt=media&token=1e07c2e2-b8a0-4345-a28d-3ea5422edc1b",
    //     github: "https://github.com/Gauri1804/React",
    //     demo: "https://gauri1804.github.io/React/"
    // },
  ];

  const { theme } = useContext(ThemeContext);

  return (
    <div
      id="projects"
      className={`${styles.container} ${blur ? styles.blurred : ""} `}
    >
      <h2
        style={
          theme === "light"
            ? { color: colors.color }
            : { color: colors.colorDark }
        }
      >
        Featured Project
      </h2>
      <div className={styles.grid}>
        {projectDetails.map((data, index) => {
          return (
            <div
              style={
                theme === "light"
                  ? {
                      backgroundOrigin: colors.background,
                      color: colors.color,
                    }
                  : {
                      backgroundColor: colors.backgroundHeader,
                      color: colors.colorDark,
                    }
              }
              id={index}
              className={styles.card}
            >
              <div className={styles.cardImage}>
                <img src={data.p_img} alt="IMG" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{data.p_name}</h3>
                <p className={styles.description}>{data.p__s_description}</p>
              </div>
              <div
                style={
                  theme === "light"
                    ? {
                        backgroundOrigin: colors.backgroundDark,
                        color: colors.color,
                      }
                    : {
                        backgroundColor: colors.backgroundHeader,
                        color: colors.colorDark,
                      }
                }
                className={styles.cardOverlay}
              >
                <h3 className={styles.cardTitle}>{data.p_name}</h3>

                <p className={styles.cardDescription}>
                  {data.p__l_description}
                </p>
                <br />
                <div className={styles.btnDiv}>
                  <div
                    onClick={() => window.open(data.github, "_blank")}
                    className={styles.buttonView}
                  >
                    <FaGithubSquare size={15} />
                    <a> View Code</a>
                  </div>

                  <div
                    onClick={() => window.open(data.demo, "_blank")}
                    className={styles.buttonCode}
                  >
                    <GoProjectSymlink size={15} />
                    <a>View Project</a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
