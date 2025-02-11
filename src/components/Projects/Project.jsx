import React from 'react'
import styles from './Project.module.css'
import { FaGithubSquare } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
function Project() {


    const projectDetails = [
        {
            p_name: "Web project",
            p__s_description: "this is my first project",
            p__l_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia fugit sequi ab optio excepturi nesciunt, reiciendis quia dolorem eligendi suscipit, est cum fugiat odio! Accusantium inventore dolore corporis nemo.",
            p_img: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            p_name: "Android Project",
            p__s_description: "this is my second project",
            p__l_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia fugit sequi ab optio excepturi nesciunt, reiciendis quia dolorem eligendi suscipit, est cum fugiat odio! Accusantium inventore dolore corporis nemo.",
            p_img: "https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },

        {
            p_name: "Ai Project",
            p__s_description: "this is my third project",
            p__l_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia fugit sequi ab optio excepturi nesciunt, reiciendis quia dolorem eligendi suscipit, est cum fugiat odio! Accusantium inventore dolore corporis nemo.",
            p_img: "https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },

        {
            p_name: "ML Project",
            p__s_description: "this is my fourth project",
            p__l_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia fugit sequi ab optio excepturi nesciunt, reiciendis quia dolorem eligendi suscipit, est cum fugiat odio! Accusantium inventore dolore corporis nemo.",
            p_img: "https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },

        {
            p_name: "NLP Project",
            p__s_description: "this is my fifth project",
            p__l_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae officia fugit sequi ab optio excepturi nesciunt, reiciendis quia dolorem eligendi suscipit, est cum fugiat odio! Accusantium inventore dolore corporis nemo.",
            p_img: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ]

    return (
        <div className={styles.container}>

            <h1>Featured Project</h1>
            <div className={styles.grid}>

                {
                    projectDetails.map((data, index) => {
                        return (

                            <div id={index} className={styles.card}>
                                <div className={styles.cardImage}>
                                    <img src={data.p_img} alt='IMG' />
                                </div>
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{data.p_name}</h3>
                                    <p className={styles.description}>{data.p__s_description}</p>
                                </div>
                                <div className={styles.cardOverlay}>
                                    <h3 class="card-title">{data.p_name}</h3>

                                    <p class="card-description">{data.p__l_description}</p>
                                    <br />
                                    <div className={styles.btnDiv}>


                                        <div className={styles.buttonView}>
                                            <FaGithubSquare size={15} />
                                            <a > View Code</a>
                                        </div>

                                        <div className={styles.buttonCode}>
                                            <GoProjectSymlink size={15} />
                                            <a >View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    })
                }
            </div>

        </div>
    )
}

export default Project






