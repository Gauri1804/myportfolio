import React from 'react'
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.container}>
            <section>
                <h4>GS</h4>
            </section>

            <section className={styles.linkContainer}>
                <p>Home</p>
                <p>About </p>
                <p>Projects </p>
                <p>Skills </p>
                <p>Experience </p>
                <p>Contact </p>
            </section>
        </div>
    )
}

export default Header