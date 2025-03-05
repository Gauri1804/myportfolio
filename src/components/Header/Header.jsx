import React, { useState } from 'react'
import styles from './Header.module.css'
import { IoMenu } from "react-icons/io5";
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header className={styles.container}>
            <section>
                <h4>GS</h4>
            </section>

            <nav className={showMenu ? styles.mobileContainer : styles.linkContainer}>
                <p>Home</p>
                <p>About </p>
                <p>Projects </p>
                <p>Skills </p>
                <p>Experience </p>
                <p>Contact </p>
            </nav>
            <div className={styles.hamMenu} onClick={() => setShowMenu(!showMenu)}>
                <IoMenu className={styles.menuIcon} />
            </div>
        </header>
    )
}

export default Header