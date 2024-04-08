import React, { useEffect } from "react";
import "./resume-page.css";
import AOS from "aos";
import "aos/dist/aos.css";
import prajjwal_resume from "../../assets/prajjwal_resume.jpg";

function ResumePage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="resume ">
      {/* <a 
      href={https://drive.google.com/file/d/1zAYW3eKQF2NninIkeTk_jDbQ3G92WNiE/view?usp=sharing} 
      target="_blank" rel="noreferrer">
      <img src={prajjwal_resume} alt="Resume" className="resume__image" />
      </a> */}
      <a
        href="https://drive.google.com/file/d/1zAYW3eKQF2NninIkeTk_jDbQ3G92WNiE/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <img src={prajjwal_resume} alt="Resume" className="resume__image" />
      </a>
      <a
        href="https://drive.google.com/file/d/1zAYW3eKQF2NninIkeTk_jDbQ3G92WNiE/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <button
          className="resume__button"
          // data-aos="fade-up"
          // data-aos-duration="1000"
        >
          View
        </button>
      </a>
    </div>
  );
}

export default ResumePage;
