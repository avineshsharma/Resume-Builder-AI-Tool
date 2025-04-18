// import React, { useEffect, useState } from "react";

// // import { ArrowDown } from "react-feather";

// import Editor from "./Editor/Editor";

// import styles from "./Body.module.css";
// import Resume from "../Resume/Resume";

// function Body() {
//     const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
//     const sections = {
//         basicInfo: "Basic Info",
//         workExp: "Work Experience",
//         project: "Projects",
//         Education: "Education",
//         // achievement: "Achievements",
//         summary: "Summary",
//         other: "Other",
//     };
//     const [resumeInformation, setResumeInformation] = useState({
//         [sections.basicInfo]: {
//             id: sections.basicInfo,
//             sectionsTitle: sections.basicInfo,
//             details: {},
//         },



//         [sections.workExp]: {
//             id: sections.workExp,
//             sectionsTitle: sections.workExp,
//             details: [],
//         },


//         [sections.project]: {
//             id: sections.project,
//             sectionsTitle: sections.project,
//             details: [],
//         },

//         [sections.Education]: {
//             id: sections.Education,
//             sectionsTitle: sections.Education,
//             details: {},
//         },

//         [sections.summary]: {
//             id: sections.summary,
//             sectionsTitle: sections.summary,
//             details: [],
//         },


//         [sections.other]: {
//             id: sections.other,
//             sectionsTitle: sections.other,
//             details: [],
//         },
//     })

//     useEffect(() => {
//         console.log(resumeInformation)
//     }, [resumeInformation])
//     return (
//         <div className={styles.container}>
//             <p className={styles.heading}>Resume-builder</p>
//             <div className={styles.toolbar}>
//                 <div className={styles.colors}>
//                     {colors.map((item) => (
//                         <span
//                             key={item}
//                             styles={{ backgroundColor: item }}
//                             className={styles.colors}
//                         />
//                     ))}
//                 </div>
//                 <button>Download
//                     {/* <ArrowDown/> */}
//                 </button>
//             </div>
//             <div className={styles.main}>
//                 <Editor sections={sections}
//                  inforomation={resumeInformation}

//                     setInformation={setResumeInformation}
//                 />
//                 <Resume 
//                 sections={sections}
//                 inforomation={resumeInformation} />
//             </div>

//         </div>
//     );



// }
// export default Body;


import React, { useRef, useState } from "react";
// import ReactToPrint from "react-to-print";
// import { ArrowDown } from "react-feather";

// import Editor from "../Editor/Editor";
import Editor from "./Editor/Editor";
import Resume from "../Resume/Resume";

import styles from "./Body.module.css";

function Body() {
    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        // achievement: "Achievements",
        summary: "Summary",
        other: "Other",
    };
    const resumeRef = useRef();

    const [activeColor, setActiveColor] = useState(colors[0]);
    const [resumeInformation, setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail: {},
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: [],
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: [],
        },
        [sections.education]: {
            id: sections.education,
            sectionTitle: sections.education,
            details: [],
        },
        // [sections.achievement]: {
        //     id: sections.achievement,
        //     sectionTitle: sections.achievement,
        //     points: [],
        // },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: "",
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: "",
        },
    });

    return (
        <div className={styles.container}>
            <p className={styles.heading}>Resume Builder</p>
            <div className={styles.toolbar}>
                <div className={styles.colors}>
                    {colors.map((item) => (
                        <span
                            key={item}
                            style={{ backgroundColor: item }}
                            className={`${styles.color} ${activeColor === item ? styles.active : ""
                                }`}
                            onClick={() => setActiveColor(item)}
                        />
                    ))}
                </div>

                <button>
                    Download
                    {/* <ArrowDown/> */}
                </button>

            </div>
            <div className={styles.main}>
                <Editor
                    sections={sections}
                    information={resumeInformation}
                    setInformation={setResumeInformation}
                />
                <Resume
                    ref={resumeRef}
                    sections={sections}
                    information={resumeInformation}
                    activeColor={activeColor}
                />
            </div>
        </div>
    );
}

export default Body;