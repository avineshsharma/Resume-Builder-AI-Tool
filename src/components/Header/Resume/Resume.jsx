import React, { useEffect, useState } from "react";

import styles from './Resume.module.css'

function Resume(props) {

    const [columns, setColumns] = useState([[], []])

    const workExpSection = (
        <div className={`${styles.workExp} ${styles.workExp}`}>
            <div className={styles.sectionTitle}>Work Experience </div>
        </div>
    );

    const projectSection = (
        <div className={`${styles.section} ${styles.project}`}>
            <div className={styles.sectionTitle}>Projects</div>
        </div>
    );

    const educationSection = (
        <div className={`${styles.workExp} ${styles.education}`}>
            <div className={styles.sectionTitle}>Education</div>
        </div>
    );

    const summarySection = (
        <div className={`${styles.workExp} ${styles.summary}`}>
            <div className={styles.sectionTitle}>Summary</div>
        </div>
    );

    const otherSection = (
        <div className={`${styles.workExp} ${styles.other}`}>
            <div className={styles.sectionTitle}>Other</div>
        </div>
    );

    useEffect(() => {
        setColumns([
            [projectSection, educationSection, summarySection],
            [workExpSection, otherSection],
        ]);
    }, []);




    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.heading}>Name</p>
                <p className={styles.subHeading}>Blockchain developer</p>

                <div className={styles.links}>
                    <a className={styles.links}> Email@gmail.com</a>
                    <a className={styles.links}>+91-123456789</a>
                    <a className={styles.links}>https://linkedin.in/</a>
                    <a className={styles.links}>https://github.in/</a>

                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.col1}>
                    {/* {columns[0].map((item) => sectionDiv[item])} */}
                    {columns[0]}
                </div>
                <div className={styles.col2}>
                    {columns[1]}
                    {/* {columns[1].map((item) => sectionDiv[item])} */}
                </div>
            </div>



        </div >
    );
}

export default Resume;