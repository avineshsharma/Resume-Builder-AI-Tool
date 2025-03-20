import React, { useEffect, useState } from "react";

import styles from './Editor.module.css';
import Inputcontrol from "./inputcontrol/inputcontrol";

function Editor(props) {

  const sections = props.sections


  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const workExBody = <div className={styles.detail}>
    <div className={styles.row}>
      <Inputcontrol
        label="Title"
        placeholder="Enter title eg. FrontEnd Developer"
      />
      <Inputcontrol
        label="Company Name"
        placeholder="Enter company name eg. google"
      />
    </div>
    <div className={styles.row}>
      <Inputcontrol
        label="Certificate Link "
        placeholder="Enter certificate link"
      />
      <Inputcontrol
        label="Location "
        placeholder="Enter location eg.WFO"
      />
    </div>
    <div className={styles.row}>
      <Inputcontrol
        label="start Date"
        type="date"
        placeholder="Enter start date of work"
      />
    </div>
    <div className={styles.row}>
      <Inputcontrol
        label="End Date"
        type="date"
        placeholder="Enter End date of work"
      />
    </div>
    <div className={styles.column}>
      <label>Enter work description</label>
      <Inputcontrol placeholder="Line 1" />
      <Inputcontrol placeholder="Line 2" />
      <Inputcontrol placeholder="Line 3" />
    </div>
  </div>;


  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <Inputcontrol
          label="Name"
          placeholder="Enter your full name eg. Aashu"
          // value={values.name}
        />

        <Inputcontrol
          label="Title"
          // value={values.title}
          placeholder="Enter your title eg. Frontend developer"
        />
      </div>
      <div className={styles.row}>
        <Inputcontrol
        label="Linkedi Link"
        placeholder ="Enter your linkedin profile link"

        />
      </div>
      
    </div >
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basicInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievement:
        return achievementsBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.header}>

        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${activeSectionKey === key ? styles.active : ""
              }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>

        {/* <Inputcontrol label="Title" placeholder="Enter section title" /> */}


        {generateBody()}
      </div>
    </div>
  )
}

export default Editor;
