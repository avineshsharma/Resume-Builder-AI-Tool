import React, { useEffect, useState } from "react";

import styles from './Editor.module.css';
import Inputcontrol from "./inputcontrol/inputcontrol";

function Editor(props) {

  const sections = props.sections


  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <Inputcontrol
          label="Name"
          placeholder="Enter your full name eg. Avinesh"
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
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"

        />
        <Inputcontrol
        label="Github-Link "
        placeholder ="Enter your git-hub profile "
        />
      </div>
      <div className={styles.row}>
        <Inputcontrol
          label="Email"
          // value={values.email}
          placeholder="Enter your email"
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, email: event.target.value }))
          // }
        />
        <Inputcontrol
          label="Enter phone"
          // value={values.phone}
          placeholder="Enter your phone number"
          // onChange={(event) =>
          //   setValues((prev) => ({ ...prev, phone: event.target.value }))
          // }
        />
      </div>

    </div >
  );

  const workExpBody = <div className={styles.detail}>
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


  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <Inputcontrol
          label="Title"
          // value ={value.title}
          placeholder="Enter title eg. chat App"
        />

      </div>
      <Inputcontrol
        label="Overview"
        placeholder="Enter basic overview of project"
      />
      <div className={styles.row}>
        <Inputcontrol
          label="Deployed Link"
          placeholder="Enter deployed link of project"
        />

        <Inputcontrol
          label="Git-Hub Link"
          placeholder="Enter git-hub link of project"
        />
      </div>
      <div className={styles.column}>
        <label>Enter project description</label>
        <Inputcontrol
          placeholder="Line 1"
        // value={values.points ? values.points[0] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <Inputcontrol
          placeholder="Line 2"
        // value={values.points ? values.points[1] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <Inputcontrol
          placeholder="Line 3"
        // value={values.points ? values.points[2] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <Inputcontrol
          placeholder="Line 4"
        // value={values.points ? values.points[3] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>

    </div>
  )

  // const education = (
  //   <div className={styles.detail}>
  //     <div className={styles.row}>
  //       <Inputcontrol
  //         label="Title"
  //         // value = {value.title}
  //         placeholder="Enter title eg.BCA"
  //       />
  //     </div>
  //     <Inputcontrol
  //       label="College/School Name"
  //       placeholder="Enter name of your college/school"
  //     />
  //   </div>
  // )

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <Inputcontrol
          label="Title"
          // value={values.title}
          placeholder="Enter title eg. B-tech"

        />
      </div>
      <Inputcontrol
        label="College/School Name"
        // value={values.college}
        placeholder="Enter name of your college/school"

      />
      <div className={styles.row}>
        <Inputcontrol
          label="Start Date"
          type="date"
          placeholder="Enter start date of this education"

        />
        <Inputcontrol
          label="End Date"
          type="date"
          placeholder="Enter end date of this education"
        // value={values.endDate}

        />
      </div>
    </div>
  );



  const achievementsBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <Inputcontrol
          placeholder="Line 1"
        // value={values.points ? values.points[0] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <Inputcontrol
          placeholder="Line 2"
        // value={values.points ? values.points[1] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <Inputcontrol
          placeholder="Line 3"
        // value={values.points ? values.points[2] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <Inputcontrol
          placeholder="Line 4"
        // value={values.points ? values.points[3] : ""}
        // onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );


  const summaryBody = (
    <div className={styles.detail}>
      <Inputcontrol
        label="Summary"
        // value={values.summary}
        placeholder="Enter your objective/summary"
        
      />
    </div>
  );
  const otherBody = (
    <div className={styles.detail}>
      <Inputcontrol
        label="Other"
        // value={values.other}
        placeholder="Enter something"
       
      />
    </div>
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
