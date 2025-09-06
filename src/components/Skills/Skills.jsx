import React, { useContext } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaSass,
  FaNodeJs,
  FaFire,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiFigma, SiExpress } from "react-icons/si";
import { MdOutlineApi, MdDevices } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import { HiCommandLine } from "react-icons/hi2";
import styles from "./Skills.module.css";
import { ThemeContext } from "../../App";
import { colors } from "../../constraint/colors";
import { FaVuejs } from "react-icons/fa6";

const skillData = [
  //Frontend Data
  {
    category: "Frontend",
    items: [
      {
        name: "HTML5",
        icon: <FaHtml5 className="icon" color="#E34F26" size={24} />,
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt className="icon" color="#1572B6" size={24} />,
      },
      {
        name: "JavaScript",
        icon: <FaJs className="icon" color="#F7DF1E" size={24} />,
      },
      {
        name: "React.js",
        icon: <FaReact className="icon" color="#61DAFB" size={24} />,
      },
      {
        name: "Vue.js",
        icon: <FaVuejs className="icon" color="green" size={24} />,
      },
      {
        name: "Sass",
        icon: <FaSass className="icon" color="#CC6699" size={24} />,
      },
      {
        name: "Tailwind CSS",
        icon: <RiTailwindCssFill className="icon" color="#38B2AC" size={24} />,
      },
    ],
  },

  //Backend Data
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs color="green" size={24} /> },
      { name: "Express.js", icon: <SiExpress color="purple" size={24} /> },
      { name: "MongoDB", icon: <SiMongodb color="green" size={24} /> },
      { name: "MySQL", icon: <SiMysql color="blue" size={24} /> },
      { name: "Firebase", icon: <FaFire color="red" size={24} /> },
    ],
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", icon: <FaGitAlt color="#F05032" size={24} /> }, // Git (Orange-Red)
      { name: "React-Native", icon: <FaReact color="#2496ED" size={24} /> }, // Docker (Blue)
      { name: "Figma", icon: <SiFigma color="#F24E1E" size={24} /> }, // Figma (Red-Orange)
      { name: "CLI", icon: <HiCommandLine color="#808080" size={24} /> }, // CLI (Gray)
      { name: "REST API", icon: <MdOutlineApi color="#4DB6AC" size={24} /> }, // REST API (Teal)
      { name: "Responsive", icon: <MdDevices color="#43A047" size={24} /> }, // Responsive (Green)
    ],
  },
];

const Skills = ({ blur }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="skills" className={blur ? styles.blurred : ""}>
      <h2
        style={
          theme === "light"
            ? {
                color: colors.color,
                textAlign: "center",
              }
            : {
                color: colors.colorDark,
                textAlign: "center",
              }
        }
      >
        Skills & Technologies
      </h2>

      <div className={styles.cardContainer}>
        {skillData.map((section, index) => (
          <div
            style={
              theme === "light"
                ? {
                    backgroundColor: colors.background,
                    color: colors.color,
                  }
                : {
                    color: colors.colorDark,
                    backgroundColor: colors.backgroundHeader,
                  }
            }
            className={styles.card}
            key={index}
          >
            <h2 className={styles.title}>{section.category}</h2>
            <ul className={styles.cardList}>
              {section.items.map((item, idx) => (
                <li className={styles.cardListItems} key={idx}>
                  <span className={styles.icon}>{item.icon} </span>{" "}
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
