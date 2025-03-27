import React, { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import styles from './Contact.module.css'
import { FcAlarmClock } from "react-icons/fc";
import { FaLocationDot } from "react-icons/fa6";
import { FcCellPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { DotLoader, HashLoader } from 'react-spinners';
import { ThemeContext } from '../../App';
import { colors } from '../../constraint/colors';
function Contact({ blur }) {
    const [isLoading, setIsLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const form = useRef();
    const { theme } = useContext(ThemeContext)
    const sendEmail = (e) => {
        setIsLoading(true)
        e.preventDefault();

        emailjs
            .sendForm('service_myz41c6', 'template_eyb5btb', form.current, {
                publicKey: '0l-IjkKICJx8TdrB6',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast("Thank You for contacting...");
                    setTimeout(() => {
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                        setIsLoading(false)
                    }, 3000);

                },
                (error) => {
                    console.log('FAILED...', error);
                    toast.error("something went to wrong...")
                    setTimeout(() => {
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                        setIsLoading(false)
                    }, 2000);

                },
            );
    };


    return (
        <div style={theme === "light" ? {
            color: colors.color,
            backgroundColor: colors.backgroundSemi
        } : {
            color: colors.colorDark,
            backgroundColor: colors.backgroundHeader
        }} id='contact' className={`${styles.container} ${blur ? styles.blurred : ''} `}>
            <ToastContainer />
            <h2 className={styles.containerTitle}>Get In Touch</h2>
            <p className={styles.containerText}>I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div className={styles.contactForm}>

                <form className={styles.form} ref={form} onSubmit={sendEmail}>
                    <h3>Let's talk about something <span>great </span> together</h3>
                    <label className={styles.inputContainer} >
                        <input className={styles.formInput} value={name} onChange={(e) => setName(e.target.value)} name='user_name' id='name' type='text' required />
                        <span>Name</span>
                    </label>


                    <label className={styles.inputContainer}>
                        <input className={styles.formInput} value={email} onChange={(e) => setEmail(e.target.value)} name='user_email' id='email' type='email' required />
                        <span >Email</span>
                    </label>
                    <label className={styles.inputContainer}>
                        <input className={styles.formInput} value={subject} onChange={(e) => setSubject(e.target.value)} name='subject' id='subject' type='text' required />
                        <span >Subject</span>
                    </label>
                    <label className={styles.inputContainer}>
                        <textarea rows={5} cols={50} value={message} onChange={(e) => setMessage(e.target.value)} name='message' className={styles.formInput} id='message' required />
                        <span > Message</span>
                    </label>
                    <div style={{ display: isLoading ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center' }}>
                        <HashLoader loading={isLoading} color="#18732b" />
                    </div>

                    <input type='submit' value={isLoading ? "Loading..." : "Send"} className={styles.formInputSubmit} />

                </form>


                <div className={styles.contactContainer}>
                    <div
                        className={styles.contactInfoCard}>
                        <h4 >Contact Information</h4>
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