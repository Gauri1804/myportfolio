import React, { useContext } from "react";
import styles from "./Home.module.css";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";
import { ThemeContext } from "../../App";
import { colors } from "../../constraint/colors";
const Home = ({ blur }) => {
  //create consumer
  const { theme } = useContext(ThemeContext);
  const RESUME_URL =
    "https://myportfolio-gauri1804s-projects.vercel.app/file_resume.pdf";

  const downloadResumeFile = (url) => {
    // i used this loc to split or get only file path which is after / (but it would be last one if there is multiple / so it will consider last one)
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };
  return (
    <div
      id="home"
      className={`${styles.container}  ${blur ? styles.blurred : " "}`}
      style={
        theme === "light"
          ? {
              backgroundColor: colors.backgroundSemi,
              color: colors.color,
            }
          : {
              backgroundColor: colors.backgroundDark,
              color: colors.colorDark,
            }
      }
    >
      <img
        className={styles.img}
        src="https://firebasestorage.googleapis.com/v0/b/student-portal-baeb9.appspot.com/o/Portfoilo%2FIMG_9155.PNG?alt=media&token=6df19781-f7d0-4352-ae98-5abd766230af"
      />

      <section className={styles.subContainer}>
        <h1>Hi, I'm Gaurav Singh</h1>
        <h3>
          MCA Graduate & Aspiring{" "}
          <Typewriter
            words={["Software Developer", "Front-End Developer"]}
            loop={5}
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />{" "}
        </h3>
        <p>
          Completed MCA with a strong passion for web development and modern
          technologies.
          <br /> technologies. Eager to contribute and learn in a professional
          environment.
        </p>
        <div className={styles.btnContainer}>
          <button
            onClick={() => downloadResumeFile(RESUME_URL)}
            className={styles.getButton}
          >
            Get Resume
          </button>
          <Link
            to="contact"
            offset={-80}
            smooth={true}
            spy={true}
            duration={500}
          >
            <button className={styles.viewButton}>Contact Me</button>{" "}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
