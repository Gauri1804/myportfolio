import React, { useState } from 'react'
import styles from './Contact.module.css'
import { FcAlarmClock } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
function Contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [subject, setSubject] = useState();
    const [message, setMessage] = useState();
    return (
        <div className={styles.container}>
            <h2 className={styles.containerTitle}>Get In Touch</h2>
            <p className={styles.containerText}>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className={styles.contactForm}>
                <form className={styles.form}>
                    <label className={styles.formText} > Name:
                        <input className={styles.formInput} id='name' type='text' value={name} onChange={(e) => setName(e.target.value)} required />
                    </label>


                    <label className={styles.formText}>
                        Email:
                        <input className={styles.formInput} id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </label>
                    <label className={styles.formText}>
                        Subject:
                        <input className={styles.formInput} id='subject' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} required />
                    </label>
                    <label className={styles.formText}>
                        Message:
                        <textarea rows={5} cols={50} className={styles.formInputBig} id='message' value={message} onChange={(e) => setMessage(e.target.value)} required />
                    </label>

                    <input type='submit' className={styles.formInputSubmit} />

                </form>


                <div className={styles.contactContainer}>
                    <div className={styles.contactInfoCard}>
                        <h4>Contact Information</h4>
                        <div className={styles.iconContainer}>
                            <span className={styles.iconContainerSpan}><MdEmail /> gauravsingh180477@gmail.com</span>
                            <span className={styles.iconContainerSpan}><FcCellPhone /> +91 6397846708</span>
                            <span className={styles.iconContainerSpan}><FaLocationDot /> Dehradun, Uttarakhand</span>
                            <span className={styles.iconContainerSpan}><FcAlarmClock /> Response time: Within 24 hours</span>
                        </div>
                    </div>
                    <div className={styles.contactME}>
                        <h4>Contact with Me</h4>
                        <div className={styles.contactIcons}>
                            <a><FaGithub size={20} className={` ${styles.commonIcon} ${styles.githubIcon} `} /></a>
                            <a><FaLinkedin size={20}
                                className={` ${styles.commonIcon} ${styles.linkedinIcon} `}
                            /></a>
                            <a><FaTwitterSquare size={20} className={` ${styles.commonIcon} ${styles.twitterIcon} `} /></a>
                            <a><FaWhatsappSquare size={20} className={` ${styles.commonIcon} ${styles.whatsappIcon} `} /></a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Contact