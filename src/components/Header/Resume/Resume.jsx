import React from "react";

import  styles from './Resume.module.css'

function Resume (props){
    return <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.heading}>Name</p>
            <p className={styles.subHeading}>Blockchain developer</p>

            <div className={styles.links}>
                <a className={styles.links}>Email@gmail.com</a>
                <a className={styles.links}>https://linkedin.in/</a>
                <a className={styles.links}>https://github.in/</a>
                
            </div>
        </div>
    </div>
}

export default Resume;