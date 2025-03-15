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
import { IoMenu, IoClose } from "react-icons/io5";

const Header = ({ showMenu, handleMenuToggle }) => {

    return (
        <header className={styles.container}>
            <section>
                <h4>GS</h4>
            </section>

            <nav className={`${showMenu ? styles.mobileContainer || styles.show : styles.linkContainer} `}>
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Skills</p>
                <p>Experience</p>
                <p>Contact</p>
            </nav>

            <div className={styles.hamMenu} onClick={handleMenuToggle}>
                {showMenu ? (
                    <IoClose className={styles.menuIcon} />
                ) : (
                    <IoMenu className={styles.menuIcon} />
                )}
            </div>
        </header>
    );
};

export default Header;
