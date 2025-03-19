import React from "react";

import resumesvg from "../../assets/resume.svg";

import style from './Header.module.css'

function Header() {
    return (
    <>
        <div className={style.container}>
            <div className={style.left}>
            <p className={style.heading}>A <span>Resume</span>
                Resume that stand out !
            </p>
            <p className={style.heading}>
                Make your own resume. <span>It's free</span>
            </p>
            </div>
            <div className={style.right}>
                <img src={resumesvg} alt="resume" />
            </div>
        </div>
        {/* <h1>working</h1> */}
    </>
    );
}


export default Header;