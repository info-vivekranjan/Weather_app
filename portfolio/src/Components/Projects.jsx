import React from 'react';

import { data } from '../data/projects.js';
import styles from './Css/Projects.module.css';

function Projects() {




    return (
        <div className={styles.projectContainer}>
            <h1 style={{ fontSize: "40px", color: "#262626" }}>Projects</h1>


            <div className={styles.mainProjectCont} >

                {
                    data.map((item) => {
                        return <div className={styles.eachProjectCont}>

                            <div className={styles.eachProjectImg}>
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className={styles.eachProjectHeading}>
                                {item.heading}
                            </div>

                            <div className={styles.eachProjectDesc}>
                                {item.description}
                            </div>
                            <div>

                                <div className={styles.eachProjectTechStack}>
                                    {
                                        item.techStack.tech1 &&
                                        <div><img src={item?.techStack?.tech1} /></div>
                                    }

                                    {
                                        item.techStack.tech2 &&
                                        <div><img src={item?.techStack?.tech2} /></div>
                                    }

                                    {
                                        item.techStack.tech3 &&
                                        <div><img src={item?.techStack?.tech3} /></div>
                                    }

                                    {
                                        item.techStack.tech4 &&
                                        <div><img src={item?.techStack?.tech4} /></div>
                                    }

                                    {
                                        item.techStack.tech5 &&
                                        <div><img src={item?.techStack?.tech5} /></div>
                                    }

                                    {
                                        item.techStack.tech6 &&
                                        <div><img src={item?.techStack?.tech6} /></div>
                                    }

                                </div>

                                <div className={styles.projectBtnCont}>
                                    <div className={styles.demoButton}>
                                        <a href={`${item.demo}`} target="_blank">Demo</a>
                                    </div>

                                    <div className={styles.githubButton}>
                                        <a href={`${item.github}`} target="_blank">Github</a>
                                    </div>

                                </div>


                            </div>

                        </div>
                    })
                }

            </div>

        </div>


    )
}

export { Projects }