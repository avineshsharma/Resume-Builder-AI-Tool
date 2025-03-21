import React, { useState } from "react";

// import { ArrowDown } from "react-feather";

import Editor from "./Editor/Editor";

import styles from "./Body.module.css";

function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        Education: "Education",
        // achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionsTitle: sections.basicInfo,
            details: {},
        },



        [sections.workExp]: {
            id: sections.workExp,
            sectionsTitle: sections.workExp,
            details: [],
        },


        [sections.project]: {
            id: sections.project,
            sectionsTitle: sections.project,
            details: [],
        },

        [sections.Education]: {
            id: sections.Education,
            sectionsTitle: sections.Education,
            details: {},
        },

        [sections.summary]: {
            id: sections.summary,
            sectionsTitle: sections.summary,
            details: [],
        },


        [sections.other]: {
            id: sections.other,
            sectionsTitle: sections.other,
            details: [],
        },
    })
    return (
        <div className={styles.container}>
            <p className={styles.heading}>Resume-builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {colors.map((item) => (
                        <span
                            key={item}
                            styles={{ backgroundColor: item }}
                            className={styles.colors}
                        />
                    ))}
                </div>
                <button>Download
                    {/* <ArrowDown/> */}
                </button>
            </div>
            <div className={styles.main}>
                <Editor sections={sections} inforomation={resumeInformation}

                    setInformation={setResumeInformation}
                />
            </div>

        </div>
    );



}

export default Body;