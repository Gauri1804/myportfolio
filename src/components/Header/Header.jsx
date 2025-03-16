// import React, { useState } from 'react';
// import styles from './Header.module.css';
// import { IoMenu, IoClose } from "react-icons/io5";

// const Header = () => {
//     const [showMenu, setShowMenu] = useState(false);

//     // Toggle menu visibility and icon
//     const handleMenuToggle = () => {
//         setShowMenu(!showMenu);
//     };

//     return (
//         <header className={styles.container}>
//             <section>
//                 <h4>GS</h4>
//             </section>



//             <nav className={showMenu ? styles.mobileContainer : styles.linkContainer}>
//                 <p>Home</p>
//                 <p>About</p>
//                 <p>Projects</p>
//                 <p>Skills</p>
//                 <p>Experience</p>
//                 <p>Contact</p>
//             </nav>

//             <div className={styles.hamMenu} onClick={handleMenuToggle}>
//                 {showMenu ? (
//                     <IoClose className={styles.menuIcon} />
//                 ) : (
//                     <IoMenu className={styles.menuIcon} />
//                 )}
//             </div>
//         </header>
//     );
// };

// export default Header;


import React, { useState } from 'react';
import styles from './Header.module.css';
import { IoClose } from "react-icons/io5";
import { MdOutlineMenuOpen } from "react-icons/md";
import { Element, Link } from 'react-scroll';
import Home from '../Home/Home';
const Header = ({ showMenu, handleMenuToggle }) => {

    return (
        <header className={styles.container}>
            <section>
                <h4>GS</h4>
            </section>

            <nav className={`${showMenu ? styles.mobileContainer || styles.show : styles.linkContainer} `}>
                <a>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} onClick={showMenu ? handleMenuToggle : null}>Home</Link>
                </a>
                <a>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu ? handleMenuToggle : null}>About</Link>
                </a>
                <a>
                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu ? handleMenuToggle : null}>Projects</Link>
                </a>
                <a>
                    <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu ? handleMenuToggle : null}>Skills</Link>
                </a>
                <a>
                    <Link to="education" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu ? handleMenuToggle : null}>Education</Link>
                </a>
                <a>
                    <Link to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu ? handleMenuToggle : null}>Experience</Link>
                </a>
                <a>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={showMenu ? handleMenuToggle : null}>Contact</Link>
                </a>

            </nav>

            <div className={styles.hamMenu} onClick={handleMenuToggle}>
                {showMenu ? (
                    <IoClose className={styles.menuIcon} />
                ) : (
                    <MdOutlineMenuOpen className={styles.menuIcon} />
                )}
            </div>
        </header >
    );
};


export default Header;
